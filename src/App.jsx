import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Education } from "./components/sections/Education"
import { Exp } from "./components/sections/Exp"
import { Skills } from "./components/sections/Skills"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-850 to-slate-800   text-slate-100">
      <Header />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-10 sm:px-8">
        <Hero />
        <About />
        <Education />
        <Exp />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
