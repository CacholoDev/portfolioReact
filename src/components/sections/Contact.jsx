export const Contact = () => {
  const email = "adriannoia104@gmail.com"
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`

  return (
    <section id="contacto" className="space-y-4 pb-4">
      <h2 className="text-2xl font-semibold text-white">Contacto</h2>
      <p className="max-w-2xl leading-relaxed text-slate-300">
        Si quieres colaborar o tienes una oportunidad junior, escribeme por email o contactame por
        LinkedIn.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={`mailto:${email}`} className="rounded-lg bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
          Abrir app de correo
        </a>
        <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-cyan-300 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
          Abrir Gmail
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
