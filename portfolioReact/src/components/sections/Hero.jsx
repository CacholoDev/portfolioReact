import foto from "../../assets/img/AF.png";
import sprite from "../../assets/sprite.svg";

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
            Desarrollador Full Stack especializado en Java, SpringBoot, React, Js, Tailwind, Docker, Git
          </p>
        </div>

        <div className="flex mt-5 gap-3">
          <a
            href="https://github.com/CacholoDev"
            target="_blank"
            title="Ir a GitHub de AdriánFábregas"
            aria-label="GitHub"
            className="rounded-full p-2 bg-gray-400 hover:bg-gray-600 transition-transform hover:scale-110"
          >
            <svg width="28" height="28">
              <use href={`${sprite}#github`} />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/adri%C3%A1n-f%C3%A1bregas/"
            target="_blank"
            title="Ir a LinkedIn de AdriánFábregas"
            aria-label="LinkedIn"
            className="rounded-full p-2 bg-white  hover:bg-blue-300 transition-transform hover:scale-110"
          >
            <svg width="28" height="28">
              <use href={`${sprite}#linkedin`} />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-auto sm:col-start-3 sm:row-span-1 sm:self-center">
        <img
          className="h-48 rounded-full border-4 border-slate-800 object-cover sm:h-56 "
          src={foto}
          alt="Adrián Fábregas"
        />
      </div>
    </section>
  );
};
