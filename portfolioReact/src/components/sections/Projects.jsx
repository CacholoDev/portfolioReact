const projectList = [
  {
    title: "PFC - App web de pedidos para panaderia",
    description:
      "Aplicacion web para gestionar pedidos de una panaderia. Incluye backend con Spring Boot, persistencia MySQL y despliegue con Docker.",
    stack: ["Spring Boot", "Java", "MySQL", "Docker", "Git", "JavaScript", "Bootstrap"],
    type: "Full Stack",
    status: "En mejora continua",
    href: "https://github.com/CacholoDev/PFC",
  },
  {
    title: "Portfolio personal",
    description:
      "Este portfolio en React para mostrar perfil, formacion, skills y proyectos con enfoque moderno, responsive y visual.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Vite", "Git"],
    type: "Frontend",
    status: "Completado",
    href: "https://github.com/CacholoDev/portfolioReact/tree/main/portfolioReact",
  },
  {
    title: "NAS casero con stack ARR",
    description:
      "Servidor NAS montado en casa con servicios ARR orquestados en Docker para automatizar multimedia.",
    stack: ["Docker", "Linux", "ARR", "Redes", "Automatizacion"],
    type: "Infraestructura",
    status: "Activo",
    href: null,
  },
]

export const Projects = () => {
  return (
    <section id="proyectos" className="space-y-5">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold text-white">Proyectos</h2>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Build log</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {projectList.map((project) => (
          <article
            key={project.title}
            className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-xl hover:shadow-cyan-400/10"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-16 -top-12 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-3">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-200">
                {project.type}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{project.status}</span>
            </div>

            <div className="relative z-10 space-y-2">
              <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
            </div>

            <ul className="relative z-10 mt-auto flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={`${project.title}-${tech}`}
                  className="rounded-md border border-slate-700/80 bg-slate-800/60 px-2 py-1 text-xs text-slate-200"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 mt-1 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors duration-200 hover:text-cyan-200"
              >
                Ver repositorio
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="relative z-10 mt-1 inline-flex w-fit items-center text-sm font-semibold text-slate-500">
                Repositorio privado/local
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
