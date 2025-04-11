"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { HeaderCuston } from "./components/Header";
import { MainNavBar } from "./components/Navbar";
import { Button } from "@repo/ui";

export default function Home() {
  return (
    <>
      <HeaderCuston />
      <MainNavBar />
      <div>HHHHHH</div>
      <div>
        <Button className="custom-class">Click Me</Button>
      </div>
    </>
  );
}
