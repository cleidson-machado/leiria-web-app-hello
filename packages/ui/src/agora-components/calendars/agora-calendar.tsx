"use client";

import { InputDate, InputDateProps } from "@ama-pt/agora-design-system";
import React, { ChangeEvent } from "react";

const defaultLabels = {
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

interface CalendarInputProps {
  label?: string;
  darkMode?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  hasError?: boolean;
}

const CalendarInput: React.FC<CalendarInputProps> = ({
  label,
  darkMode = false,
  onChange,
  value,
  disabled,
  required,
  hasError,
}) => {
  return (
    <InputDate
      label={label || "Select a date"}
      darkMode={darkMode}
      onChange={onChange}
      value={value}
      disabled={disabled}
      required={required}
      hasError={hasError}
      {...defaultLabels}
    />
  );
};

export { CalendarInput };
