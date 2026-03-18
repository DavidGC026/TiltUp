import { Header } from "@/components/Header";
import BitacoraFormEditor from "@/components/BitacoraFormEditor";

export default function BitacoraPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto py-6">
                <BitacoraFormEditor />
            </main>
        </div>
    );
}
