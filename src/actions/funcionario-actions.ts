// src/actions/funcionario-actions.ts
'use server'

import { redirect } from "next/navigation"

export async function createFuncionario(formData: FormData) {
  const data = {
    ra: formData.get("ra"),
    nome: formData.get("nome"),
    sexo: formData.get("sexo"),
    dataNascimento: formData.get("dataNascimento"),
    idDepartamento: formData.get("idDepartamento"),
  }

  await fetch("http://localhost:8080/colaboradores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  redirect("/funcionarios")
  
}
