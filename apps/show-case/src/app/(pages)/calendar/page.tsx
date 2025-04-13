"use client";

// O CalendarInput aqui já está sendo utilizado do TurboRepo
import { CalendarInput } from "@repo/ui";
import { ChangeEvent, useState } from "react";

export default function HomeCalendarPreview() {
  // Estado para armazenar a data selecionada
  const [selectedDate, setSelectedDate] = useState<string>("");

  // Função para manipular a mudança de data
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    console.log("Data selecionada:", event.target.value);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-40 pt-6 bg-gray-100">
      {/* Descrição básica */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Calendário de Seleção de Datas - Agora DS
        </h1>
        <p className="p-24 mb-2 text-gray-600">
          Use o calendário abaixo para selecionar uma data. <br /> Este
          componente é reutilizável e pode ser integrado em diferentes projetos.
        </p>
      </div>

      {/* Exibição da data selecionada */}
      {selectedDate && (
        <div className="p-16 mt-4 text-center text-gray-700">
          <p className="text-xl font-semibold">
            Data selecionada:{" "}
            <span className="italic text-2xl-medium">{selectedDate}</span>
          </p>
        </div>
      )}

      {/* Componente do calendário */}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <CalendarInput
          label="Selecione uma data"
          onChange={handleDateChange}
          value={selectedDate}
          required={false}
          darkMode={false}
        />
      </div>
    </div>
  );
}
