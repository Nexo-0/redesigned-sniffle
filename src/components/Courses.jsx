const courses = [
  {
    title: "MERN Stack Development",
    duration: "3-4 Months",
    description: "Build full-stack web applications from scratch.",
    highlights: ["HTML", "CSS", "JavaScript", "MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "DevOps Engineering",
    duration: "3-4 Months",
    description: "Master deployment and automation workflows used in companies.",
    highlights: ["Git", "Linux", "Docker", "Jenkins", "CI/CD Pipelines", "Server Deployment"],
  },
  {
    title: "Java Full Stack Development",
    duration: "3-4 Months",
    description: "Develop production-ready Java applications with modern frontend integration.",
    highlights: ["Core Java", "Spring Boot", "REST APIs", "Database Integration", "Frontend Basics"],
  },
  {
    title: "Basic HTML/CSS/JavaScript/Bootstrap",
    duration: "3-4 Months",
    description: "Create a strong frontend foundation with practical UI building.",
    highlights: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design", "Mini Projects"],
  },
  {
    title: "Red Hat Linux",
    duration: "3-4 Months",
    description: "Learn Linux administration and command-line workflows for developers.",
    highlights: [
      "Linux Commands",
      "User & Permission Management",
      "Package Management",
      "Networking Basics",
      "Shell Scripting",
    ],
  },
  {
    title: "Data Analytics",
    duration: "3-4 Months",
    description: "Analyze and visualize data to generate practical business insights.",
    highlights: ["SQL", "Excel", "Power BI", "Python"],
  },
];

function Courses() {
  return (
    <section id="courses" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-bold">Courses</h2>
        <p className="mt-2 text-slate-400">
          Practical courses with clear roadmaps, projects, and in-demand tools.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900/85 to-slate-800/70 p-6 transition hover:-translate-y-1 hover:border-neon/80 hover:shadow-neon"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <span className="rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-xs font-semibold text-neon">
                  {course.duration}
                </span>
              </div>
              <p className="mt-3 text-slate-300">{course.description}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-200">
                {course.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
