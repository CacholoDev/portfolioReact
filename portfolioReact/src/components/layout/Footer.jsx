export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-slate-400 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-1 items-center">
        <i className="fa-solid fa-location-dot"></i>
        <p>Santiago de Compostela</p>
        </div>
        <div className="flex gap-1 items-center">
        <i className="fa-solid fa-envelope"></i>
        <p>adriannoia104@gmail.com</p>
        </div>
        
        
      </div>
    </footer>
  )
}
