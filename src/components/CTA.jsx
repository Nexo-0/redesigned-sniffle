const googleFormUrl = "https://forms.gle/J73p43whXs12crSV8";

function CTA() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center rounded-2xl border border-neon/30 bg-gradient-to-r from-slate-900 to-emerald-950/40 p-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Start Your Coding Journey Today</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-neon px-6 py-3 font-semibold text-slate-950 transition hover:shadow-neon"
          >
            Join Now
          </a>
          <a
            href="tel:+919168163938"
            aria-label="Call Codingwale now"
            className="rounded-lg border border-slate-400 px-6 py-3 font-semibold text-slate-100 transition hover:border-neon hover:text-neon"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/919168163938"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="rounded-lg border border-neon/60 px-6 py-3 font-semibold text-neon transition hover:bg-neon hover:text-slate-950"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
