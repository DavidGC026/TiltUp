import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2, Save, X, ChevronLeft, ChevronRight, GripVertical, Maximize2, Minimize2, Plus, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

// --- Types ---
type Color = "orange" | "green" | "blue" | "red" | "yellow" | "purple";
type WeekData = {
    [week: number]: { color: Color; active: boolean } | undefined;
};

interface RowData {
    id: string;
    activity: string;
    weeks: WeekData;
}

interface FormatData {
    id: number;
    title: string;
    rows: RowData[];
}

// --- Mock Data (Fallback) ---
const MOCK_FORMATS: FormatData[] = [
    {
        id: 1,
        title: "Formato 1",
        rows: [
            { id: "r1", activity: "Actividad 1", weeks: { 1: { color: "orange", active: true } } },
            { id: "r2", activity: "Actividad 2", weeks: { 2: { color: "green", active: true } } },
        ],
    },
    {
        id: 2,
        title: "Formato 2",
        rows: [
            { id: "f2_r1", activity: "Actividad A", weeks: { 3: { color: "blue", active: true } } },
            { id: "f2_r2", activity: "Actividad B", weeks: { 4: { color: "purple", active: true } } },
        ],
    },
];

const COLORS: { id: Color; hex: string; label: string }[] = [
    { id: "orange", hex: "#f97316", label: "Naranja" },
    { id: "green", hex: "#22c55e", label: "Verde" },
    { id: "blue", hex: "#3b82f6", label: "Azul" },
    { id: "red", hex: "#ef4444", label: "Rojo" },
    { id: "purple", hex: "#a855f7", label: "Morado" },
    { id: "yellow", hex: "#eab308", label: "Amarillo" },
];

export function GanttEditor() {
    // State
    const { user } = useAuth();
    const { toast } = useToast();
    const [formats, setFormats] = useState<FormatData[]>(MOCK_FORMATS);
    const [currentFormatIndex, setCurrentFormatIndex] = useState(0);
    const [isEditMode, setIsEditMode] = useState(false);
    const [showGantt, setShowGantt] = useState(false);
    const [selectedColor, setSelectedColor] = useState<Color>("orange");
    const [isDragging, setIsDragging] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const currentFormat = formats[currentFormatIndex] || formats[0];

    // Fetch Data on Load
    useEffect(() => {
        // We don't strictly need user availability on client to call api/gantt.php 
        // because auth.php handles 401, but checking user context is good UI practice.
        if (!user) return;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                // PHP Backend API
                const res = await fetch("/TiltUp/api/gantt.php");
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.formats && data.formats.length > 0) {
                        setFormats(data.formats);
                    }
                }
            } catch (error) {
                console.error("Error loading Gantt data:", error);
                toast({
                    title: "Error",
                    description: "No se pudieron cargar los datos guardados.",
                    variant: "destructive"
                });
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [user, toast]);

    const handleSave = async () => {
        if (!user) return;
        setIsSaving(true);
        try {
            // PHP Backend API
            const res = await fetch("/TiltUp/api/gantt.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ formats }),
            });

            if (!res.ok) throw new Error("Failed to save");

            const result = await res.json();
            if (result.error) {
                throw new Error(result.error);
            }

            toast({
                title: "Guardado",
                description: "Los cambios han sido guardados exitosamente.",
            });
            setIsEditMode(false);
        } catch (error) {
            console.error("Error saving Gantt data:", error);
            toast({
                title: "Error",
                description: "No se pudieron guardar los cambios.",
                variant: "destructive"
            });
        } finally {
            setIsSaving(false);
        }
    };

    const toggleEditMode = () => {
        if (isEditMode) {
            // If we are currently editing and click button (which shows "Guardar"), we save
            handleSave();
        } else {
            setIsEditMode(true);
        }
    };

    // Logic to update a cell
    const updateCell = (rowId: string, week: number, value: boolean, color?: Color) => {
        setFormats((prevFormats) => {
            const newFormats = [...prevFormats];
            const format = { ...newFormats[currentFormatIndex] }; // Shallow copy format
            // Deep copy rows to update safely (React state immutability)
            format.rows = format.rows.map(r => {
                if (r.id === rowId) {
                    const newRow = { ...r, weeks: { ...r.weeks } };
                    if (value) {
                        newRow.weeks[week] = { active: true, color: color || selectedColor };
                    } else {
                        delete newRow.weeks[week];
                    }
                    return newRow;
                }
                return r;
            });
            newFormats[currentFormatIndex] = format;
            return newFormats;
        });
    };

    const updateActivityName = (rowId: string, name: string) => {
        setFormats((prevFormats) => {
            const newFormats = [...prevFormats];
            const format = { ...newFormats[currentFormatIndex] };
            format.rows = format.rows.map(r => r.id === rowId ? { ...r, activity: name } : r);
            newFormats[currentFormatIndex] = format;
            return newFormats;
        });
    }

    const updateFormatTitle = (title: string) => {
        setFormats((prevFormats) => {
            const newFormats = [...prevFormats];
            newFormats[currentFormatIndex] = { ...newFormats[currentFormatIndex], title };
            return newFormats;
        });
    };

    const addNewFormat = () => {
        const newId = Math.max(0, ...formats.map(p => p.id)) + 1;
        const newFormat: FormatData = {
            id: newId,
            title: `Formato ${newId}`,
            rows: Array.from({ length: 5 }).map((_, i) => ({
                id: `new_${newId}_${i}`,
                activity: "",
                weeks: {}
            }))
        };
        const newFormats = [...formats, newFormat];
        setFormats(newFormats);
        setCurrentFormatIndex(newFormats.length - 1);
        setIsEditMode(true);
    };

    const deleteCurrentFormat = () => {
        if (formats.length <= 1) {
            alert("No puedes eliminar el único formato restante.");
            return;
        }
        if (confirm("¿Estás seguro de eliminar este formato permanentemente?")) {
            const newFormats = formats.filter((_, i) => i !== currentFormatIndex);
            setFormats(newFormats);
            setCurrentFormatIndex(0);
        }
    };

    // Handle Drag & Paint
    const handleMouseEnter = (rowId: string, week: number) => {
        if (isDragging && (isEditMode || showGantt)) {
            updateCell(rowId, week, true, selectedColor);
        }
    };

    const calculateProgress = (row: RowData) => {
        const totalWeeks = 5;
        const activeWeeks = Object.keys(row.weeks).length;
        return Math.round((activeWeeks / totalWeeks) * 100);
    };

    if (isLoading) {
        return (
            <Card className="w-full min-h-[400px] flex items-center justify-center border-slate-200 dark:border-slate-800">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </Card>
        );
    }

    if (!currentFormat) return null;

    return (
        <Card className={cn(
            "w-full bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col transition-all duration-300",
            isFullscreen ? "fixed inset-0 z-50 h-screen w-screen rounded-none m-0 border-0" : "min-h-[600px]"
        )}>
            {/* Header / Toolbar */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex items-center gap-3 flex-1">
                    {isEditMode ? (
                        <Input
                            value={currentFormat.title}
                            onChange={(e) => updateFormatTitle(e.target.value)}
                            className="font-semibold text-lg max-w-[250px]"
                        />
                    ) : (
                        <>
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="font-bold text-sm">{currentFormatIndex + 1}</span>
                            </div>
                            <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">
                                {currentFormat.title}
                            </h3>
                        </>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    {/* Pagination */}
                    <div className="flex items-center bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-800 p-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            disabled={currentFormatIndex === 0}
                            onClick={() => setCurrentFormatIndex(p => p - 1)}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <span className="px-2 text-xs font-medium text-slate-500">
                            {currentFormatIndex + 1} / {formats.length}
                        </span>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            disabled={currentFormatIndex === formats.length - 1}
                            onClick={() => setCurrentFormatIndex(p => p + 1)}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Format Management Global Buttons */}
                    <div className="flex items-center gap-1 bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-800 p-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-green-600 hover:text-green-700 hover:bg-green-50"
                            onClick={addNewFormat}
                            title="Crear Nuevo Formato"
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-red-400 hover:text-red-600 hover:bg-red-50"
                            onClick={deleteCurrentFormat}
                            title="Eliminar este formato"
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1" />

                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="gantt-mode"
                            checked={showGantt}
                            onCheckedChange={(c) => setShowGantt(!!c)}
                        />
                        <Label htmlFor="gantt-mode" className="cursor-pointer text-sm font-medium hidden sm:inline-block">
                            Gantt
                        </Label>
                    </div>

                    <Button
                        variant={isEditMode ? "secondary" : "outline"}
                        size="sm"
                        onClick={toggleEditMode}
                        disabled={isSaving}
                        className="gap-2 ml-1"
                    >
                        {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : (isEditMode ? <Save className="h-4 w-4" /> : <Pencil className="h-4 w-4" />)}
                        <span className="hidden sm:inline">{isEditMode ? "Guardar" : "Editar"}</span>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 ml-1"
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
                    >
                        {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                    </Button>
                </div>
            </div>

            {/* Editor Controls (Colors) */}
            {(isEditMode || showGantt) && (
                <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center gap-4 text-sm animate-in slide-in-from-top-2">
                    <span className="text-slate-500 font-medium">Herramientas:</span>
                    <div className="flex items-center gap-2">
                        {COLORS.map((c) => (
                            <button
                                key={c.id}
                                onClick={() => setSelectedColor(c.id)}
                                className={cn(
                                    "w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2",
                                    selectedColor === c.id ? "border-slate-900 dark:border-white scale-110" : "border-transparent"
                                )}
                                style={{ backgroundColor: c.hex }}
                                title={`Seleccionar ${c.label}`}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-slate-400 ml-auto hidden sm:inline-block">
                        Tip: Arrastra el mouse para pintar celdas
                    </span>
                </div>
            )}

            {/* Main Content Area */}
            <div
                className="flex-1 overflow-auto p-4"
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
            >
                <div className="min-w-[700px]">
                    {/* Table Header */}
                    <div className="grid grid-cols-7 gap-1 mb-2 font-medium text-slate-500 text-sm">
                        <div className="col-span-2 px-2">Actividad Crítica</div>
                        {[1, 2, 3, 4, 5].map(w => (
                            <div key={w} className="text-center">Semana {w}</div>
                        ))}
                    </div>

                    {/* Rows */}
                    <div className="space-y-1">
                        {currentFormat.rows.map((row) => (
                            <div
                                key={row.id}
                                className="grid grid-cols-7 gap-1 items-center hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-md p-1 transition-colors"
                            >
                                <div className="col-span-2 px-2">
                                    {isEditMode ? (
                                        <Input
                                            value={row.activity}
                                            onChange={(e) => updateActivityName(row.id, e.target.value)}
                                            className="h-8 text-sm"
                                        />
                                    ) : (
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{row.activity}</span>
                                            {showGantt && <span className="text-xs text-slate-400">{calculateProgress(row)}% completado</span>}
                                        </div>
                                    )}
                                </div>

                                {/* Week Cells */}
                                {[1, 2, 3, 4, 5].map((week) => {
                                    const cell = row.weeks[week];
                                    const isActive = !!cell;
                                    const cellColor = cell?.color ? COLORS.find(c => c.id === cell.color)?.hex : 'transparent';

                                    return (
                                        <div
                                            key={week}
                                            className="h-10 relative flex items-center justify-center"
                                            onMouseDown={() => { setIsDragging(true); updateCell(row.id, week, !isActive, selectedColor); }}
                                            onMouseEnter={() => handleMouseEnter(row.id, week)}
                                        >
                                            {/* Standard View: Simple X or Box */}
                                            {!showGantt && (
                                                <div
                                                    className={cn(
                                                        "w-full h-full border border-slate-200 dark:border-slate-800 rounded-md flex items-center justify-center cursor-pointer transition-all",
                                                        isActive ? "opacity-100" : "opacity-40 hover:opacity-100 bg-slate-50"
                                                    )}
                                                    style={{
                                                        backgroundColor: isActive ? `${cellColor}20` : undefined,
                                                        borderColor: isActive ? cellColor : undefined
                                                    }}
                                                >
                                                    {isActive ? (
                                                        isEditMode ? (
                                                            <span className="text-xs font-bold" style={{ color: cellColor }}>X</span>
                                                        ) : (
                                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cellColor }} />
                                                        )
                                                    ) : isEditMode ? (
                                                        <span className="text-xs text-slate-300 opacity-0 hover:opacity-100">+</span>
                                                    ) : null}
                                                </div>
                                            )}

                                            {/* Gantt View: Connected Bars */}
                                            {showGantt && (
                                                <div className="w-full h-full flex items-center justify-center cursor-pointer relative">
                                                    {/* Guide Line */}
                                                    <div className="absolute inset-0 border-x border-dashed border-slate-100 dark:border-slate-800 pointer-events-none" />

                                                    {/* The Bar Segment */}
                                                    {isActive && (
                                                        <div
                                                            className="h-6 w-full shadow-sm relative z-10 transition-all"
                                                            style={{
                                                                backgroundColor: cellColor,
                                                                borderRadius:
                                                                    // Simple logic to round corners if neighbors are not same color (simplified)
                                                                    '4px'
                                                            }}
                                                        />
                                                    )}

                                                    {/* Ghost Bar for Dragging Feedback */}
                                                    {!isActive && isDragging && (
                                                        <div className="h-6 w-full bg-slate-100 dark:bg-slate-800 rounded opacity-50" />
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400 flex justify-between">
                        <p>* Los cambios se guardan localmente en esta sesión.</p>
                        <p>Módulo de Control y Seguimiento v1.0</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
