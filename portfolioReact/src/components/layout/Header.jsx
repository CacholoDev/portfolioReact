export const Header = () => {
  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Presentación", href: "#sobre-mi" },
    { label: "Skills", href: "#skills" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#inicio" className="text-sm font-semibold tracking-wide text-amber-400 transition hover:text-amber-300 animate-pulse">
          {'<AF/>'} Full Stack
        </a>

        <nav className="hidden gap-5 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
