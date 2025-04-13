"use client";

import { Button } from "@repo/ui/agora-components/buttons/agora-button";

export default function Home() {
  const handleClick = () => {
    alert("Botão foi clicado!");
  };

  return (
    <>
      <div>Show Case</div>
      <div>
        <Button className="custom-class" onClick={handleClick}>
          Click Me
        </Button>
      </div>
    </>
  );
}
