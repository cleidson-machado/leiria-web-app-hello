"use client";
import Image from "next/image"; //FROM ORIGINAL NEXTJS PROJECT CREATION
import styles from "./page.module.css"; //FROM ORIGINAL NEXTJS PROJECT CREATION
import { HeaderCuston } from "./components/Header";
import { MainNavBar } from "./components/Navbar";
import { Button } from "@repo/ui";

export default function Home() {
  return (
    <>
      <HeaderCuston />
      <MainNavBar />
    </>
  );
}
