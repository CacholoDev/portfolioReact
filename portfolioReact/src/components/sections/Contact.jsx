export const Contact = () => {
  return (
    <section id="contacto" className="space-y-4 pb-4">
      <h2 className="text-2xl font-semibold text-white">Contacto</h2>
      <p className="max-w-2xl leading-relaxed text-slate-300">
        Si quieres colaborar o tienes una oportunidad junior, escribeme por email o contactame por
        LinkedIn.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href="mailto:tu-email@ejemplo.com" className="rounded-lg bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
          Enviar email
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
