import React from "react";
import { funcionarios } from "@/data/funcionarios";

const FuncionariosList: React.FC = () => {
  return (
    <div className="p-4">
      <div className="space-y-2">
        {funcionarios.map((func) => (
          <div
            key={func.id}
            className="flex items-center bg-emerald-200 p-3 rounded-lg shadow-sm justify-between"
          >
            <div className="flex items-center gap-3">
              <img src={func.foto} alt={func.nome} className="w-10 h-10 rounded-full" />
              <span className="text-lg font-semibold text-gray-800">{func.nome}</span>
            </div>
            <button className="text-gray-900 text-4xl">⋮</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuncionariosList;