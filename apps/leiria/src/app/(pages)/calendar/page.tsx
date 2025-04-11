"use client";

import React from "react";
import classNames from "classnames";
import { InputDate, InputDateProps } from "@ama-pt/agora-design-system";

const InputDateGeneralStory = (args: InputDateProps) => {
  const containerClassNames = classNames("p-16 flex flex-col gap-32", {
    "bg-primary-900 text-white": args.darkMode,
  });

  return (
    <div className={containerClassNames}>
      <InputDate {...args} />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut
        dapibus justo. Integer maximus ante ut euismod ultrices. Donec nec odio
        ullamcorper, luctus purus non, scelerisque felis. Fusce mollis lectus
        elit, sed consequat nisi scelerisque non. Quisque placerat euismod
        maximus. Sed tincidunt est tortor. Mauris lobortis tellus diam, et
        eleifend justo fringilla in.
      </div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut
        dapibus justo. Integer maximus ante ut euismod ultrices. Donec nec odio
        ullamcorper, luctus purus non, scelerisque felis. Fusce mollis lectus
        elit, sed consequat nisi scelerisque non. Quisque placerat euismod
        maximus. Sed tincidunt est tortor. Mauris lobortis tellus diam, et
        eleifend justo fringilla in.
      </div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut
        dapibus justo. Integer maximus ante ut euismod ultrices. Donec nec odio
        ullamcorper, luctus purus non, scelerisque felis. Fusce mollis lectus
        elit, sed consequat nisi scelerisque non. Quisque placerat euismod
        maximus. Sed tincidunt est tortor. Mauris lobortis tellus diam, et
        eleifend justo fringilla in.
      </div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut
        dapibus justo. Integer maximus ante ut euismod ultrices. Donec nec odio
        ullamcorper, luctus purus non, scelerisque felis. Fusce mollis lectus
        elit, sed consequat nisi scelerisque non. Quisque placerat euismod
        maximus. Sed tincidunt est tortor. Mauris lobortis tellus diam, et
        eleifend justo fringilla in.
      </div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut
        dapibus justo. Integer maximus ante ut euismod ultrices. Donec nec odio
        ullamcorper, luctus purus non, scelerisque felis. Fusce mollis lectus
        elit, sed consequat nisi scelerisque non. Quisque placerat euismod
        maximus. Sed tincidunt est tortor. Mauris lobortis tellus diam, et
        eleifend justo fringilla in.
      </div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut
        dapibus justo. Integer maximus ante ut euismod ultrices. Donec nec odio
        ullamcorper, luctus purus non, scelerisque felis. Fusce mollis lectus
        elit, sed consequat nisi scelerisque non. Quisque placerat euismod
        maximus. Sed tincidunt est tortor. Mauris lobortis tellus diam, et
        eleifend justo fringilla in.
      </div>
    </div>
  );
};

// Definindo os argumentos padrão
const defaultArgs: InputDateProps = {
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  calendarIconAriaLabel: "Open calendar picker overlay",
  previousYearAriaLabel: "Navigate previous year",
  previousMonthAriaLabel: "Navigate previous month",
  nextMonthAriaLabel: "Navigate next month",
  nextYearAriaLabel: "Navigate next year",
  todayDayAriaLabel: "Today",
  focusedDayAriaLabel: "focused",
  selectedDayAriaLabel: "selected",
  todayLabel: "Today",
  cancelLabel: "Cancel",
  okLabel: "OK",
  todayAriaLabel: "Navigate to today",
  cancelAriaLabel: "Cancel selection",
  okAriaLabel: "Select focused day",
  dayInputPlaceholder: "dd",
  monthInputPlaceholder: "mm",
  yearInputPlaceholder: "yyyy",
  monthsLabels: {
    jan: "January",
    feb: "February",
    mar: "March",
    apr: "April",
    may: "May",
    jun: "June",
    jul: "July",
    aug: "August",
    set: "September",
    oct: "October",
    nov: "November",
    dec: "December",
  },
  weekdaysLabels: {
    sun: "Sunday",
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
  },
};

// Componente da página que será exportado como default
const CalendarPage = () => {
  return <InputDateGeneralStory {...defaultArgs} />;
};

export default CalendarPage; // Exportação padrão necessária para páginas Next.js
