"use client";

import AgoraOverViewLayout from "../layout";
import { Button } from "@repo/ui/agora-components/buttons/agora-button";
import styles from "../styles.module.css";

export default function HomeButtonPreview() {
  const handleClick = () => {
    alert("Botão foi clicado!");
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Botão</h1>
      <p className={styles.paragraph}>
        Elemento clicável que pode ser ativado com rato, teclado, toque ou outra
        tecnologia assistiva. Os botões são essenciais para interações em
        aplicações web, permitindo aos utilizadores executar ações de forma
        acessível e intuitiva.
      </p>
      <div className={styles.alertInfo}>
        <span className={styles.alertIcon}>ℹ️</span>
        Este componente tem o comportamento de seleção descontinuado. Os
        utilizadores devem adaptar o seu código para utilizar o componente{" "}
        <strong>Toggle</strong>.
      </div>

      <h2 className={styles.subheading}>Code playground</h2>
      <div className={styles.Code}>
        <Button className="custom-class" onClick={handleClick}>
          Personalizado
        </Button>
      </div>

      <h2 className={styles.subheading}>Exemplo de utilização</h2>
      <pre className={styles.codeBlock}>
        {`<Button onClick={handleClick}>
Personalizado
</Button>`}
      </pre>

      <h2 className={styles.subheading}>Boas práticas</h2>
      <ul className={styles.list}>
        <li>Utilize textos claros e objetivos nos botões.</li>
        <li>Garanta contraste suficiente entre o botão e o fundo.</li>
        <li>
          Evite utilizar botões apenas para navegação; prefira links para esse
          fim.
        </li>
        <li>
          Assegure que o botão é acessível por teclado e leitores de ecrã.
        </li>
      </ul>
    </div>
  );
}
