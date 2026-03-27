export const Exp = () => {
    const tecnologies = [
        "Java",
        "Spring Boot",
        "MySQL",
        "JavaScript",
        "Bootstrap",
        "Full Stack",
    ]
    return (
        <section id="experience" className="space-y-5">
            <div className="flex items-end justify-between">
                <h2 className="text-2xl font-semibold text-white">Experiencia</h2>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Professional Journey</p>
            </div>

                <div className="grid gap-4 lg:grid-cols-2">
                    <article className="group relative min-h-40 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-400/15">
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-cyan-400/10 blur-2xl" />
                            <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />
                        </div>
                        <div className="relative z-10 flex h-full gap-4">
                            <div className="flex flex-col items-center">
                                <span className="mt-1 h-3 w-3 rounded-full bg-cyan-800 shadow-[0_0_16px_rgba(103,232,249,.6)]" />
                                <span className="mt-2 h-full w-px bg-linear-to-b from-cyan-300/60 via-slate-600 to-transparent" />
                            </div>
                            <div className="flex flex-1 flex-col">
                                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                                    <h3 className="text-lg font-bold text-cyan-300 transition-colors duration-300 group-hover:text-cyan-200">
                                        DistriSantiago - Prácticas FP Superior Desarrollo de Aplicaciones Web
                                    </h3>
                                    <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-200">
                                        Oct 2025 - Ene 2026
                                    </span>
                                </div>
                                <div>
                                    {tecnologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border mr-2 border-slate-700/80 bg-slate-800/60 px-2 py-1 text-sm text-slate-200 transition-colors duration-300 group-hover:border-slate-600 group-hover:animate-flash"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-3 text-sm text-slate-400">Collaborated with cross-functional teams to deliver high-quality software solutions.</p>
                            </div>
                        </div>
                    </article>

                </div>

        </section>
    )
}