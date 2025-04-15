"use client";

import AgoraOverViewLayout from "./(pages)/layout";
import styles from "./(pages)/styles.module.css";

// PAGE THAT REUSE THE LAYOUT CREATE INSIDE THE APP... NOTE THE ROOT LAYOUT...

export default function Home() {
  const handleClick = () => {
    // alert("Botão foi clicado!");
    window.open("https://react.agora.gov.pt", "_blank");
  };

  return (
    <AgoraOverViewLayout>
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>Preview</h1>
        <p className={styles.paragraph}>
          Bem-vindo à Página de Demonstração dos componentes compartilhados do{" "}
          <strong>Agora DS</strong>! Este Web App foi desenvolvido para
          apresentar soluções personalizadas e exemplos práticos de utilização
          dos componentes do Design System oficial do Governo de Portugal.
        </p>
        <h2 className={styles.subheading}>O que você encontra aqui?</h2>
        <p className={styles.paragraph}>
          Explore uma coleção de componentes reutilizáveis, acessíveis e
          responsivos, prontos para acelerar o desenvolvimento de aplicações
          digitais públicas. Navegue por exemplos interativos, veja boas
          práticas de implementação e inspire-se para criar experiências
          digitais modernas, inclusivas e alinhadas com a identidade visual do
          Estado.
        </p>
        <h2 className={styles.subheading}>Por que usar o Agora DS?</h2>
        <p className={styles.paragraph}>
          O <strong>Agora DS</strong> oferece padronização, acessibilidade e
          eficiência no desenvolvimento de interfaces, promovendo a coesão
          visual e a usabilidade em serviços digitais governamentais. Ao
          utilizar este Design System, você garante que suas soluções estejam em
          conformidade com as diretrizes oficiais e proporcionem uma experiência
          consistente para todos os cidadãos.
        </p>
        <button className={styles.button} onClick={handleClick}>
          Saiba mais sobre o Agora DS
        </button>
      </div>
    </AgoraOverViewLayout>
  );
}
