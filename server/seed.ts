import { db, poolConnection } from "./db";
import { modules } from "@shared/schema";

async function seed() {
  console.log("🌱 Seeding database...");

  const initialModules = [
    {
      id: "modulo-1",
      number: 1,
      title: "Planificación y Diseño",
      description: "Fundamentos de la planificación arquitectónica y diseño estructural para proyectos Tilt-Up. Aprende a crear planos técnicos y calcular especificaciones.",
      content: `En este módulo aprenderás los conceptos fundamentales de la planificación y diseño en construcción Tilt-Up:

• Introducción al sistema constructivo Tilt-Up
• Análisis de sitio y condiciones del terreno
• Diseño estructural de paneles prefabricados
• Cálculo de cargas y especificaciones técnicas
• Elaboración de planos arquitectónicos
• Software de diseño asistido por computadora (CAD)
• Normativas y códigos de construcción aplicables
• Coordinación con ingenieros estructurales
• Presupuestación inicial del proyecto

Objetivos de aprendizaje:
- Comprender los principios básicos del diseño Tilt-Up
- Desarrollar habilidades en lectura e interpretación de planos
- Aplicar normativas de construcción vigentes
- Realizar cálculos estructurales básicos

Duración estimada: 8 horas de estudio`,
      imageUrl: "/generated_images/Planning_and_design_module_a2d487e6.png",
      progress: 0,
      completed: false,
    },
    {
      id: "modulo-2",
      number: 2,
      title: "Cimentación y Losas",
      description: "Técnicas de preparación del terreno, construcción de cimientos y losas de concreto. Incluye instalación de acero de refuerzo y procesos de vaciado.",
      content: `Domina las técnicas esenciales de cimentación y construcción de losas:

• Preparación y excavación del terreno
• Diseño y construcción de sistemas de drenaje
• Instalación de mallas de acero de refuerzo
• Cálculo de especificaciones de concreto
• Técnicas de vaciado y nivelación
• Control de calidad del concreto
• Curado adecuado de superficies
• Juntas de construcción y expansión
• Acabados superficiales de losas

Temas especializados:
- Refuerzo estructural con varillas corrugadas
- Sistemas de tensado post-tensionado
- Pruebas de resistencia del concreto
- Prevención de fisuras y agrietamientos
- Impermeabilización de cimientos

Herramientas y equipamiento:
- Mezcladoras de concreto
- Vibradores y alisadoras
- Equipos de medición y nivelación
- Herramientas de corte y doblado de acero

Duración estimada: 10 horas de estudio`,
      imageUrl: "/generated_images/Foundation_and_slabs_module_3a63acb7.png",
      progress: 0,
      completed: false,
    },
    {
      id: "modulo-3",
      number: 3,
      title: "Acabado del Edificio",
      description: "Proceso completo de levantamiento de paneles Tilt-Up, instalación y acabados finales. Aprende sobre grúas, conexiones estructurales y detalles arquitectónicos.",
      content: `Aprende el proceso completo de levantamiento y acabado de estructuras Tilt-Up:

• Preparación de paneles prefabricados
• Técnicas de izado con grúas especializadas
• Sistemas de apuntalamiento temporal
• Conexiones estructurales entre paneles
• Sellado de juntas y acabados
• Instalación de sistemas de fachada
• Acabados arquitectónicos exteriores
• Revestimientos y tratamientos superficiales
• Control de calidad final

Procesos de levantamiento:
- Planificación logística del izado
- Coordinación con operadores de grúa
- Seguridad en operaciones de altura
- Secuencia óptima de instalación
- Ajustes y alineación de paneles

Acabados especializados:
- Texturas arquitectónicas en concreto
- Tratamientos de color y pigmentación
- Aislamiento térmico y acústico
- Sistemas de impermeabilización
- Instalación de ventanas y aberturas

Duración estimada: 12 horas de estudio`,
      imageUrl: "/generated_images/Building_finishing_module_e7bf71f0.png",
      progress: 0,
      completed: false,
    },
    {
      id: "modulo-4",
      number: 4,
      title: "Formatos de Apoyo para Campo",
      description: "Documentación técnica, reportes de obra y formatos de control de calidad. Gestión de proyectos y coordinación de equipos en campo.",
      content: `Domina la documentación y gestión técnica de proyectos Tilt-Up:

• Formatos de control de calidad en obra
• Reportes diarios de avance de construcción
• Documentación de procesos constructivos
• Registros fotográficos y bitácora de obra
• Gestión de recursos y materiales
• Coordinación de equipos multidisciplinarios
• Programación y cronogramas de trabajo
• Control de costos y presupuestos
• Normativas de seguridad industrial

Documentación técnica:
- Formatos de inspección de materiales
- Reportes de pruebas de concreto
- Certificaciones de calidad
- Minutas de reuniones técnicas
- Órdenes de cambio y modificaciones

Gestión de proyecto:
- Metodologías de planificación (CPM, PERT)
- Software de gestión de construcción
- Comunicación con stakeholders
- Resolución de conflictos en obra
- Entrega y cierre de proyectos

Seguridad y cumplimiento:
- Protocolos de seguridad en sitio
- Equipos de protección personal (EPP)
- Procedimientos de emergencia
- Auditorías de seguridad

Duración estimada: 8 horas de estudio`,
      imageUrl: "/generated_images/Field_support_formats_module_4af6fe7b.png",
      progress: 0,
      completed: false,
    },
  ];

  try {
    const existingModules = await db.select().from(modules);

    if (existingModules.length > 0) {
      console.log(`✅ Database already has ${existingModules.length} modules. Skipping seed.`);
      return;
    }

    await db.insert(modules).values(initialModules);
    console.log("✅ Database seeded successfully with 4 modules!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

seed()
  .then(async () => {
    console.log("🎉 Seed completed!");
    await poolConnection.end();
    process.exit(0);
  })
  .catch(async (error) => {
    console.error("💥 Seed failed:", error);
    await poolConnection.end();
    process.exit(1);
  });
