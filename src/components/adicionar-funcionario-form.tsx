"use client"

import { createFuncionario } from "@/actions/funcionario-actions"

export default function AdicionarFuncionario() {
  return (
    <form action={createFuncionario} className="space-y-4 bg-white p-4 rounded-md shadow">
      <label className="block">
        <span className="text-gray-700 font-semibold">RA</span>
        <input
          type="text"
          name="ra"
          required
          placeholder="Ex: A1234567"
          className="mt-1 block w-full border px-3 py-2 rounded-md"
        />
      </label>

      <label className="block">
        <span className="text-gray-700 font-semibold">Nome</span>
        <input
          type="text"
          name="nome"
          required
          placeholder="Ex: João Silva"
          className="mt-1 block w-full border px-3 py-2 rounded-md"
        />
      </label>

      <label className="block">
        <span className="text-gray-700 font-semibold">Sexo</span>
        <select
          name="sexo"
          required
          className="mt-1 block w-full border px-3 py-2 rounded-md"
        >
          <option value="">Selecione...</option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
      </label>

      <label className="block">
        <span className="text-gray-700 font-semibold">Data de Nascimento</span>
        <input
          type="date"
          name="dataNascimento"
          required
          className="mt-1 block w-full border px-3 py-2 rounded-md"
        />
      </label>

      <label className="block">
        <span className="text-gray-700 font-semibold">ID do Departamento</span>
        <input
          type="number"
          name="idDepartamento"
          required
          placeholder="Ex: 2"
          className="mt-1 block w-full border px-3 py-2 rounded-md"
        />
      </label>

      <button
        type="submit"
        className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition"
      >
        Adicionar Funcionário
      </button>
    </form>
  )
}
