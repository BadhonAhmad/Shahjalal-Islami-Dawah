import React, { useState } from 'react';

const tabs = [
  { id: 'activity-1', label: 'শিক্ষা কার্যক্রম', icon: '📖' },
  { id: 'activity-2', label: 'দাওয়াহ কার্যক্রম', icon: '📢' },
  { id: 'activity-3', label: 'সামাজিক সেবা', icon: '🤝' },
  { id: 'activity-4', label: 'প্রশিক্ষণ', icon: '🎓' },
  { id: 'activity-5', label: 'মাসিক মাহফিল', icon: '🌙' },
  { id: 'activity-6', label: 'ইফতার মাহফিল ও ঈদ সামগ্রী', icon: '🍽️' },
  { id: 'activity-7', label: 'কুরবানি সবার জন্য', icon: '🐑' },
  { id: 'activity-8', label: 'অন্যান্য', icon: '✨' },
];

const contentMap = {
  'activity-1': (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>নওমুসলিম ভাইদের জন্য প্রাথমিক ইসলামি শিক্ষার ব্যবস্থা করা হয়। এর মধ্যে রয়েছে:</p>
      <ul className="list-disc list-inside space-y-2 ml-2">
        <li>কুরআন শিক্ষা — আরবি হরফ পরিচিতি থেকে শুরু করে সুন্দর তিলাওয়াত শিক্ষা</li>
        <li>নামাজ শিক্ষা — ওযু, নামাজের নিয়ম, সূরা মুখস্থ ও দৈনন্দিন আমল</li>
        <li>আকীদা শিক্ষা — তাওহীদ, রিসালাত, আখিরাত বিশ্বাসের মৌলিক বিষয়াবলি</li>
        <li>ফিকহ শিক্ষা — পবিত্রতা, সালাত, সিয়াম, যাকাত ও হজ্জের বিধান</li>
        <li>ইসলামি আদব — দৈনন্দিন জীবনের আদব, খাওয়া-দাওয়া, পোশাক ও আচরণের সুন্নাহ</li>
      </ul>
    </div>
  ),
  'activity-2': (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>সিলেট বিভাগে দাওয়াহ প্রচারের জন্য বিভিন্ন কার্যক্রম পরিচালিত হচ্ছে:</p>
      <ul className="list-disc list-inside space-y-2 ml-2">
        <li><strong>সরাসরি দাওয়াহ:</strong> সহযোগী দা'ঈ দল নিয়মিত বিভিন্ন এলাকায় গিয়ে মানুষের কাছে ইসলামের বার্তা পৌঁছে দেয়</li>
        <li><strong>অনলাইন দাওয়াহ:</strong> সোশ্যাল মিডিয়া, ইউটিউব ও ওয়েবসাইটের মাধ্যমে দাওয়াহ কনটেন্ট প্রচার</li>
        <li><strong>ইসলামি সেমিনার:</strong> নিয়মিত আলোচনা সভা ও সেমিনারের আয়োজন</li>
        <li><strong>নওমুসলিম কনভেনশন:</strong> নওমুসলিম ভাইদের জন্য বিশেষ সমাবেশ ও পুনর্মিলনী</li>
      </ul>
    </div>
  ),
  'activity-3': (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>নওমুসলিম ভাইদের সামগ্রিক উন্নয়নে বিভিন্ন সামাজিক সেবামূলক কার্যক্রম পরিচালিত হয়:</p>
      <ul className="list-disc list-inside space-y-2 ml-2">
        <li><strong>পুনর্বাসন:</strong> নওমুসলিম পরিবারের আর্থিক ও সামাজিক পুনর্বাসনে সহায়তা</li>
        <li><strong>চিকিৎসা সহায়তা:</strong> অসহায় নওমুসলিম ভাইদের চিকিৎসায় আর্থিক সাহায্য</li>
        <li><strong>শীতবস্ত্র বিতরণ:</strong> শীতকালে গরিব নওমুসলিম পরিবারের মাঝে কম্বল ও শীতবস্ত্র বিতরণ</li>
        <li><strong>আপদকালীন সহায়তা:</strong> বন্যা, ঝড় বা অন্যান্য দুর্যোগে ক্ষতিগ্রস্তদের পাশে দাঁড়ানো</li>
        <li><strong>কর্মসংস্থান:</strong> স্বাবলম্বী হওয়ার জন্য বিভিন্ন পেশাগত প্রশিক্ষণ ও সহায়তা</li>
      </ul>
    </div>
  ),
  'activity-4': (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>দা'ঈ ও সহযোগী সদস্যদের জন্য নিয়মিত প্রশিক্ষণ কার্যক্রম আয়োজন করা হয়:</p>
      <ul className="list-disc list-inside space-y-2 ml-2">
        <li><strong>দাওয়াহ প্রশিক্ষণ:</strong> কুরআন ও হাদীসের আলোকে দাওয়াহর পদ্ধতি শিক্ষা</li>
        <li><strong>হিকমাহ প্রশিক্ষণ:</strong> জ্ঞান ও প্রজ্ঞার সাথে মানুষের কাছে দাওয়াহ পৌঁছানোর কৌশল</li>
        <li><strong>বয়ান প্রশিক্ষণ:</strong> ইসলামি আলোচনা ও বয়ান দেওয়ার দক্ষতা বৃদ্ধি</li>
        <li><strong>নওমুসলিম মেন্টরশিপ:</strong> নওমুসলিম ভাইদের দীর্ঘমেয়াদী মেন্টর হিসেবে গাইড করার প্রশিক্ষণ</li>
      </ul>
    </div>
  ),
  'activity-5': (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>প্রতি মাসে একটি ইসলামি মাহফিলের আয়োজন করা হয় যেখানে:</p>
      <ul className="list-disc list-inside space-y-2 ml-2">
        <li>স্থানীয় ও জাতীয় পর্যায়ের আলেম-উলামাগণ ইসলামি আলোচনা পেশ করেন</li>
        <li>নওমুসলিম ভাইদের জন্য বিশেষ দাওয়াহ সেশন অনুষ্ঠিত হয়</li>
        <li>প্রশ্নোত্তর পর্বের মাধ্যমে সাধারণ মানুষের দ্বীনি প্রশ্নের উত্তর দেওয়া হয়</li>
        <li>নওমুসলিম ভাইদের অভিজ্ঞতা ও ইসলাম গ্রহণের গল্প শেয়ার করা হয়</li>
        <li>আগামী মাসের দাওয়াহ পরিকল্পনা নির্ধারণ করা হয়</li>
      </ul>
    </div>
  ),
  'activity-6': (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>পবিত্র রমজান মাসে ব্যাপক ইফতার মাহফিল ও ঈদ সামগ্রী বিতরণের আয়োজন করা হয়:</p>
      <ul className="list-disc list-inside space-y-2 ml-2">
        <li><strong>ইফতার মাহফিল:</strong> নওমুসলিম ভাইদের জন্য বিশেষ ইফতার মাহফিলের আয়োজন করা হয়, যেখানে তারা একসাথে ইফতার করেন এবং তারাবীহ নামাজে অংশগ্রহণ করেন</li>
        <li><strong>ইফতার সামগ্রী বিতরণ:</strong> গরিব-দুঃখী ও অসহায় পরিবারের মাঝে ইফতার সামগ্রী বিতরণ করা হয়, যাতে কেউ ইফতারে অভুক্ত না থাকে</li>
        <li><strong>রমজান দাওয়াহ ক্যাম্পেইন:</strong> রমজান মাসে বিশেষ দাওয়াহ ক্যাম্পেইন পরিচালনা করা হয়, ইফতারের পর দ্বীনি আলোচনার আয়োজন করা হয়</li>
        <li><strong>ঈদ সামগ্রী বিতরণ:</strong> ঈদুল ফিতর ও ঈদুল আযহার সময় গরিব-দুঃখী নওমুসলিম পরিবারের মাঝে নতুন জামাকাপড়, খাদ্যসামগ্রী ও ঈদের উপহার বিতরণ করা হয়</li>
        <li><strong>ঈদ মিলাদুন্নবী (সা.):</strong> নওমুসলিম ভাইদের নিয়ে বিশেষ ঈদের আনন্দ উদযাপন ও দ্বীনি মাহফিলের আয়োজন করা হয়</li>
      </ul>
    </div>
  ),
  'activity-7': (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>প্রতি বছর ঈদুল আযহায় &laquo;কুরবানি সবার জন্য&raquo; শীর্ষক বিশেষ কার্যক্রমের আয়োজন করা হয়:</p>
      <ul className="list-disc list-inside space-y-2 ml-2">
        <li><strong>কুরবানির পশু বিতরণ:</strong> অসহায় ও গরিব নওমুসলিম পরিবারের মাঝে কুরবানির পশু বিতরণ করা হয়, যাতে তারাও কুরবানির সুযোগ পান</li>
        <li><strong>কুরবানির মাংস বিতরণ:</strong> কুরবানির মাংস পাড়া-মহল্লার গরিব-দুঃখীদের মাঝে সুষম বণ্টন করা হয়</li>
        <li><strong>কুরবানির নিয়ম শিক্ষা:</strong> নওমুসলিম ভাইদের কুরবানির বিধান, নিয়ম-কানুন ও সুন্নাহ সম্পর্কে বিস্তারিত শিক্ষা প্রদান করা হয়</li>
        <li><strong>যৌথ কুরবানি:</strong> নওমুসলিম ভাইদের নিয়ে যৌথভাবে কুরবানি সম্পন্ন করা হয়, যাতে তারা প্রথমবার কুরবানির আনন্দ অনুভব করতে পারেন</li>
        <li><strong>ঈদুল আযহার মাহফিল:</strong> কুরবানির পর বিশেষ দ্বীনি মাহফিলের আয়োজন করা হয়, যেখানে কুরবানির তাৎপর্য ও ইবরাহিম (আ.)-এর আত্মত্যাগের গল্প আলোচনা করা হয়</li>
      </ul>
    </div>
  ),
  'activity-8': (
    <div className="leading-relaxed text-gray-700 text-base md:text-lg space-y-4">
      <p>এছাড়াও বিভিন্ন কার্যক্রম পরিচালিত হয়ে থাকে:</p>
      <ul className="list-disc list-inside space-y-2 ml-2">
        <li><strong>গ্রীষ্মকালে শরবত বিতরণ:</strong> তপ্ত গ্রীষ্মে রাস্তাঘাটে ও মানুষের মাঝে শীতল শরবত বিতরণের মাধ্যমে সেবা প্রদান করা হয়</li>
        <li><strong>শীতবস্ত্র বিতরণ:</strong> শীতকালে গরিব নওমুসলিম পরিবারের মাঝে কম্বল ও শীতবস্ত্র বিতরণ করা হয়</li>
        <li><strong>কুরআন বিতরণ:</strong> নওমুসলিম ভাইদের মাঝে বাংলা অনুবাদসহ কুরআন বিতরণ করা হয়</li>
        <li><strong>ইসলামি সাহিত্য:</strong> বই, পুস্তিকা ও প্রচারপত্র তৈরি ও বিতরণ করা হয়</li>
        <li><strong>নওমুসলিম সম্মাননা:</strong> ইসলাম গ্রহণকারী ভাইদের সম্মাননা ও উপহার প্রদান করা হয়</li>
        <li><strong>পরামর্শ সেবা:</strong> দ্বীনি ও সামাজিক বিষয়ে নওমুসলিম ভাইদের পরামর্শ সেবা প্রদান করা হয়</li>
      </ul>
    </div>
  ),
};

const OurActivities = () => {
  const [activeTab, setActiveTab] = useState('activity-1');

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            আমাদের কাজ দেখুন
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            আমাদের কার্যক্রম
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-400 rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl shadow-gray-200/60 overflow-hidden border border-gray-100/80">
          {/* Sidebar tabs */}
          <div className="md:w-64 lg:w-72 bg-gradient-to-b from-indigo-50/50 to-white md:border-r border-indigo-100/50 p-4 md:p-0">
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
                  <span className="text-base">{tab.icon}</span>
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <span className="hidden md:block absolute left-0 top-3 bottom-3 w-[3px] bg-indigo-500 rounded-r-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 p-6 md:p-10 min-h-[320px] relative">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-3xl pointer-events-none" />

            <div className="relative">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-sm">
                  {tabs.find(t => t.id === activeTab)?.icon}
                </span>
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>

              <div className="w-16 h-0.5 bg-indigo-300 mb-6 rounded-full" />

              {contentMap[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurActivities;
