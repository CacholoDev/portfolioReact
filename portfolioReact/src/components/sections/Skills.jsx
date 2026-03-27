import sprite from '../../assets/sprite.svg'
import img from '../../assets/img/Me.jpg'

const skillGroups = {
  backend: ["Java", "SpringBoot", "SQL"],
  frontend: ["JavaScript", "React", "Tailwind CSS"],
  tools: ["Git", "Docker", "LLM-IA", "Linux", "Full Stack"],
}

export const Skills = () => {
  const styles = `
    @keyframes shimmer {
      0% { opacity: 0.8; }
      50% { opacity: 1; }
      100% { opacity: 0.8; }
    }
    .animate-shimmer {
      animation: shimmer 2s ease-in-out infinite;
    }
  `

  return (
    <section id="skills" className="space-y-5">
      <style>{styles}</style>
      <h2 className="text-2xl font-semibold text-white">Skills</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillGroups).map(([group, items]) => (
          <article key={group} className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4 hover:transition hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-300/20">
            <h3 className="group-hover:font-bold mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-300">{group}</h3>
            <ul className="group-hover:font-bold space-y-2 text-slate-300">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm leading-none">
                  <svg width="18" height="18" className="group-hover:w-6 group-hover:h-6 shrink-0 text-cyan-300">
                    <use href={`${sprite}#${item}`} />
                  </svg>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
        <section className="relative h-48 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 group cursor-crosshair transition-all duration-300 hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-300/20">
          <img 
            src={img} 
            alt="Yo 24/7" 
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-slate-950/40 to-transparent transition-all duration-300 group-hover:from-slate-950/80 group-hover:via-slate-900/50" />
          <h3 className="absolute bottom-3 left-3 font-semibold group-hover:font-bold uppercase tracking-wide text-transparent bg-linear-to-br from-cyan-300 to-purple-500 bg-clip-text transition-all duration-300 group-hover:animate-shimmer">
            Yo 24/7
          </h3>
        </section>

      </div>
    </section>
  )
}
/* <ul className="space-y-2 text-slate-300">
            <li className="flex items-center gap-2 text-sm leading-none">
              <svg width="18" height="18" className="shrink-0 text-cyan-300">
                <use href={`${sprite}#Git`} />
              </svg>
              <span className="leading-tight">Other Skill</span>
            </li>
          </ul> */