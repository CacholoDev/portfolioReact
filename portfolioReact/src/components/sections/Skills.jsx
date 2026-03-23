const skillGroups = {
  backend: ["Java", "Spring Boot", "SQL"],
  frontend: ["JavaScript", "React", "Tailwind CSS"],
  tools: ["Git", "GitHub", "VS Code"],
}

export const Skills = () => {
  return (
    <section id="skills" className="space-y-5">
      <h2 className="text-2xl font-semibold text-white">Skills</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillGroups).map(([group, items]) => (
          <article key={group} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-300">{group}</h3>
            <ul className="space-y-2 text-slate-300">
              {items.map((item) => (
                <li key={item} className="text-sm">{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
