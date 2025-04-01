import NavBar from "@/components/nav-bar";

export default function CargosPage() {
    return (
        <>
            <NavBar active="cargos" />

            <main className="flex justify-center">
                <div className="bg-emerald-900 p-6 m-6 rounded min-w-1/3">
                    <h2 className="text-white">Cargos</h2>
                </div>
            </main>
        </>
    )
}