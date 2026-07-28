import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HedayaterGolpo = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/stories/index.json")
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-teal-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin" />
          <p className="text-teal-700 font-medium text-lg">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-24">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Decorative icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-amber-500/20 backdrop-blur-sm border border-white/10 mb-6">
            <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            হেদায়াতের গল্প
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-teal-200/80 max-w-2xl mx-auto leading-relaxed">
            যারা অন্ধকার থেকে আলোর পথে এসেছেন — তাদের অনুপ্রেরণামূলক গল্প।
            প্রতিটি গল্প একটি জীবন পরিবর্তনের সাক্ষী।
          </p>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {stories.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100 mb-6">
              <svg className="w-10 h-10 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <p className="text-xl text-gray-500">শীঘ্রই গল্প আসছে...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stories.map((story) => (
              <Link
                key={story.slug}
                to={`/hedayat/${story.slug}`}
                className="group block"
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Date badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700 shadow-sm">
                      {new Date(story.date).toLocaleDateString("bn-BD", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    {/* Category badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-teal-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                      হেদায়াতের গল্প
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-300 leading-snug">
                      {story.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {story.excerpt}
                    </p>

                    {/* Read more */}
                    <div className="mt-5 flex items-center text-teal-600 font-semibold text-sm group-hover:text-teal-700 transition-colors">
                      <span>সম্পূর্ণ গল্প পড়ুন</span>
                      <svg
                        className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Bottom decorative section */}
      <div className="bg-gradient-to-r from-teal-50 via-white to-amber-50 py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-base leading-relaxed">
            আপনার বা আপনার পরিচিত কারো হেদায়াতের গল্প শেয়ার করতে চাইলে
            আমাদের সাথে{" "}
            <Link to="/contact" className="text-teal-600 font-semibold hover:text-teal-700 underline underline-offset-2">
              যোগাযোগ করুন
            </Link>
            ।
          </p>
        </div>
      </div>
    </div>
  );
};

export default HedayaterGolpo;
