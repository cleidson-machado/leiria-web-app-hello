import Image from "next/image";
import styles from "./page.module.css";
import { HeaderCuston } from "./components/Header";
import { MainNavBar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <HeaderCuston />
      <MainNavBar />
    </>
  );
}
