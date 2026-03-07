const footerLinks = ["Home", "Courses", "Reviews", "About", "Contact"];

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-neon">Codingwale</h3>
          <p className="mt-3 max-w-sm text-sm text-slate-400">
            Practical coding education from basic to advanced with real-world hands-on training.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <li key={link}>
                <a className="transition hover:text-neon" href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Phone: +91 91681 63938</li>
            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me/919168163938"
                target="_blank"
                rel="noreferrer"
                className="text-neon transition hover:underline"
              >
                Chat Now
              </a>
            </li>
            <li>Location: Vaijapur, India</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-8 w-full max-w-7xl border-t border-slate-800 pt-6 text-sm text-slate-500">
        {"\u00A9"} Codingwale
      </p>
    </footer>
  );
}

export default Footer;
