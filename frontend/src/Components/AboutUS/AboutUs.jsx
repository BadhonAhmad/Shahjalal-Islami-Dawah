import React, { useState } from "react";

const tabs = [
  { id: "about-us-1", label: "পরিচিতি", icon: "info" },
  { id: "about-us-2", label: "লক্ষ্য ও উদ্দেশ্য", icon: "target" },
  { id: "about-us-3", label: "কার্যক্রম", icon: "activity" },
  { id: "about-us-4", label: "তহবিল ও আয়ের উৎস", icon: "fund" },
  { id: "about-us-5", label: "ব্যয়ের নীতিমালা", icon: "policy" },
  { id: "about-us-6", label: "অর্জনসমূহ", icon: "award" },
];

const iconMap = {
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  target: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  activity: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  fund: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  policy: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  award: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
};

const contentMap = {
  "about-us-1": (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>
        আলহামদুলিল্লাহ! মানবজাতির হিদায়াতের জন্য মহান আল্লাহ তাআলা যুগে যুগে নবী-রাসূল (আলাইহিমুস সালাম) প্রেরণ করেছেন। তাঁদের সর্বপ্রথম ও প্রধান দায়িত্ব ছিল—মানুষকে শিরক ও বহুত্ববাদের অন্ধকার থেকে মুক্ত করে এক আল্লাহর ইবাদতের দিকে আহ্বান করা। এই মহান দাওয়াতি মিশনই হচ্ছে পৃথিবীর সর্বশ্রেষ্ঠ কাজ, যা কিয়ামত পর্যন্ত অব্যাহত থাকবে।
      </p>
      <p>
        এই মহান দায়িত্বের অংশীদার হওয়ার লক্ষ্যেই প্রতিষ্ঠিত হয়েছে "শাহজালাল রহ. ইসলামী দাওয়াহ সেন্টার"। আলহামদুলিল্লাহ! এই নামের সাথে জড়িয়ে আছে আমাদের প্রিয় ভূখণ্ডের দাওয়াতি ঐতিহ্য, আধ্যাত্মিক ইতিহাস এবং হিদায়াতের এক উজ্জ্বল প্রত্যাশা। হযরত শাহজালাল (রহ.)-এর দাওয়াতি মিশনের স্মৃতি ধারণ করে এই সেন্টার ইনশাআল্লাহ হয়ে উঠবে সত্যের পথে আহ্বানের এক আলোকবর্তিকা।
      </p>
    </div>
  ),
  "about-us-2": (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>▪️ নওমুসলিম ভাইদের প্রাথমিক দ্বীন শিক্ষা প্রদান</p>
      <p>▪️ তাদের ঈমানী দৃঢ়তা বৃদ্ধি ও আত্মিক উন্নয়ন</p>
      <p>▪️ সুখে-দুঃখে পাশে থেকে সার্বিক সহায়তা প্রদান</p>
      <p>▪️ ইসলামের সঠিক ও বিশুদ্ধ শিক্ষা সমাজে পৌঁছে দেওয়া</p>
      <p>▪️ দাওয়াতি কার্যক্রমের মাধ্যমে দ্বীনের আলো সর্বত্র ছড়িয়ে দেওয়া</p>
      <p>ইনশাআল্লাহ, এই মারকাজ হবে এমন একটি কেন্দ্র—যেখান থেকে ঈমানের আলো ছড়িয়ে পড়বে ঘরে ঘরে, হৃদয়ে হৃদয়ে।</p>
      <p>আমরা মহান আল্লাহ তাআলার দরবারে দোয়া করি—তিনি যেন এই দাওয়াহ সেন্টারকে কবুল করেন, এতে অফুরন্ত বারাকাহ দান করেন এবং একে অসংখ্য মানুষের হিদায়াতের উসিলা বানিয়ে দেন। আমীন, ইয়া রব্বাল আলামীন।</p>
    </div>
  ),
  "about-us-3": (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p><strong>নওমুসলিম শিক্ষা কার্যক্রম:</strong> নওমুসলিম ভাইদের জন্য প্রাথমিক ইসলামি শিক্ষা, কুরআন তিলাওয়াত, নামাজ শিক্ষা এবং দৈনন্দিন আমলের বিষয়ে পূর্ণাঙ্গ প্রশিক্ষণ প্রদান করা হয়।</p>
      <p><strong>দাওয়াহ প্রচার:</strong> সরাসরি দাওয়াহ, অনলাইন দাওয়াহ, ইসলামিক সেমিনার ও আলোচনা সভার মাধ্যমে সত্যের বার্তা মানুষের কাছে পৌঁছে দেওয়া হয়।</p>
      <p><strong>তাবলীগ ও সফর:</strong> বিভিন্ন এলাকায় দাওয়াহ টিম প্রেরণ করে সাধারণ মানুষের কাছে ইসলামের বার্তা পৌঁছে দেওয়া হয়।</p>
      <p><strong>সামাজিক সেবা:</strong> গরিব-দুঃখী, অসহায় ও নওমুসলিম পরিবারের পাশে দাঁড়ানো, চিকিৎসা সহায়তা ও আর্থিক সাহায্য প্রদান করা হয়।</p>
    </div>
  ),
  "about-us-4": (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p><strong>সাধারণ দান:</strong> ধর্মপ্রাণ মুসলিম ভাই-বোনদের স্বেচ্ছাকৃত দান এই সেন্টারের অন্যতম প্রধান আয়ের উৎস। আল্লাহর রাস্তায় দান করে তারা এই মহান কাজে অংশীদার হন।</p>
      <p><strong>যাকাত তহবিল:</strong> সম্পদশালী মুসলিমদের যাকাতের অর্থ দ্বারা নওমুসলিম ভাইদের শিক্ষা, পুনর্বাসন ও সামাজিক উন্নয়নে ব্যয় করা হয়।</p>
      <p><strong>সদস্য নিয়মিত সদস্য দান:</strong> সহযোগী সদস্যদের নিয়মিত সদস্য দান সেন্টারের পরিচালনা ব্যয় মেটাতে সহায়তা করে।</p>
      <p>আল্লাহ তায়ালা বলেন — &laquo; তোমরা আল্লাহকে ঋণ দাও, উত্তম ঋণ। আল্লাহ তোমাদের জন্য তা বহুগুণ বাড়িয়ে দেবেন। &raquo; (সূরা আল-হাদীদ: ১১)</p>
    </div>
  ),
  "about-us-5": (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>
        শাহজালাল ইসলামী দাওয়াহ সেন্টারে প্রাপ্ত সকল অর্থ সম্পূর্ণ স্বচ্ছতার সাথে দাওয়াহ ও নওমুসলিম কল্যাণে ব্যয় করা হয়।
      </p>
      <p><strong>শিক্ষা খাত:</strong> নওমুসলিম ভাইদের প্রাথমিক শিক্ষা, কুরআন শিক্ষা, ইসলামি সাহিত্য সরবরাহ ও শিক্ষকদের সম্মানী প্রদানে ব্যয় করা হয়।</p>
      <p><strong>দাওয়াহ খাত:</strong> দাওয়াহ সফর, সেমিনার আয়োজন, প্রচার সামগ্রী তৈরি ও অনলাইন দাওয়াহ কার্যক্রমে ব্যয় করা হয়।</p>
      <p><strong>সামাজিক সেবা খাত:</strong> নওমুসলিম পরিবারের পুনর্বাসন, চিকিৎসা সহায়তা, শীতবস্ত্র বিতরণ ও আপদকালীন সহায়তায় ব্যয় করা হয়।</p>
      <p><strong>প্রশাসনিক খাত:</strong> সেন্টারের ভাড়া, যাতায়াত, যোগাযোগ ও প্রশাসনিক ব্যয় নির্বাহ করা হয়।</p>
      <p>প্রতিটি ব্যয়ের হিসাব নিয়মিত পরিচালনা পর্ষদের সামনে উপস্থাপন করা হয় এবং সর্বোচ্চ স্বচ্ছতা বজায় রাখা হয়।</p>
    </div>
  ),
  "about-us-6": (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p><strong>নওমুসলিম শিক্ষা:</strong> আলহামদুলিল্লাহ, স্বল্প সময়েই অসংখ্য নওমুসলিম ভাইকে প্রাথমিক দ্বীনি শিক্ষা প্রদান করা সম্ভব হয়েছে। তারা এখন সুন্দরভাবে নামাজ আদায় করতে এবং কুরআন তিলাওয়াত করতে সক্ষম।</p>
      <p><strong>দাওয়াহ প্রসার:</strong> সিলেট বিভাগের বিভিন্ন এলাকায় দাওয়াহ কার্যক্রম পৌঁছে দেওয়া সম্ভব হয়েছে। সাধারণ মানুষ থেকে শুরু করে শিক্ষিত সমাজের কাছেও ইসলামের বার্তা পৌঁছেছে।</p>
      <p><strong>সহযোগী দা'ঈ দল:</strong> একটি সুশৃঙ্খল সহযোগী দা'ঈ দল গঠন করা হয়েছে যারা নিয়মিত দাওয়াহর কাজে নিয়োজিত রয়েছে।</p>
      <p><strong>সামাজিক প্রভাব:</strong> নওমুসলিম ভাইদের সামাজিক পুনর্বাসন, পরিবারের আর্থিক উন্নয়ন এবং সমাজে তাদের সম্মানজনক অবস্থান তৈরিতে ভূমিকা রাখা হয়েছে।</p>
      <p>আল্লাহর অশেষ রহমতে এই যাত্রা অব্যাহত রয়েছে। আল্লাহ তায়ালা আমাদের সকলকে এই মহান কাজে কবুল করুন। আমিন।</p>
    </div>
  ),
};

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("about-us-1");

  const activeIndex = tabs.findIndex((t) => t.id === activeTab);

  const goNext = () => {
    if (activeIndex < tabs.length - 1) setActiveTab(tabs[activeIndex + 1].id);
  };

  const goPrev = () => {
    if (activeIndex > 0) setActiveTab(tabs[activeIndex - 1].id);
  };

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            আমাদের সম্পর্কে
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl shadow-gray-200/60 overflow-hidden border border-gray-100/80">
          {/* Sidebar tabs */}
          <div className="md:w-64 lg:w-72 bg-gradient-to-b from-gray-50 to-white md:border-r border-gray-100 p-4 md:pt-14 md:pb-4">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible gap-1.5 md:gap-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3.5 text-sm md:text-base font-medium whitespace-nowrap transition-all duration-300 rounded-xl md:rounded-none md:rounded-r-xl relative ${
                    activeTab === tab.id
                      ? "bg-emerald-50 text-emerald-700 shadow-sm md:shadow-none"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-emerald-600">{iconMap[tab.icon]}</span>
                  <span>{tab.label}</span>
                  {/* Active left bar */}
                  {activeTab === tab.id && (
                    <span className="hidden md:block absolute left-0 top-3 bottom-3 w-[3px] bg-emerald-500 rounded-r-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 p-6 md:p-10 min-h-[320px] relative">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-3xl pointer-events-none" />

            <div className="relative">
              {/* Active tab title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                  {iconMap[tabs.find(t => t.id === activeTab)?.icon]}
                </span>
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>

              {/* Divider */}
              <div className="w-16 h-0.5 bg-emerald-300 mb-6 rounded-full" />

              {contentMap[activeTab]}

              {/* Mobile arrow navigation */}
              <div className="flex md:hidden items-center justify-between mt-8 pt-4 border-t border-gray-100">
                <button
                  onClick={goPrev}
                  disabled={activeIndex === 0}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeIndex === 0
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-emerald-600 hover:bg-emerald-50"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  আগের
                </button>
                <span className="text-xs text-gray-400">{activeIndex + 1} / {tabs.length}</span>
                <button
                  onClick={goNext}
                  disabled={activeIndex === tabs.length - 1}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeIndex === tabs.length - 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-emerald-600 hover:bg-emerald-50"
                  }`}
                >
                  পরের
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
