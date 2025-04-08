import CadastrarFuncionarioDialog from "@/components/adicionar-funcionario-dialog"
import NavBar from "@/components/nav-bar"

export default function FuncionariosPage() {
  return (
    <>
      <NavBar active="funcionarios" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Funcionários</h2>

        {/* Botão que abre o modal */}
        <CadastrarFuncionarioDialog />
      </div>
    </>
  )
}
