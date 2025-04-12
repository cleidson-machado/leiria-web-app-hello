"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const menuItems = [
  { label: "Bottons", href: "/dashboard1" },
  { label: "Calendars", href: "/dashboard2" },
  { label: "Dropdowns", href: "/dashboard3" },
  { label: "Inputs", href: "/dashboard4" },
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
