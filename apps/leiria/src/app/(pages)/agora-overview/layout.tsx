export default function AgoraOverViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <nav>
          <a href="/">Home</a> | <a href="/dashboard">Dashboard</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 Meu Projeto</p>
      </footer>
    </div>
  );
}
