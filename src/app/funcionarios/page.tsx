import AdicionarFuncionario from "@/components/adicionar-funcionario"
import NavBar from "@/components/nav-bar"

export default function FuncionariosPage() {
  return (
    <>
      <NavBar active="funcionarios" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Adicionar Funcionário</h2>
        <AdicionarFuncionario />
      </div>
    </>
  )
}
