import Image from "next/image";
import styles from "./page.module.css";
import { HeaderCuston } from "@/app/components/Header";
import { MainNavBar } from "@/app/components/Navbar";

export default function HomeTest() {
  return (
    <>
      <HeaderCuston />
      <MainNavBar />
    </>
  );
}
