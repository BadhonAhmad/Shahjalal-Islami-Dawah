import React, { useState } from "react";

const tabs = [
  { id: "about-us-1", label: "পরিচিতি", icon: "🕌" },
  { id: "about-us-2", label: "নীতি ও আদর্শ", icon: "⭐" },
  { id: "about-us-3", label: "লক্ষ্য ও উদ্দেশ্য", icon: "🎯" },
  { id: "about-us-4", label: "কার্যক্রম", icon: "📋" },
  { id: "about-us-5", label: "তহবিল ও আয়ের উৎস", icon: "💰" },
  { id: "about-us-6", label: "ব্যয়ের নীতিমালা", icon: "📊" },
  { id: "about-us-7", label: "অর্জনসমূহ", icon: "🏆" },
];

const contentMap = {
  "about-us-1": (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>
        আলহামদুলিল্লাহ! পুণ্যভূমি সিলেটে দ্বীনি দাওয়াতের নতুন এক পথচলার সূচনা হলো। সিলেট বিভাগের ধর্মপ্রাণ ভাই ও নওমুসলিম ভাইদের দ্বীনি ইলম ও আমলি জিন্দেগি গড়ার লক্ষ্যে নবপ্রতিষ্ঠিত &laquo;শাহজালাল রহ. ইসলামি দাওয়াহ সেন্টার&raquo; আত্মপ্রকাশ করেছে।
      </p>
      <p>
        এই নামের সাথেই জড়িয়ে আছে আমাদের দেশের গৌরবময় দাওয়াতের ইতিহাস, চেতনা এবং হিদায়েতের উজ্জ্বল প্রত্যাশা। ইনশাআল্লাহ, এই মারকায হবে সত্যের পথে আহ্বানের এক প্রাণকেন্দ্র—যেখান থেকে নওমুসলিম ভাইদের প্রাথমিক দ্বীন শিক্ষা প্রদান, তাদের সুখে-দুঃখে পাশে থাকা, ইসলামের সঠিক শিক্ষা পৌঁছে দেওয়া এবং দ্বীনের আলো সর্বত্র ছড়িয়ে দেওয়ার মহান কাজ অব্যাহত থাকবে।
      </p>
      <p>
        দ্বীন প্রচারের এই মহান জিম্মাদারিতে আমরা আপনাদের সকলের দোয়া ও আন্তরিক সহযোগিতা কামনা করছি। আল্লাহ তাআলা এই দাওয়াহ সেন্টারকে কবুল করুন, এতে অফুরন্ত বারাকাহ দান করুন এবং একে অসংখ্য মানুষের হিদায়েতের উসিলা বানিয়ে দিন। আমীন ইয়া রব্বাল আলামীন।
      </p>
    </div>
  ),
  "about-us-2": (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>
        শাহজালাল ইসলামী দাওয়াহ সেন্টারের মূল নীতি হলো কুরআন ও সুন্নাহর আলোকে মানুষের কাছে সত্যের বার্তা পৌঁছে দেওয়া। আমরা বিশ্বাস করি, ইসলাম হলো একমাত্র জীবন ব্যবস্থা যা মানুষকে দুনিয়া ও আখিরাতে সফলতার পথ দেখাতে পারে।
      </p>
      <p>
        আমাদের আদর্শ হলো সালাফে সালিহীনের পথ অনুসরণ করে, মধ্যমপন্থা অবলম্বন করে দাওয়াহর কাজ পরিচালনা করা। কোনো চরমপন্থা বা বাড়াবাড়ি ছাড়া, হিকমাহ বা প্রজ্ঞার সাথে মানুষের হৃদয়ে ইসলামের আলো পৌঁছানো।
      </p>
      <p>
        আমরা সকল রাজনৈতিক মতাদর্শের ঊর্ধ্বে থেকে, কেবল আল্লাহর সন্তুষ্টি লাভের উদ্দেশ্যে এই মহান কাজে নিয়োজিত। সততা, স্বচ্ছতা এবং আমানতদারিতা আমাদের কাজের মূল ভিত্তি।
      </p>
    </div>
  ),
  "about-us-3": (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p><strong>প্রাথমিক লক্ষ্য:</strong> সিলেট বিভাগের নওমুসলিম ভাইদের প্রাথমিক দ্বীনি শিক্ষা প্রদান করা এবং তাদের আমলি জিন্দেগি গঠনে সহায়তা করা।</p>
      <p><strong>দাওয়াহ লক্ষ্য:</strong> চিরস্থায়ী জাহান্নামগামী মানুষদের ইসলামের দিকে আহ্বান করা এবং সত্যের পথ দেখানো। প্রতিটি মানুষের কাছে তাওহীদের বার্তা পৌঁছে দেওয়া।</p>
      <p><strong>শিক্ষা লক্ষ্য:</strong> নওমুসলিম ভাইদের কুরআন শিক্ষা, নামাজ শিক্ষা, ইসলামি আকীদা ও আমলের পূর্ণাঙ্গ শিক্ষা প্রদান করা।</p>
      <p><strong>সামাজিক লক্ষ্য:</strong> নওমুসলিম ভাইদের সুখে-দুঃখে পাশে দাঁড়ানো, তাদের সামাজিক ও অর্থনৈতিক উন্নয়নে সহায়তা করা এবং তাদের পরিবারকে ইসলামি পরিবেশে গড়ে তুলতে সাহায্য করা।</p>
      <p><strong>দীর্ঘমেয়াদী লক্ষ্য:</strong> সিলেট বিভাগে একটি সুসংগঠিত দাওয়াহ নেটওয়ার্ক গড়ে তোলা এবং সারাদেশে এই মডেল ছড়িয়ে দেওয়া।</p>
    </div>
  ),
  "about-us-4": (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p><strong>নওমুসলিম শিক্ষা কার্যক্রম:</strong> নওমুসলিম ভাইদের জন্য প্রাথমিক ইসলামি শিক্ষা, কুরআন তিলাওয়াত, নামাজ শিক্ষা এবং দৈনন্দিন আমলের বিষয়ে পূর্ণাঙ্গ প্রশিক্ষণ প্রদান করা হয়।</p>
      <p><strong>দাওয়াহ প্রচার:</strong> সরাসরি দাওয়াহ, অনলাইন দাওয়াহ, ইসলামিক সেমিনার ও আলোচনা সভার মাধ্যমে সত্যের বার্তা মানুষের কাছে পৌঁছে দেওয়া হয়।</p>
      <p><strong>তাবলীগ ও সফর:</strong> বিভিন্ন এলাকায় দাওয়াহ টিম প্রেরণ করে সাধারণ মানুষের কাছে ইসলামের বার্তা পৌঁছে দেওয়া হয়।</p>
      <p><strong>সামাজিক সেবা:</strong> গরিব-দুঃখী, অসহায় ও নওমুসলিম পরিবারের পাশে দাঁড়ানো, চিকিৎসা সহায়তা ও আর্থিক সাহায্য প্রদান করা হয়।</p>
    </div>
  ),
  "about-us-5": (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p><strong>সাধারণ দান:</strong> ধর্মপ্রাণ মুসলিম ভাই-বোনদের স্বেচ্ছাকৃত দান এই সেন্টারের অন্যতম প্রধান আয়ের উৎস। আল্লাহর রাস্তায় দান করে তারা এই মহান কাজে অংশীদার হন।</p>
      <p><strong>যাকাত তহবিল:</strong> সম্পদশালী মুসলিমদের যাকাতের অর্থ দ্বারা নওমুসলিম ভাইদের শিক্ষা, পুনর্বাসন ও সামাজিক উন্নয়নে ব্যয় করা হয়।</p>
      <p><strong>সদস্য নিয়মিত সদস্য দান:</strong> সহযোগী সদস্যদের নিয়মিত সদস্য দান সেন্টারের পরিচালনা ব্যয় মেটাতে সহায়তা করে।</p>
      <p>আল্লাহ তায়ালা বলেন — &laquo; তোমরা আল্লাহকে ঋণ দাও, উত্তম ঋণ। আল্লাহ তোমাদের জন্য তা বহুগুণ বাড়িয়ে দেবেন। &raquo; (সূরা আল-হাদীদ: ১১)</p>
    </div>
  ),
  "about-us-6": (
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
  "about-us-7": (
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

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            আমাদের সম্পর্কে জানুন
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            আমাদের সম্পর্কে
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl shadow-gray-200/60 overflow-hidden border border-gray-100/80">
          {/* Sidebar tabs */}
          <div className="md:w-64 lg:w-72 bg-gradient-to-b from-gray-50 to-white md:border-r border-gray-100 p-4 md:p-0">
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
                  <span className="text-base">{tab.icon}</span>
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
                <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-sm">
                  {tabs.find(t => t.id === activeTab)?.icon}
                </span>
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>

              {/* Divider */}
              <div className="w-16 h-0.5 bg-emerald-300 mb-6 rounded-full" />

              {contentMap[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
