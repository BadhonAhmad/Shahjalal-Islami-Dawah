import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

/**
 * Lightweight Markdown-to-HTML parser.
 * Supports: headings, bold, italic, blockquotes, links, images,
 * horizontal rules, unordered/ordered lists, and paragraphs.
 * No external dependency needed.
 */
const parseMarkdown = (md) => {
  if (!md) return "";

  const lines = md.split("\n");
  let html = "";
  let inList = false;
  let listType = "";

  const closePendingList = () => {
    if (inList) {
      html += listType === "ul" ? "</ul>" : "</ol>";
      inList = false;
      listType = "";
    }
  };

  const inlineFormat = (text) => {
    return text
      // Images: ![alt](url)
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-xl my-4 max-w-full shadow-md" />')
      // Links: [text](url)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-teal-600 underline hover:text-teal-800" target="_blank" rel="noopener noreferrer">$1</a>')
      // Bold: **text**
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-gray-800">$1</strong>')
      // Italic: *text*
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      closePendingList();
      html += '<hr class="my-8 border-gray-200" />';
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      closePendingList();
      const level = headingMatch[1].length;
      const text = inlineFormat(headingMatch[2]);
      const sizes = {
        1: "text-3xl sm:text-4xl font-extrabold text-gray-900 mt-8 mb-4",
        2: "text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-3",
        3: "text-xl sm:text-2xl font-bold text-gray-800 mt-6 mb-3",
        4: "text-lg font-semibold text-gray-700 mt-4 mb-2",
        5: "text-base font-semibold text-gray-700 mt-4 mb-2",
        6: "text-sm font-semibold text-gray-600 mt-4 mb-2",
      };
      html += `<h${level} class="${sizes[level]}">${text}</h${level}>`;
      continue;
    }

    // Blockquote
    if (line.trim().startsWith(">")) {
      closePendingList();
      const text = inlineFormat(line.trim().replace(/^>\s*/, ""));
      html += `<blockquote class="border-l-4 border-teal-400 bg-teal-50/50 pl-4 py-3 my-4 text-gray-700 italic rounded-r-lg">${text}</blockquote>`;
      continue;
    }

    // Unordered list
    if (/^[-*]\s+/.test(line.trim())) {
      if (!inList || listType !== "ul") {
        closePendingList();
        html += '<ul class="list-disc list-inside my-4 space-y-2 text-gray-600">';
        inList = true;
        listType = "ul";
      }
      const text = inlineFormat(line.trim().replace(/^[-*]\s+/, ""));
      html += `<li>${text}</li>`;
      continue;
    }

    // Ordered list
    const olMatch = line.trim().match(/^\d+\.\s+(.+)/);
    if (olMatch) {
      if (!inList || listType !== "ol") {
        closePendingList();
        html += '<ol class="list-decimal list-inside my-4 space-y-2 text-gray-600">';
        inList = true;
        listType = "ol";
      }
      const text = inlineFormat(olMatch[1]);
      html += `<li>${text}</li>`;
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      closePendingList();
      continue;
    }

    // Paragraph
    closePendingList();
    html += `<p class="text-gray-600 leading-relaxed my-3 text-base sm:text-lg">${inlineFormat(line)}</p>`;
  }

  closePendingList();
  return html;
};

const StoryDetail = () => {
  const { slug } = useParams();
  const [story, setStory] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch story metadata
    fetch("/stories/index.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.slug === slug);
        if (found) {
          setStory(found);
          // Fetch the markdown content
          return fetch(`/stories/${slug}.md`);
        } else {
          throw new Error("Story not found");
        }
      })
      .then((res) => {
        if (res && res.ok) return res.text();
        throw new Error("Failed to load story");
      })
      .then((md) => {
        setContent(md);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-teal-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin" />
          <p className="text-teal-700 font-medium text-lg">গল্প লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-teal-50">
        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
            <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">গল্পটি পাওয়া যায়নি</h2>
          <p className="text-gray-500 mb-6">দুঃখিত, আপনি যে গল্পটি খুঁজছেন তা বর্তমানে পাওয়া যাচ্ছে না।</p>
          <Link
            to="/hedayat"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-colors shadow-lg shadow-teal-200"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            সব গল্পে ফিরে যান
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 md:h-[400px] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        {/* Back button */}
        <Link
          to="/hedayat"
          className="absolute top-4 sm:top-6 left-4 sm:left-6 inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md text-white rounded-full text-sm font-medium hover:bg-white/25 transition-all border border-white/20"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          ফিরে যান
        </Link>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-teal-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                হেদায়াতের গল্প
              </span>
              <span className="text-white/70 text-sm">
                {new Date(story.date).toLocaleDateString("bn-BD", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
              {story.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Decorative line */}
        <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full mb-8" />

        {/* Rendered markdown content */}
        <article
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
        />

        {/* Share / navigation footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/hedayat"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-full font-semibold transition-all shadow-lg"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              আরো গল্প পড়ুন
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-teal-200"
            >
              আপনার গল্প শেয়ার করুন
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
