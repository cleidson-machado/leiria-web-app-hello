"use client";

import { CalendarInput } from "@repo/ui";
import { ChangeEvent, useState } from "react";
import styles from "../styles.module.css";

export default function HomeCalendarPreview() {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    console.log("Data selecionada:", event.target.value);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Título e descrição */}
      <h1 className={styles.heading}>Calendário</h1>
      <p className={styles.paragraph}>
        Elemento de interface que permite ao utilizador selecionar uma data de
        forma simples e acessível. O componente de calendário do{" "}
        <strong>Agora DS</strong> pode ser integrado em diferentes projetos,
        garantindo consistência visual e usabilidade.
      </p>

      {/* Alerta de acessibilidade */}
      <div className={styles.alertInfo}>
        <span className={styles.alertIcon}>ℹ️</span>
        Este componente foi desenvolvido com foco em acessibilidade, permitindo
        a navegação por teclado e compatibilidade com leitores de ecrã.
      </div>

      {/* Exibição da data selecionada */}
      {selectedDate && (
        <div className={styles.selectedDateBox}>
          <p className={styles.selectedDateText}>
            Data selecionada:{" "}
            <span className={styles.selectedDateValue}>{selectedDate}</span>
          </p>
        </div>
      )}

      {/* Componente do calendário */}
      <div className={styles.calendarBox}>
        <CalendarInput
          label="Selecione uma data"
          onChange={handleDateChange}
          value={selectedDate}
          required={false}
          darkMode={false}
        />
      </div>

      {/* Exemplo de utilização */}
      <h2 className={styles.subheading}>Exemplo de utilização</h2>
      <pre className={styles.codeBlock}>
        {`<CalendarInput
  label="Selecione uma data"
  onChange={handleDateChange}
  value={selectedDate}
/>`}
      </pre>

      {/* Boas práticas */}
      <h2 className={styles.subheading}>Boas práticas</h2>
      <ul className={styles.list}>
        <li>Utilize rótulos claros e objetivos para o campo de data.</li>
        <li>Garanta que o componente é acessível por teclado.</li>
        <li>Valide a data selecionada conforme as regras do seu projeto.</li>
        <li>Evite datas inválidas ou fora do intervalo permitido.</li>
      </ul>
    </div>
  );
}
