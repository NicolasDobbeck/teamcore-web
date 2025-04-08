"use client"
import React, { useEffect, useState } from "react"

interface Funcionario {
  id: number
  nome: string
}

const FuncionariosList: React.FC = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        const res = await fetch("http://localhost:8080/colaboradores")
        if (!res.ok) throw new Error("Erro ao buscar colaboradores")
        const data = await res.json()
        setFuncionarios(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFuncionarios()
  }, [])

  if (isLoading) return <div className="p-4">Carregando...</div>
  if (error) return <div className="p-4 text-red-600">Erro: {error}</div>

  return (
    <div className="p-4">
      <div className="space-y-2">
        {funcionarios.map((func) => (
          <div
            key={func.id}
            className="flex items-center bg-emerald-200 p-3 rounded-lg shadow-sm justify-between"
          >
            <span className="text-lg font-semibold text-gray-800">
              {func.nome}
            </span>
            <button className="text-gray-900 text-4xl">⋮</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FuncionariosList
