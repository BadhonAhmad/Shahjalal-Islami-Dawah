import React from "react";
import gub1 from "../Components/Assets/Gallery/gellary1.jpg";
import gub2 from "../Components/Assets/Gallery/gellary5.jpg";
import gub3 from "../Components/Assets/Gallery/gellary10.jpg";
import gub4 from "../Components/Assets/Gallery/gellary15.jpg";
import gub5 from "../Components/Assets/Gallery/gellary20.jpg";
import gub6 from "../Components/Assets/Gallery/gellary25.jpg";
import gub7 from "../Components/Assets/Gallery/gellary30.jpg";
import gub8 from "../Components/Assets/Gallery/gellary40.jpg";

const milestones = [
  {
    year: "২০১৭",
    title: "প্রতিষ্ঠা",
    description:
      "আলহামদুলিল্লাহ! পুণ্যভূমি সিলেটে শুরু হলো দ্বীনি দাওয়াতের নতুন এক পথচলা। সিলেট বিভাগের নওমুসলিম ভাইদের দ্বীনি ইলম ও আমলি জিন্দেগি গড়ার লক্ষ্যে শাহজালাল ইসলামী দাওয়াহ সেন্টার প্রতিষ্ঠিত হয়।",
    image: gub1,
  },
  {
    year: "২০১৮",
    title: "শিক্ষা কার্যক্রম সম্প্রসারণ",
    description:
      "নারায়ণগঞ্জ ও ঢাকায় শাখা সম্প্রসারণ করা হয়। কুরআন, হাদীস, ফিকহসহ বিভিন্ন বিভাগে পাঠদান শুরু হয়। শতাধিক শিক্ষার্থী ভর্তি হয়ে ইসলামিক শিক্ষায় আলোকিত হতে শুরু করে।",
    image: gub2,
  },
  {
    year: "২০১৯",
    title: "সরকারি নিবন্ধন লাভ",
    description:
      "প্রতিষ্ঠানটি সরকারি নিবন্ধন লাভ করে (নিবন্ধন নম্বর: এস-১৩১১১/২০১৯)। এটি একটি অরাজনৈতিক, অলাভজনক সেবামূলক প্রতিষ্ঠান হিসেবে আনুষ্ঠানিক স্বীকৃতি পায়।",
    image: gub3,
  },
  {
    year: "২০২০",
    title: "দাওয়াহ ও অনলাইন কার্যক্রম",
    description:
      "মহামারীর সময়েও কার্যক্রম থামেনি। অনলাইন দাওয়াহ কার্যক্রম, ইসলামিক সেমিনার এবং ভিডিও কনটেন্টের মাধ্যমে হাজারো মানুষের কাছে সত্যের বার্তা পৌঁছে দেওয়া হয়।",
    image: gub4,
  },
  {
    year: "২০২১",
    title: "মাসিক মাহফিল ও ইফতার মাহফিল",
    description:
      "প্রতি মাসে ইসলামিক মাহফিলের আয়োজন শুরু হয়। রমজান মাসে ব্যাপক ইফতার মাহফিলের আয়োজন করে গরিব-দুঃখীদের পাশে দাঁড়ানো হয়। হাজারো মানুষ এই মাহফিলে অংশগ্রহণ করে।",
    image: gub5,
  },
  {
    year: "২০২২",
    title: "বালিকা মাদরাসা প্রতিষ্ঠা",
    description:
      "নওমুসলিম ভাইদের প্রাথমিক দ্বীন শিক্ষা, ইসলামের সঠিক আকীদা ও আমল শিক্ষার জন্য বিশেষ ব্যবস্থা গ্রহণ করা হয়। সুখে দুঃখে তাদের পাশে দাঁড়ানোর লক্ষ্যে এই উদ্যোগ গ্রহণ করা হয়।",
    image: gub6,
  },
  {
    year: "২০২৩",
    title: "সামাজিক সেবা ও মানবকল্যাণ",
    description:
      "শীতবস্ত্র বিতরণ, চিকিৎসা সহায়তা, গরিব ছাত্রদের বৃত্তি প্রদানসহ বিভিন্ন সামাজিক সেবামূলক কার্যক্রম পরিচালিত হয়। প্রতিষ্ঠানটি একটি বিশ্বস্ত সেবামূলক সংগঠন হিসেবে পরিচিতি লাভ করে।",
    image: gub7,
  },
  {
    year: "২০২৪ ও এগিয়ে",
    title: "ভবিষ্যৎ পরিকল্পনা",
    description:
      "সিলেট বিভাগীয় নওমুসলিম মারকায স্থাপন, ইসলামিক বিশ্ববিদ্যালয় প্রতিষ্ঠা, এবং সারাদেশে দাওয়াহ নেটওয়ার্ক সম্প্রসারণের লক্ষ্যে কাজ চলছে। আল্লাহর সাহায্যে এই যাত্রা অব্যাহত থাকবে।",
    image: gub8,
  },
];

const Activities = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            আমাদের যাত্রা
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            আমাদের কার্যক্রম
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            সামান্য শুরু থেকে আজকের এই বিশাল পরিসরে পৌঁছানোর পথচলার গল্প
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-600 -translate-x-1/2 rounded-full" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-600 rounded-full" />

          {milestones.map((milestone, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div key={index} className="relative mb-12 md:mb-20">
                {/* Center dot - desktop */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center shadow-lg shadow-emerald-300/40 ring-4 ring-white">
                    <span className="text-amber-300 text-base">&#10022;</span>
                  </div>
                </div>

                {/* Center dot - mobile */}
                <div className="md:hidden absolute left-6 top-4 -translate-x-1/2 z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center shadow-lg ring-3 ring-white">
                    <span className="text-amber-300 text-sm">&#10022;</span>
                  </div>
                </div>

                {/* Desktop: image and text on opposite sides */}
                <div className="hidden md:flex items-center">
                  {isImageLeft ? (
                    <>
                      {/* Image on left */}
                      <div className="w-[calc(50%-24px)] pr-8">
                        <div className="rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-72 lg:h-80 object-cover"
                          />
                        </div>
                      </div>
                      {/* Spacer for center line */}
                      <div className="w-12 shrink-0" />
                      {/* Description on right */}
                      <div className="w-[calc(50%-24px)] pl-8">
                        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-3">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Description on left */}
                      <div className="w-[calc(50%-24px)] pr-8 text-right">
                        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-3">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                      {/* Spacer for center line */}
                      <div className="w-12 shrink-0" />
                      {/* Image on right */}
                      <div className="w-[calc(50%-24px)] pl-8">
                        <div className="rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-72 lg:h-80 object-cover"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile layout */}
                <div className="md:hidden ml-14">
                  <div className="rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 mb-4">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* End dot */}
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
              <span className="text-white text-base font-bold leading-none">&#10003;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
