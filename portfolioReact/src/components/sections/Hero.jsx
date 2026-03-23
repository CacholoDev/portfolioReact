import foto from '../../assets/img/AF.png';

export const Hero = () => {
  return (
    <section id="inicio" className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 lg:grid-cols-3 lg:grid-rows-1 lg:gap-8">
      <div className='col-span-2'>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
          Adrián Fábregas
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Junior developer focused on Java, Spring Boot and now building modern frontend projects
          with JavaScript, React and Tailwind.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
        <a href="#proyectos" className="rounded-lg bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
          Ver proyectos
        </a>
        <a href="#contacto" className="rounded-lg border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300">
          Contactar
        </a>
      </div>
      </div>

      <div className="mx-auto lg:col-start-3 lg:row-span-1 lg:self-center">
        <img className="h-48 rounded-full border-4 border-slate-800 object-cover sm:h-56 " src={foto} alt="Adrián Fábregas" />
      </div>
    </section>
  )
}

