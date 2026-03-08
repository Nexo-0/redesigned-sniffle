const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "MERN Stack",
  "Java Full Stack",
  "Spring Boot",
  "DevOps",
  "Docker",
  "Kubernetes",
  "Git",
  "GitHub",
  "Jenkins",
  "Linux",
  "Red Hat",
  "SQL",
  "Excel",
  "Power BI",
  "Python",
];

function Technologies() {
  return (
    <section id="technologies" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-bold">Technologies You Learn</h2>
        <p className="mt-2 text-slate-400">Frontend, backend, DevOps, and Linux tools.</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {technologies.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-4 text-center font-semibold transition hover:-translate-y-1 hover:border-neon hover:text-neon"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
