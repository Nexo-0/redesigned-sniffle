const links = ["Home", "Courses", "Reviews", "About", "Contact"];

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-900/70 backdrop-blur-md">
      <nav className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="text-xl font-bold text-neon">
            Codingwale
          </a>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded-lg border border-slate-500 px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-neon hover:text-neon"
            >
              {theme === "dark" ? "Light Theme" : "Dark Theme"}
            </button>
            <a
              href="#contact"
              className="rounded-lg border border-neon/60 px-4 py-2 text-sm font-medium text-neon transition hover:bg-neon hover:text-slate-900"
            >
              Contact
            </a>
          </div>
        </div>

        <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm md:mt-3">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-slate-200 transition hover:text-neon"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
