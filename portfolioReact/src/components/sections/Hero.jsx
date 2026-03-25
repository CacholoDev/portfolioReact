import foto from "../../assets/img/AF.png";
import sprite from "../../assets/sprite.svg";
import cv from "../../assets/cv/cv.pdf";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 sm:grid-cols-3 sm:grid-rows-1 lg:gap-8"
    >
      <div className="col-span-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
            Adrián Fábregas
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Desarrollador Full Stack: Java, SpringBoot, React,
            Js, SQL, Tailwind, Docker, Git.
          </p>
        </div>

        <div className="flex mt-5 gap-3">
          <a
            href="https://github.com/CacholoDev"
            target="_blank"
            rel="noreferrer"
            title="Ir a GitHub de AdriánFábregas"
            aria-label="GitHub"
            className="rounded-full p-2 bg-gray-400 transition-transform hover:scale-110 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg width="28" height="28">
              <use href={`${sprite}#Git`} />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/adri%C3%A1n-f%C3%A1bregas/"
            target="_blank"
            rel="noreferrer"
            title="Ir a LinkedIn de AdriánFábregas"
            aria-label="LinkedIn"
            className="rounded-full bg-white p-2 transition-transform hover:scale-110 hover:bg-linear-to-br hover:from-white hover:via-sky-300 hover:to-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg width="28" height="28">
              <use href={`${sprite}#linkedin`} />
            </svg>
          </a>
          <a
            href="mailto:adriannoia104@gmail.com"
            title="adriannoia104@gmail.com"
            aria-label="Mail"
            className="rounded-full bg-linear-to-tr from-amber-400 via-amber-700 to-red-800 p-2 transition-transform hover:scale-110 hover:bg-linear-to-tr hover:from-amber-200 hover:via-red-500 hover:to-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg width="28" height="28">
              <use href={`${sprite}#mail`} />
            </svg>
          </a>
          <a
            href={cv}
            download="Adrian-Fabregas-CV.pdf"
            title="Descargar CV de AdriánFábregas"
            aria-label="CV"
            className="rounded-full bg-linear-to-tr from-emerald-400 via-green-500 to-green-800 p-2 transition-transform hover:scale-110 hover:bg-linear-to-br hover:from-green-200 hover:via-emerald-400 hover:to-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg width="28" height="28">
              <use href={`${sprite}#cv`} />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-auto sm:col-start-3 sm:row-span-1 sm:self-center">
        <img
          className="h-48 rounded-full border-4 border-slate-800 object-cover sm:h-56 animate-zoom-in"
          src={foto}
          alt="Adrián Fábregas"
        />
      </div>
    </section>
  );
};
