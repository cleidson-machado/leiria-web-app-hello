"use client";

import React, {
  KeyboardEvent,
  MouseEvent as ReactMouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Dropdown,
  DropdownElement,
  DropdownOption,
  DropdownProps,
  DropdownSection,
} from "@repo/ui";
import styles from "../styles.module.css";

const DropdownGeneralStory = () => {
  const ref = useRef<DropdownElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibility = () => {
    if (ref.current?.visibility) {
      ref.current?.hide();
    } else {
      ref.current?.show();
    }
  };

  const handleKeydown = (evt: KeyboardEvent<HTMLButtonElement>) => {
    const code = evt.code;

    if (code === "Escape" && ref.current?.visibility) {
      ref.current.hide();
    }

    if (code === "Enter" || code === "Space" || code === "NumpadEnter") {
      toggleVisibility();
    }
  };

  const handleClick = (evt: ReactMouseEvent<HTMLButtonElement>) => {
    if (typeof evt.detail === "number" && evt.detail === 0) {
      return;
    }
    toggleVisibility();
  };

  const handleShow = () => {
    setIsExpanded(true);
    ref.current?.first();
  };

  const handleHide = () => {
    setIsExpanded(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (
        ref.current?.visibility &&
        !containerRef.current?.contains(evt.target as HTMLElement)
      ) {
        ref.current.hide();
      }
    };

    document?.addEventListener("click", handleClickOutside);

    return () => {
      document?.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Defina as props diretamente aqui
  const dropdownProps: DropdownProps = {
    optionsVisible: 5,
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Dropdown</h1>
      <p className={styles.paragraph}>
        Elemento de interface que permite ao utilizador selecionar uma opção de
        uma lista de forma simples e acessível. O componente de dropdown do{" "}
        <strong>Agora DS</strong> pode ser integrado em diferentes projetos,
        garantindo consistência visual e usabilidade.
      </p>

      <div className={styles.alertInfo}>
        <span className={styles.alertIcon}>ℹ️</span>
        Este componente foi desenvolvido com foco em acessibilidade, permitindo
        a navegação por teclado e compatibilidade com leitores de ecrã.
      </div>

      {/* Área de demonstração simplificada */}
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <label htmlFor="dropdown-toggle-button">
          Click me to focus the Toggle Dropdown button!
        </label>

        <div
          ref={containerRef}
          style={{ position: "relative", maxWidth: "100%" }}
        >
          <button
            id="dropdown-toggle-button"
            className={styles.button}
            ref={buttonRef}
            onClick={handleClick}
            onKeyDown={handleKeydown}
            role="combobox"
            aria-controls="my-dropdown"
            aria-expanded={isExpanded}
            aria-label="toggle dropdown"
            style={{
              width: "100%",
              marginTop: "1rem",
              marginBottom: "1.5rem",
              backgroundColor: "#3b82f6", // Azul como no print
              color: "white",
              padding: "12px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span aria-hidden>Toggle Dropdown</span>
          </button>

          {/* Dropdown com estilo inline para garantir largura */}
          <div style={{ maxWidth: "100%" }}>
            <Dropdown
              {...dropdownProps}
              ref={ref}
              onShow={handleShow}
              onHide={handleHide}
              id="my-dropdown"
              aria-label="Select a fruit"
            >
              <DropdownSection label="Fruits" name="fruits">
                <DropdownOption value={"banana"}>Banana</DropdownOption>
                <DropdownOption value={"apple"}>Apple</DropdownOption>
                <DropdownOption value={"mango"}>Mango</DropdownOption>
                <DropdownOption value={"orange"}>Orange</DropdownOption>
                <DropdownOption value={"tomato"}>Tomato</DropdownOption>
                <DropdownOption value={"melon"}>Melon</DropdownOption>
                <DropdownOption value={"watermelon"}>Watermelon</DropdownOption>
              </DropdownSection>
            </Dropdown>
          </div>
        </div>
      </div>

      <h2 className={styles.subheading}>Exemplo de utilização</h2>
      <pre className={styles.codeBlock}>
        {`<Dropdown
  optionsVisible={5}
  onShow={handleShow}
  onHide={handleHide}
  id="my-dropdown"
  aria-label="Selecione uma fruta"
>
  <DropdownSection label="Frutas" name="frutas">
    <DropdownOption value="banana">Banana</DropdownOption>
    <DropdownOption value="apple">Maçã</DropdownOption>
    <DropdownOption value="mango">Manga</DropdownOption>
    <DropdownOption value="orange">Laranja</DropdownOption>
    <DropdownOption value="tomato">Tomate</DropdownOption>
    <DropdownOption value="melon">Melão</DropdownOption>
    <DropdownOption value="watermelon">Melancia</DropdownOption>
  </DropdownSection>
</Dropdown>`}
      </pre>

      <h2 className={styles.subheading}>Boas práticas</h2>
      <ul className={styles.list}>
        <li>Utilize rótulos claros e objetivos para o campo de seleção.</li>
        <li>Garanta que o componente é acessível por teclado.</li>
        <li>Valide a opção selecionada conforme as regras do seu projeto.</li>
        <li>Evite listas muito extensas sem agrupamento ou pesquisa.</li>
      </ul>
    </div>
  );
};

export default DropdownGeneralStory;
