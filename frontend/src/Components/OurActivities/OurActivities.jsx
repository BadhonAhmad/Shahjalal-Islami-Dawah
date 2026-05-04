import React, { useState } from 'react';

const tabs = [
  { id: 'activity-1', label: 'প্রতিষ্ঠা - ২০২৬', icon: 'institution' },
  { id: 'activity-2', label: 'সর্বসাধারণের কুরআন ও দ্বীন শিক্ষা', icon: 'book' },
  { id: 'activity-3', label: 'বয়স্কদের কুরআন শিক্ষা', icon: 'quran' },
  { id: 'activity-4', label: 'অমুসলিমদের মাঝে দাওয়াহ', icon: 'megaphone' },
  { id: 'activity-5', label: 'নওমুসলিম ভাইদের ঈদের উপহার', icon: 'gift' },
  { id: 'activity-6', label: 'ইলমী হালাকা', icon: 'halakah' },
  { id: 'activity-7', label: 'খাদ্য সামগ্রী বিতরণ', icon: 'food' },
  { id: 'activity-8', label: 'শিশুদের শিক্ষা ও দাওয়াহ', icon: 'child' },
];

const iconMap = {
  institution: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  book: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  quran: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  megaphone: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  gift: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  ),
  halakah: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  food: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  child: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const contentMap = {
  'activity-1': {
    image: '/banner/center_banner.jpeg',
    content: (
      <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
        <p>
          আলহামদুলিল্লাহ! মানবজাতির হিদায়াতের জন্য মহান আল্লাহ তাআলা যুগে যুগে নবী-রাসূল (আলাইহিমুস সালাম) প্রেরণ করেছেন। তাঁদের সর্বপ্রথম ও প্রধান দায়িত্ব ছিল—মানুষকে শিরক ও বহুত্ববাদের অন্ধকার থেকে মুক্ত করে এক আল্লাহর ইবাদতের দিকে আহ্বান করা।
        </p>
        <p>
          এই মহান দায়িত্বের অংশীদার হওয়ার লক্ষ্যেই ২০২৬ সালে প্রতিষ্ঠিত হয়েছে <strong>"শাহজালাল রহ. ইসলামী দাওয়াহ সেন্টার"</strong>। এই নামের সাথে জড়িয়ে আছে আমাদের প্রিয় ভূখণ্ডের দাওয়াতি ঐতিহ্য, আধ্যাত্মিক ইতিহাস এবং হিদায়াতের এক উজ্জ্বল প্রত্যাশা। হযরত শাহজালাল (রহ.)-এর দাওয়াতি মিশনের স্মৃতি ধারণ করে এই সেন্টার ইনশাআল্লাহ হয়ে উঠবে সত্যের পথে আহ্বানের এক আলোকবর্তিকা।
        </p>
      </div>
    ),
  },
  'activity-2': {
    image: '/quranshikkha/sorbosadharon.jpeg',
    content: (
      <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
        <p>
          কুরআন হলো আল্লাহর বাণী—মানুষের জন্য পথ চলার সর্বশ্রেষ্ঠ নির্দেশিকা। সমাজের সর্বস্তরের মানুষের কাছে কুরআনের আলো পৌঁছে দেওয়ার লক্ষ্যে আমাদের সেন্টারে <strong>সর্বসাধারণের কুরআন ও দ্বীন শিক্ষা</strong> কার্যক্রম পরিচালিত হয়।
        </p>
        <p>
          এখানে আরবি হরফ পরিচিতি থেকে শুরু করে সুন্দর তিলাওয়াত, নামাজের সূরা মুখস্থ, ওযু ও নামাজের নিয়ম, দৈনন্দিন আমল এবং ইসলামের মৌলিক আকীদা-বিশ্বাস শিক্ষা দেওয়া হয়। বিনামূল্যে এই শিক্ষা প্রদানের ব্যবস্থা রয়েছে যাতে অর্থের অভাবে কেউ দ্বীনি শিক্ষা থেকে বঞ্চিত না হয়।
        </p>
      </div>
    ),
  },
  'activity-3': {
    image: '/quranshikkha/boyoshokoder_quran_shikkha.jpg',
    content: (
      <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
        <p>
          বয়স্ক ভাই-বোনদের জন্য বিশেষ <strong>কুরআন শিক্ষা কার্যক্রম</strong> পরিচালনা করা হয়। অনেকেই বয়সের বার্ধক্যে কুরআন পড়তে পারেন না বা কোনোদিন শিখার সুযোগ পাননি। তাদের জন্য সহজ পদ্ধতিতে আরবি হরফ চেনা, কুরআন তিলাওয়াত এবং প্রাথমিক দ্বীনি শিক্ষার ব্যবস্থা করা হয়েছে।
        </p>
        <p>
          আলহামদুলিল্লাহ, অনেক বয়স্ক ভাই-বোন যারা জীবনে কোনোদিন কুরআন ধরেননি, তারা এখন নিজে নিজে কুরআন তিলাওয়াত করতে পারছেন। এটি এক অভাবনীয় আনন্দ ও আধ্যাত্মিক প্রশান্তির বিষয়।
        </p>
      </div>
    ),
  },
  'activity-4': {
    image: '/dawah/dawah_to_non_muslim9.jpeg',
    content: (
      <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
        <p>
          মানুষকে সত্যের পথে আহ্বান করা হলো সর্বশ্রেষ্ঠ ইবাদত। আল্লাহ তাআলা বলেন— <em>"তোমার প্রতি পালিত রবের পক্ষ থেকে যা ওহী পাঠানো হয়েছে তা পৌঁছে দাও।" (সূরা আল-মায়েদাহ: ৬৭)</em>
        </p>
        <p>
          সেন্টারের সহযোগী দা'ঈ দল নিয়মিত বিভিন্ন এলাকায় গিয়ে অমুসলিম ভাই-বোনদের কাছে ইসলামের বার্তা পৌঁছে দেয়। হিকমাহ ও সদউপদেশের মাধ্যমে তাদের কাছে তাওহীদের বার্তা পেশ করা হয়। আলহামদুলিল্লাহ, এই কার্যক্রমের মাধ্যমে অনেকেই সত্যের পথ গ্রহণ করেছেন।
        </p>
      </div>
    ),
  },
  'activity-5': {
    image: '/EidGift/EidGiftToNouMuslim2.jpeg',
    content: (
      <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
        <p>
          ঈদের আনন্দ সবার মাঝে ছড়িয়ে দেওয়ার লক্ষ্যে প্রতি ঈদে <strong>নওমুসলিম ভাইদের মাঝে ঈদের উপহার</strong> বিতরণ করা হয়। নতুন জামাকাপড়, খাদ্যসামগ্রী ও ঈদের উপহার প্রদানের মাধ্যমে তাদের পাশে দাঁড়ানো হয়।
        </p>
        <p>
          এটি শুধু উপহার নয়, বরং ভ্রাতৃত্ববোধ ও ইসলামি মূল্যবোধের এক জীবন্ত প্রকাশ। নওমুসলিম ভাইরা যখন দেখেন মুসলিম সমাজ তাদের সুখে-দুঃখে পাশে আছে, তখন তাদের ঈমানী দৃঢ়তা আরও বৃদ্ধি পায়।
        </p>
      </div>
    ),
  },
  'activity-6': {
    image: '/halakah/halakah2.jpeg',
    content: (
      <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
        <p>
          ইলম অর্জন প্রতিটি মুসলিমের উপর ফরজ। এই উদ্দেশ্যে সেন্টারে নিয়মিত <strong>ইলমী হালাকা</strong> অনুষ্ঠিত হয়, যেখানে কুরআন-হাদীসের আলোকে বিভিন্ন দ্বীনি বিষয়ে আলোচনা ও শিক্ষা প্রদান করা হয়।
        </p>
        <p>
          আলেম-উলামাগণের নির্দেশনায় আকীদা, ফিকহ, সীরাত, দাওয়াহর পদ্ধতি সহ বিভিন্ন গুরুত্বপূর্ণ বিষয়ে পাঠদান করানো হয়। এই হালাকায় অংশগ্রহণের মাধ্যমে সাধারণ মুসলিমরা তাদের দ্বীনি জ্ঞান ও আমলি জিন্দেগি সমৃদ্ধ করতে পারেন।
        </p>
      </div>
    ),
  },
  'activity-7': {
    image: '/FoodDistribution/foods2.jpeg',
    content: (
      <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
        <p>
          আল্লাহ তাআলা বলেন— <em>"তারা আল্লাহকে ভালোবাসার কারণে অভুক্তকে অন্ন দান করে।" (সূরা আল-দাহর: ৮)</em>
        </p>
        <p>
          অসহায়, গরিব ও নওমুসলিম পরিবারের মাঝে নিয়মিত <strong>খাদ্য সামগ্রী বিতরণ</strong> করা হয়। রমজানে ইফতার সামগ্রী, শীতকালে শীতবস্ত্র ও উষ্ণ খাদ্য, এবং সারা বছর জরুরি প্রয়োজনে খাদ্য সহায়তা প্রদান করা হয়।
        </p>
        <p>
          এই কার্যক্রমের মাধ্যমে সমাজের বঞ্চিত মানুষদের পাশে দাঁড়ানোর পাশাপাশি ইসলামের সেবার বার্তা সবার কাছে পৌঁছে দেওয়া হয়।
        </p>
      </div>
    ),
  },
  'activity-8': {
    image: '/childs/halakah3_prize_giving.jpeg',
    content: (
      <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
        <p>
          শিশুরাই আগামী দিনের দা'ঈ ও সমাজের ভিত্তি। তাদের ছোটবেলা থেকেই কুরআন-সুন্নাহর আলোকে গড়ে তোলার জন্য <strong>শিশুদের শিক্ষা ও দাওয়াহ</strong> কার্যক্রম পরিচালিত হয়।
        </p>
        <p>
          কুরআন শিক্ষা, নামাজ শিক্ষা, ইসলামি আদব-আখলাক, সাহাবীদের গল্প এবং দাওয়াহর প্রাথমিক পদ্ধতি শিক্ষা দেওয়া হয়। প্রতিযোগিতা ও পুরস্কার প্রদানের মাধ্যমে তাদের শিক্ষার প্রতি আগ্রহ বৃদ্ধি করা হয়। ইনশাআল্লাহ, এই শিশুরাই একদিন হবে দ্বীনের পতাকাবাহী।
        </p>
      </div>
    ),
  },
};

const OurActivities = () => {
  const [activeTab, setActiveTab] = useState('activity-1');

  const activeContent = contentMap[activeTab];
  const activeIndex = tabs.findIndex((t) => t.id === activeTab);

  const goNext = () => {
    if (activeIndex < tabs.length - 1) setActiveTab(tabs[activeIndex + 1].id);
  };

  const goPrev = () => {
    if (activeIndex > 0) setActiveTab(tabs[activeIndex - 1].id);
  };

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            আমাদের কার্যক্রম
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-400 rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl shadow-gray-200/60 overflow-hidden border border-gray-100/80">
          {/* Sidebar tabs */}
          <div className="md:w-64 lg:w-72 bg-gradient-to-b from-indigo-50/50 to-white md:border-r border-indigo-100/50 p-4 md:pt-14 md:pb-4">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible gap-1.5 md:gap-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3.5 text-sm md:text-base font-medium whitespace-nowrap transition-all duration-300 rounded-xl md:rounded-none md:rounded-r-xl relative ${
                    activeTab === tab.id
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm md:shadow-none'
                      : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-indigo-600">{iconMap[tab.icon]}</span>
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <span className="hidden md:block absolute left-0 top-3 bottom-3 w-[3px] bg-indigo-500 rounded-r-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content area with image */}
          <div className="flex-1 p-6 md:p-10 min-h-[400px] relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-3xl pointer-events-none" />

            <div className="relative">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  {iconMap[tabs.find(t => t.id === activeTab)?.icon]}
                </span>
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>

              <div className="w-16 h-0.5 bg-indigo-300 mb-6 rounded-full" />

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2 flex-shrink-0">
                  <img
                    src={activeContent.image}
                    alt={tabs.find(t => t.id === activeTab)?.label}
                    className="w-full h-56 md:h-72 lg:h-80 object-cover rounded-2xl shadow-md"
                  />
                </div>
                <div className="lg:w-1/2">
                  {activeContent.content}
                </div>
              </div>

              {/* Mobile arrow navigation */}
              <div className="flex md:hidden items-center justify-between mt-8 pt-4 border-t border-gray-100">
                <button
                  onClick={goPrev}
                  disabled={activeIndex === 0}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeIndex === 0
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-indigo-600 hover:bg-indigo-50"
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
                      : "text-indigo-600 hover:bg-indigo-50"
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

export default OurActivities;
