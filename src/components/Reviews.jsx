const reviews = [
  {
    name: "Vijay Kardak",
    time: "5 months ago",
    text: "Codingwale offers well-structured coding classes that cover everything from the basics to advanced concepts. The instructors explain topics clearly, use practical examples, and make learning interactive. It is a good choice for beginners who want to build a strong foundation as well as learners aiming to master advanced coding skills.",
  },
  {
    name: "Saish Sawai",
    time: "10 months ago",
    text: "Codingwale class is the best class in Vaijapur for coding. I learnt many backend and frontend technologies including HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Tribhuvan Sir's teaching method is very good.",
  },
  {
    name: "Ashwini Mokate",
    time: "Recently",
    text: "Great learning experience at Codingwale. The teaching style is practical and easy to understand. Concepts are explained clearly and students get to work on real coding problems. Highly recommended for anyone who wants to start their programming journey.",
  },
  {
    name: "Vishal Tribhuvan",
    time: "Recently",
    text: "Codingwale provides one of the best coding environments for students. The courses are well structured and focus on real skills like MERN stack, DevOps, and Linux. The instructor is very supportive and helps students understand concepts step by step.",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-bold">Student Reviews</h2>
        <p className="mt-2 text-slate-400">What students say about Codingwale.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 transition hover:border-neon/80"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <span className="text-sm text-slate-400">{review.time}</span>
              </div>
              <p className="mt-2 text-neon">★★★★★</p>
              <p className="mt-4 text-slate-300">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
