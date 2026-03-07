const courses = [
  {
    title: "MERN Stack Development",
    description:
      "Learn MongoDB, Express.js, React, and Node.js by building complete frontend + backend projects.",
  },
  {
    title: "DevOps Engineering",
    description:
      "Master Git, Jenkins, Docker, CI/CD pipelines, and deployment workflows used in real companies.",
  },
  {
    title: "Java Full Stack Development",
    description:
      "Build enterprise-ready Java applications with frontend integration and backend architecture skills.",
  },
  {
    title: "Basic HTML/CSS/JavaScript/Bootstrap",
    description:
      "Build a strong programming foundation with practical frontend development and UI-building basics.",
  },
  {
    title: "CentOS / Red Hat Linux",
    description:
      "Learn Linux administration, command line workflows, and server environment basics for developers.",
  },
];

function Courses() {
  return (
    <section id="courses" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-bold">Courses</h2>
        <p className="mt-2 text-slate-400">
          We teach from basic to advanced with practical coding sessions.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 transition hover:border-neon/80 hover:shadow-neon"
            >
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="mt-3 text-slate-300">{course.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
