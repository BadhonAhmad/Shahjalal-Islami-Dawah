import React from "react";

const Membership = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 overflow-hidden border border-gray-100/80">
          {/* Top banner */}
          <div className="relative bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 px-8 py-8 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
            <div className="relative">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                সদস্য হন
              </h1>
              <p className="text-emerald-200 text-sm md:text-base">
                সত্যের পথে এগিয়ে আসুন, আল্লাহর দীনে অংশ নিন
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 space-y-6">
            {/* Ayah reference */}
            <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
              <p className="text-center text-base md:text-lg text-emerald-800 font-semibold leading-relaxed">
                &laquo; তোমাদের মধ্যে এমন একটি দল থাকা উচিত যারা কল্যাণের দিকে ডাকবে এবং নেক কাজের আদেশ দেবে ও খারাপ কাজ থেকে বারণ করবে। আর তারাই সফলকাম। &raquo;
              </p>
              <p className="text-center text-sm text-emerald-600 mt-2">
                — সূরা আলে ইমরান: ১০৪
              </p>
            </div>

            {/* Concise motivation */}
            <p className="text-center text-gray-600 leading-relaxed text-base md:text-lg">
              চিরস্থায়ী জাহান্নামগামী মানুষদেরকে ইসলামের দিকে আহবান করার এই মহান কাজে আল্লাহ তায়ালার নিকট সর্বাধিক প্রিয়।
              শাহজালাল ইসলামী দাওয়াহ সেন্টারের সহযোগী সদস্য হিসেবে দ্বীনের এই কাজে অংশগ্রহণ করতে নিচের ফর্মটি পূরণ করুন।
            </p>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://forms.gle/ffubEE29Mx3ag6n9A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-lg font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                ফর্ম পূরণ করুন
              </a>
              <p className="text-gray-400 text-sm mt-3">
                ফর্মটি Google Forms-এ রিডিরেক্ট হবে
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
