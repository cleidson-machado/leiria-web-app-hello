"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const menuItems = [
  { label: "Root Path", href: "/" },
  { label: "Home Ag OverView", href: "/agora-overview" },
  { label: "Bottons", href: "/button" },
  { label: "Calendars", href: "/calendar" },
  { label: "Dropdowns", href: "/dropdown" },
  { label: "Inputs", href: "/input" },
];

export default function AgoraOverViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={styles.layoutContainer}>
      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.expanded : styles.collapsed
        }`}
      >
        <div className={styles.sidebarHeader}>
          <h2 className={styles.logo}>
            {isSidebarOpen ? "Agora Ds - Doc" : "AG-Doc"}
          </h2>
          <button
            className={styles.toggleButton}
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "←" : "→"}
          </button>
        </div>
        <nav className={styles.sidebarNav}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                isSidebarOpen ? styles.showText : styles.hideText
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
