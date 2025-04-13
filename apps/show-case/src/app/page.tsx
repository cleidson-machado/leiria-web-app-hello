"use client";

import AgoraOverViewLayout from "./(pages)/layout";
import styles from "./(pages)/styles.module.css";

//PAGE THAT REUSE THE LAYOUT CREATE INSIDE THE APP... NOTE THE ROOT LAYOUT...

export default function Home() {
  const handleClick = () => {
    alert("Botão foi clicado!");
  };

  return (
    <AgoraOverViewLayout>
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>Preview</h1>
        <p className={styles.paragraph}>
          Bem-vindos a Página de Demostração dos componentes compartilhados -
          Agora Ds
        </p>
      </div>
    </AgoraOverViewLayout>
  );
}
