import React, { useState, useEffect, useRef } from "react";

const milestones = [
  {
    year: "প্রতিষ্ঠা - ২০২৬",
    title: "শাহজালাল রহ. ইসলামী দাওয়াহ সেন্টার",
    description:
      "আলহামদুলিল্লাহ! মানবজাতির হিদায়াতের জন্য মহান আল্লাহ তাআলা যুগে যুগে নবী-রাসূল (আলাইহিমুস সালাম) প্রেরণ করেছেন। এই মহান দায়িত্বের অংশীদার হওয়ার লক্ষ্যেই ২০২৬ সালে প্রতিষ্ঠিত হয়েছে শাহজালাল রহ. ইসলামী দাওয়াহ সেন্টার। হযরত শাহজালাল (রহ.)-এর দাওয়াতি মিশনের স্মৃতি ধারণ করে এই সেন্টার ইনশাআল্লাহ হয়ে উঠবে সত্যের পথে আহ্বানের এক আলোকবর্তিকা।",
    image: "/banner/center_banner.jpeg",
  },
  {
    year: "শিক্ষা কার্যক্রম",
    title: "সর্বসাধারণের কুরআন ও দ্বীন শিক্ষা",
    description:
      "সমাজের সর্বস্তরের মানুষের কাছে কুরআনের আলো পৌঁছে দেওয়ার লক্ষ্যে সেন্টারে সর্বসাধারণের কুরআন ও দ্বীন শিক্ষা কার্যক্রম পরিচালিত হয়। আরবি হরফ পরিচিতি থেকে শুরু করে সুন্দর তিলাওয়াত, নামাজের সূরা মুখস্ত, ওযু ও নামাজের নিয়ম, দৈনন্দিন আমল এবং ইসলামের মৌলিক আকীদা-বিশ্বাস শিক্ষা দেওয়া হয়। বিনামূল্যে এই শিক্ষা প্রদানের ব্যবস্থা রয়েছে।",
    image: "/QuranShikkha/sorbosadharon.jpg",
  },
  {
    year: "শিক্ষা কার্যক্রম",
    title: "বয়স্কদের কুরআন শিক্ষা",
    description:
      "বয়স্ক ভাই-বোনদের জন্য বিশেষ কুরআন শিক্ষা কার্যক্রম পরিচালনা করা হয়। অনেকেই বয়সের বার্ধক্যে কুরআন পড়তে পারেন না বা কোনোদিন শিখার সুযোগ পাননি। তাদের জন্য সহজ পদ্ধতিতে আরবি হরফ চেনা, কুরআন তিলাওয়াত এবং প্রাথমিক দ্বীনি শিক্ষার ব্যবস্থা করা হয়েছে। আলহামদুলিল্লাহ, অনেক বয়স্ক ভাই-বোন এখন নিজে নিজে কুরআন তিলাওয়াত করতে পারছেন।",
    image: "/QuranShikkha/boyoshokoder_quran_shikkha.jpg",
  },
  {
    year: "দাওয়াহ কার্যক্রম",
    title: "অমুসলিমদের মাঝে দাওয়াহ",
    description:
      "মানুষকে সত্যের পথে আহ্বান করা হলো সর্বশ্রেষ্ঠ ইবাদত। সেন্টারের সহযোগী দা'ঈ দল নিয়মিত বিভিন্ন এলাকায় গিয়ে অমুসলিম ভাই-বোনদের কাছে ইসলামের বার্তা পৌঁছে দেয়। হিকমাহ ও সদউপদেশের মাধ্যমে তাদের কাছে তাওহীদের বার্তা পেশ করা হয়। আলহামদুলিল্লাহ, এই কার্যক্রমের মাধ্যমে অনেকেই সত্যের পথ গ্রহণ করেছেন।",
    image: "/dawah/dawah_to_non_muslim9.jpeg",
  },
  {
    year: "সামাজিক সেবা",
    title: "নওমুসলিম ভাইদের ঈদের উপহার",
    description:
      "ঈদের আনন্দ সবার মাঝে ছড়িয়ে দেওয়ার লক্ষ্যে প্রতি ঈদে নওমুসলিম ভাইদের মাঝে ঈদের উপহার বিতরণ করা হয়। নতুন জামাকাপড়, খাদ্যসামগ্রী ও ঈদের উপহার প্রদানের মাধ্যমে তাদের পাশে দাঁড়ানো হয়। এটি ভ্রাতৃত্ববোধ ও ইসলামি মূল্যবোধের এক জীবন্ত প্রকাশ।",
    image: "/EidGift/EidGiftToNouMuslim2.jpeg",
  },
  {
    year: "শিক্ষা কার্যক্রম",
    title: "ইলমী হালাকা",
    description:
      "ইলম অর্জন প্রতিটি মুসলিমের উপর ফরজ। সেন্টারে নিয়মিত ইলমী হালাকা অনুষ্ঠিত হয়, যেখানে কুরআন-হাদীসের আলোকে বিভিন্ন দ্বীনি বিষয়ে আলোচনা ও শিক্ষা প্রদান করা হয়। আলেম-উলামাগণের নির্দেশনায় আকীদা, ফিকহ, সীরাত, দাওয়াহর পদ্ধতি সহ বিভিন্ন গুরুত্বপূর্ণ বিষয়ে পাঠদান করানো হয়।",
    image: "/halakah/halakah2.jpeg",
  },
  {
    year: "সামাজিক সেবা",
    title: "খাদ্য সামগ্রী বিতরণ",
    description:
      "অসহায়, গরিব ও নওমুসলিম পরিবারের মাঝে নিয়মিত খাদ্য সামগ্রী বিতরণ করা হয়। রমজানে ইফতার সামগ্রী, শীতকালে শীতবস্ত্র ও উষ্ণ খাদ্য, এবং সারা বছর জরুরি প্রয়োজনে খাদ্য সহায়তা প্রদান করা হয়। এই কার্যক্রমের মাধ্যমে সমাজের বঞ্চিত মানুষদের পাশে দাঁড়ানোর পাশাপাশি ইসলামের সেবার বার্তা সবার কাছে পৌঁছে দেওয়া হয়।",
    image: "/FoodDistribution/foods2.jpeg",
  },
  {
    year: "শিশু কার্যক্রম",
    title: "শিশুদের শিক্ষা ও দাওয়াহ",
    description:
      "শিশুরাই আগামী দিনের দা'ঈ ও সমাজের ভিত্তি। তাদের ছোটবেলা থেকেই কুরআন-সুন্নাহর আলোকে গড়ে তোলার জন্য শিশুদের শিক্ষা ও দাওয়াহ কার্যক্রম পরিচালিত হয়। কুরআন শিক্ষা, নামাজ শিক্ষা, ইসলামি আদব-আখলাক, সাহাবীদের গল্প এবং দাওয়াহর প্রাথমিক পদ্ধতি শিক্ষা দেওয়া হয়। প্রতিযোগিতা ও পুরস্কার প্রদানের মাধ্যমে তাদের শিক্ষার প্রতি আগ্রহ বৃদ্ধি করা হয়।",
    image: "/Childs/halakah3_prize_giving.jpeg",
  },
];

const Activities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-section"), 10);
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (index) => {
    const container = containerRef.current;
    if (!container) return;
    const section = container.querySelector(`[data-section="${index}"]`);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-40 bg-white">
      {/* Scroll container */}
      <div
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {/* Activity sections */}
        {milestones.map((milestone, index) => (
          <div
            key={index}
            data-section={index}
            className="snap-start h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{
              background: index % 2 === 0
                ? "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #ecfdf5 100%)"
                : "linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #f0f9ff 100%)",
            }}
          >
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Image */}
              <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`w-full md:w-1/2 text-center md:text-left ${index % 2 !== 0 ? "md:order-1 md:text-right" : ""}`}>
                <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">
                  {milestone.year}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  {milestone.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Side navigation dots */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {milestones.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-emerald-600 scale-125 shadow-lg shadow-emerald-300"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            title={milestones[index]?.title}
          />
        ))}
      </div>

      {/* Scroll arrows */}
      {activeIndex > 0 && (
        <button
          onClick={() => scrollTo(activeIndex - 1)}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-bounce text-white bg-emerald-600/70 hover:bg-emerald-600 rounded-full p-2 shadow-lg transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
      {activeIndex < milestones.length - 1 && (
        <button
          onClick={() => scrollTo(activeIndex + 1)}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-bounce text-white bg-emerald-600/70 hover:bg-emerald-600 rounded-full p-2 shadow-lg transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}

    </div>
  );
};

export default Activities;
