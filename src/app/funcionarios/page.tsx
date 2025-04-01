import NavBar from "@/components/nav-bar";
import FuncionariosList from "@/components/funcionariosList";

export default function FuncionariosPage() {
    return (
        <>
            <NavBar active="funcionarios" />
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Funcionários</h2>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                        + Adicionar funcionário
                    </button>
                </div>
                <FuncionariosList />
            </div>
        </>
    );
}
