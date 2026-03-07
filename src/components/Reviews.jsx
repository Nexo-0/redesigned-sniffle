import { useEffect, useMemo, useRef, useState } from "react";
import reviewData from "../data/review.json";

const fallbackMapsUrl = "https://maps.app.goo.gl/jdHsXMFbbScbnKgW7";

function parseReviews(rawList) {
  return (rawList || []).map((item, index) => {
    const rawText = typeof item.text === "string" ? item.text.trim() : "";
    const ratingValue = Number(item.stars ?? item.rating ?? 5);
    const safeRating = Number.isFinite(ratingValue) ? Math.min(5, Math.max(1, ratingValue)) : 5;

    return {
      id: `${(item.name || "reviewer").toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index}`,
      name: item.name || "Anonymous",
      rating: safeRating,
      time: item.time || item.relativePublishTimeDescription || "Recently",
      text: rawText || "No written review provided.",
      hasText: Boolean(rawText),
      reviewUrl: item.reviewUrl || "",
      placeUrl: item.url || "",
      placeTitle: item.title || "Codingwale Vaijapur",
    };
  });
}

function renderStars(rating) {
  const filled = Math.max(1, Math.min(5, Math.round(rating)));
  return `${"\u2605".repeat(filled)}${"\u2606".repeat(5 - filled)}`;
}

function getCardsPerPage(width) {
  if (width >= 1200) return 3;
  if (width >= 768) return 2;
  return 1;
}

function Reviews() {
  const parsedReviews = useMemo(() => parseReviews(reviewData), []);
  const [search, setSearch] = useState("");
  const [reviewFilter, setReviewFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(() => getCardsPerPage(window.innerWidth));
  const [expanded, setExpanded] = useState({});
  const [overflowMap, setOverflowMap] = useState({});
  const textRefs = useRef({});

  const mapsReviewUrl = parsedReviews[0]?.placeUrl || fallbackMapsUrl;
  const placeTitle = parsedReviews[0]?.placeTitle || "Codingwale Vaijapur";
  const totalReviews = parsedReviews.length;

  const overallRating = useMemo(() => {
    if (!parsedReviews.length) return 0;
    const total = parsedReviews.reduce((sum, item) => sum + item.rating, 0);
    return total / parsedReviews.length;
  }, [parsedReviews]);

  useEffect(() => {
    const onResize = () => setCardsPerPage(getCardsPerPage(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const filteredReviews = useMemo(() => {
    return parsedReviews.filter((review) => {
      const matchesSearch =
        !search ||
        review.name.toLowerCase().includes(search.toLowerCase()) ||
        review.text.toLowerCase().includes(search.toLowerCase());

      const matchesReviewType =
        reviewFilter === "all" ||
        (reviewFilter === "text" && review.hasText) ||
        (reviewFilter === "stars5" && review.rating >= 5) ||
        (reviewFilter === "below5" && review.rating < 5);

      return matchesSearch && matchesReviewType;
    });
  }, [parsedReviews, search, reviewFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredReviews.length / cardsPerPage));

  useEffect(() => {
    setCurrentPage(0);
  }, [search, reviewFilter, cardsPerPage]);

  useEffect(() => {
    if (currentPage > totalPages - 1) {
      setCurrentPage(totalPages - 1);
    }
  }, [currentPage, totalPages]);

  const visibleReviews = useMemo(() => {
    const start = currentPage * cardsPerPage;
    return filteredReviews.slice(start, start + cardsPerPage);
  }, [filteredReviews, currentPage, cardsPerPage]);

  useEffect(() => {
    const next = {};
    visibleReviews.forEach((review) => {
      const el = textRefs.current[review.id];
      if (el) {
        next[review.id] = el.scrollHeight > el.clientHeight + 1;
      }
    });
    setOverflowMap(next);
  }, [visibleReviews, expanded]);

  const setTextRef = (id, node) => {
    if (node) textRefs.current[id] = node;
  };

  const toggleExpanded = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="reviews" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Google Reviews</h2>
            <p className="mt-2 text-slate-400">
              {placeTitle} | Overall {overallRating.toFixed(1)}/5 from {totalReviews} reviews
            </p>
          </div>
          <a
            href={mapsReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-neon transition hover:opacity-90"
          >
            Open Google Maps
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900/70 p-4 sm:p-5">
          <div className="grid gap-3 md:grid-cols-3">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name or keyword"
              className="rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none focus:border-neon"
            />
            <select
              value={reviewFilter}
              onChange={(event) => setReviewFilter(event.target.value)}
              className="rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none focus:border-neon"
            >
              <option value="all">All reviews</option>
              <option value="text">With text only</option>
              <option value="stars5">5-star only</option>
              <option value="below5">Below 5-star</option>
            </select>
            <div className="flex items-center justify-between rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-300">
              <span>Page {currentPage + 1}/{totalPages}</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleReviews.map((review) => {
              const isExpanded = !!expanded[review.id];
              const hasOverflow = !!overflowMap[review.id];

              return (
                <article
                  key={review.id}
                  className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 transition hover:border-neon/80"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <span className="text-sm text-slate-400">{review.time}</span>
                  </div>
                  <p className="mt-2 font-medium text-neon">
                    {renderStars(review.rating)} <span className="text-slate-300">({review.rating.toFixed(1)})</span>
                  </p>
                  <p
                    ref={(node) => setTextRef(review.id, node)}
                    className="mt-4 text-slate-300"
                    style={
                      isExpanded
                        ? undefined
                        : {
                            display: "-webkit-box",
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }
                    }
                  >
                    {review.text}
                  </p>
                  {hasOverflow ? (
                    <button
                      type="button"
                      onClick={() => toggleExpanded(review.id)}
                      className="mt-3 text-sm font-semibold text-neon transition hover:opacity-80"
                    >
                      {isExpanded ? "View less" : "View more"}
                    </button>
                  ) : null}
                  {review.reviewUrl ? (
                    <a
                      href={review.reviewUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-xs font-semibold text-slate-400 transition hover:text-neon"
                    >
                      Open source review
                    </a>
                  ) : null}
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="rounded-lg border border-neon px-4 py-2 text-sm font-semibold text-neon transition hover:bg-neon/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage >= totalPages - 1}
              className="rounded-lg border border-neon px-4 py-2 text-sm font-semibold text-neon transition hover:bg-neon/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
