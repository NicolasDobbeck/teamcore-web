'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AdicionarFuncionario from "./adicionar-funcionario-form"

export default function CadastrarFuncionarioDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition">
          Cadastrar Funcionário
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Cadastro de Funcionário</DialogTitle>
        </DialogHeader>

        <AdicionarFuncionario />
      </DialogContent>
    </Dialog>
  )
}
