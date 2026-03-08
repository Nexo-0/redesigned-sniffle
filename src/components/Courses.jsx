import { useMemo, useState } from "react";

const courses = [
  {
    title: "MERN Stack Development",
    icon: "M",
    category: "Web",
    duration: "3-4 Months",
    description: "Build full-stack web applications from scratch.",
    highlights: ["HTML", "CSS", "JavaScript", "MongoDB", "Express.js", "React", "Node.js"],
    curriculum: ["HTML, CSS, JavaScript fundamentals", "React UI and component patterns", "Node.js, Express.js, APIs", "MongoDB integration + full project"],
  },
  {
    title: "DevOps Engineering",
    icon: "D",
    category: "DevOps",
    duration: "3-4 Months",
    description: "Master deployment and automation workflows used in companies.",
    highlights: ["Git", "Linux", "Docker", "Jenkins", "CI/CD Pipelines", "Server Deployment"],
    curriculum: ["Linux and Git workflows", "Docker and containerization", "Jenkins automation and CI", "CD pipelines and production deployment"],
  },
  {
    title: "Java Full Stack Development",
    icon: "J",
    category: "Web",
    duration: "3-4 Months",
    description: "Develop production-ready Java applications with modern frontend integration.",
    highlights: ["Core Java", "Spring Boot", "REST APIs", "Database Integration", "Frontend Basics"],
    curriculum: ["Core Java and OOP basics", "Spring Boot and backend APIs", "SQL integration and authentication", "Frontend integration + deployment"],
  },
  {
    title: "Basic HTML/CSS/JavaScript/Bootstrap",
    icon: "F",
    category: "Web",
    duration: "3-4 Months",
    description: "Create a strong frontend foundation with practical UI building.",
    highlights: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design", "Mini Projects"],
    curriculum: ["HTML structure and semantic tags", "CSS styling and responsive layouts", "JavaScript fundamentals and DOM", "Bootstrap components + mini project"],
  },
  {
    title: "Red Hat Linux",
    icon: "R",
    category: "Linux",
    duration: "3-4 Months",
    description: "Learn Linux administration and command-line workflows for developers.",
    highlights: [
      "Linux Commands",
      "User & Permission Management",
      "Package Management",
      "Networking Basics",
      "Shell Scripting",
    ],
    curriculum: ["Linux basics and shell commands", "Users, permissions, and filesystems", "Networking and package management", "Scripting and server operations"],
  },
  {
    title: "Data Analytics",
    icon: "A",
    category: "Data",
    duration: "3-4 Months",
    description: "Analyze and visualize data to generate practical business insights.",
    highlights: ["SQL", "Excel", "Power BI", "Python"],
    curriculum: ["Excel data cleaning and formulas", "SQL querying and reporting", "Power BI dashboards and visuals", "Python analysis and capstone insights"],
  },
];

const categories = ["All", "Web", "DevOps", "Data", "Linux"];
const whatsappUrl = "https://wa.me/919168163938";

const categoryAccentClass = {
  Web: "course-accent-web",
  DevOps: "course-accent-devops",
  Data: "course-accent-data",
  Linux: "course-accent-linux",
};

function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCourse, setActiveCourse] = useState(null);

  const filteredCourses = useMemo(() => {
    if (activeCategory === "All") return courses;
    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="courses" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-bold">Courses</h2>
        <p className="mt-2 text-slate-400">
          Practical courses with clear roadmaps, projects, and in-demand tools.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-neon/60 bg-neon/15 text-neon shadow-neon"
                  : "border-slate-700 text-slate-300 hover:border-neon hover:text-neon"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 md:grid md:snap-none md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
          {filteredCourses.map((course, index) => (
            <article
              key={course.title}
              className={`course-reveal group min-w-[84%] shrink-0 snap-start rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900/85 to-slate-800/70 p-6 transition hover:-translate-y-1 hover:border-neon/80 md:min-w-0 ${categoryAccentClass[course.category]}`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neon/40 bg-neon/10 text-lg font-bold text-neon">
                  {course.icon}
                </span>
                <span className="rounded-full border border-slate-600 px-3 py-1 text-xs font-semibold text-slate-300">
                  {course.category}
                </span>
              </div>
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
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveCourse(course)}
                  className="rounded-lg border border-neon/50 px-4 py-2 text-sm font-semibold text-neon transition hover:bg-neon hover:text-slate-950"
                >
                  View Curriculum
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-neon px-4 py-2 text-sm font-semibold text-slate-950 transition hover:shadow-neon"
                >
                  Enroll Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeCourse ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4"
          onClick={() => setActiveCourse(null)}
          role="presentation"
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900/90 p-6"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCourse.title} curriculum`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold">{activeCourse.title}</h3>
              <button
                type="button"
                onClick={() => setActiveCourse(null)}
                className="rounded-md border border-slate-600 px-3 py-1 text-sm text-slate-300 transition hover:border-neon hover:text-neon"
              >
                Close
              </button>
            </div>
            <p className="mt-2 text-slate-400">Curriculum roadmap</p>
            <ul className="mt-4 space-y-2 text-slate-200">
              {activeCourse.curriculum.map((item) => (
                <li key={item} className="rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Courses;
