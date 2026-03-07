const terminalLines = ["$ git clone success", "$ cd codingwale", "$ npm run career"];
const googleFormUrl = "https://forms.gle/J73p43whXs12crSV8";

function Hero({ theme = "dark" }) {
  const isSunTheme = theme === "sun";

  const terminalWrapperClass = isSunTheme
    ? "animate-float rounded-2xl border border-amber-200 bg-white/90 p-5 shadow-xl"
    : "animate-float rounded-2xl border border-slate-700 bg-slate-900/90 p-5 shadow-xl";

  const terminalPanelClass = isSunTheme
    ? "overflow-x-auto rounded-lg border border-amber-200 bg-slate-50 p-4 font-mono text-sm font-semibold text-slate-700 sm:text-base"
    : "overflow-x-auto rounded-lg border border-slate-700 bg-[#071633] p-4 font-mono text-sm font-semibold text-white sm:text-base";

  const terminalTextClass = isSunTheme
    ? "block leading-7 text-slate-700"
    : "block leading-7 text-[#dbeafe]";

  const cursorClass = isSunTheme
    ? "inline-block h-4 w-2 translate-y-1 bg-amber-500 align-middle animate-blink"
    : "inline-block h-4 w-2 translate-y-1 bg-[#dbeafe] align-middle animate-blink";

  return (
    <section id="home" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-neon/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-neon/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neon">
            Practical Coding Academy
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Learn Real Tech Skills. Build Real Projects.
          </h1>
          <p className="mt-5 max-w-xl text-slate-300">
            Codingwale is a practical coding academy where students learn MERN stack, DevOps,
            Java full stack, frontend basics, and Linux through real-world practice.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="rounded-lg bg-neon px-6 py-3 font-semibold text-slate-950 transition hover:shadow-neon"
            >
              Explore Courses
            </a>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-500 px-6 py-3 font-semibold text-slate-100 transition hover:border-neon hover:text-neon"
            >
              Join Now
            </a>
          </div>
        </div>

        <div className={terminalWrapperClass}>
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-slate-400">terminal</span>
          </div>
          <pre aria-label="Codingwale terminal commands" className={terminalPanelClass}>
            {terminalLines.map((line) => (
              <code key={line} className={terminalTextClass}>
                {line}
              </code>
            ))}
            <code className={terminalTextClass}>
              <span className={cursorClass} />
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;
