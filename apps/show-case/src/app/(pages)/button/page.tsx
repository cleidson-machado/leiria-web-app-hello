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
      <h1 className={styles.heading}>Show Case</h1>
      <div>
        <Button className="custom-class" onClick={handleClick}>
          Click Me
        </Button>
      </div>
    </div>
  );
}
