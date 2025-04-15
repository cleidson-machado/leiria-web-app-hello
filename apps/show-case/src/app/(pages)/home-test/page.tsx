"use client";

import { Button } from "@repo/ui";

export default function Home() {
  const handleClick = () => {
    alert("Botão foi clicado!");
  };

  return (
    <div>
      <Button className="custom-class" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
}
