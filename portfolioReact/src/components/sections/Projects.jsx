const projectList = [
  {
    title: "Ecommerce API",
    description: "Backend with Spring Boot, JWT authentication and order management.",
    stack: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "Task board app",
    description: "Frontend app in React for managing tasks with reusable components.",
    stack: ["React", "JavaScript", "Tailwind"],
  },
]

export const Projects = () => {
  return (
    <section id="proyectos" className="space-y-5">
      <h2 className="text-2xl font-semibold text-white">Proyectos</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {projectList.map((project) => (
          <article key={project.title} className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
            <p className="text-xs uppercase tracking-wide text-cyan-300">{project.stack.join(" · ")}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
