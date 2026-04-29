import React, { useState } from "react";

const DonateSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  return (
    <>
      <section id="donate-section" className="relative py-16 md:py-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative top */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-16 h-px bg-amber-400/50" />
            <span className="text-amber-400 text-2xl">&#10022;</span>
            <span className="block w-16 h-px bg-amber-400/50" />
          </div>

          {/* Quranic / motivational heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-snug">
            মহান আল্লাহ তায়ালার সন্তুষ্টির নিয়তে
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-amber-300 mb-6">
            দান করুন
          </h3>

          {/* Motivational text */}
          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            <p className="text-emerald-100 text-base md:text-lg leading-relaxed">
              &laquo; যে ব্যক্তি আল্লাহর রাস্তায় একটি ছোট দানও করবে, আল্লাহ তা তার জন্য বহুগুণ বৃদ্ধি করবেন। &raquo;
            </p>
            <p className="text-emerald-200/90 text-base md:text-lg leading-relaxed">
              চিরস্থায়ী জাহান্নামগামী মানুষদের সত্যের পথ দেখানোর জন্য, ইসলামের আলো প্রতিটি ঘরে পৌঁছে দেওয়ার জন্য, গরিব-দুঃখী ও অসহায় মানুষের পাশে দাঁড়ানোর জন্য আপনার অণুতীৎ দানও হতে পারে অনেক বড় সাওয়াব।
            </p>
            <p className="text-emerald-200/90 text-base md:text-lg leading-relaxed">
              আল্লাহ তায়ালা বলেন &mdash; <span className="text-amber-200 font-medium">&laquo; তোমরা আল্লাহকে ঋণ দাও, উত্তম ঋণ। আল্লাহ তোমাদের জন্য তা বহুগুণ বাড়িয়ে দেবেন এবং তিনি তোমাদের ক্ষমা করবেন। &raquo;</span> <span className="text-white/60">(সূরা আল-হাদীদ: ১১)</span>
            </p>
            <p className="text-emerald-100 text-base md:text-lg leading-relaxed">
              আপনার দানের মাধ্যমে একটি পরিবার শিক্ষার আলো পেতে পারে, একটি শিশু কুরআন শিখতে পারে, একজন পথহারা মানুষ সিরাতুল মুস্তাকীম খুঁজে পেতে পারে।
            </p>
          </div>

          {/* CTA button */}
          <button
            onClick={() => setShowPopup(true)}
            className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg md:text-xl font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
          >
            এখনই দান করুন
          </button>

          {/* Trust note */}
          <p className="mt-6 text-emerald-300/70 text-sm">
            আপনার প্রতিটি দান সরাসরি শিক্ষা ও দাওয়াহ কার্যক্রমে ব্যয় হবে &mdash; আল্লাহই সর্বশ্রেষ্ঠ হিসাব গ্রহণকারী।
          </p>
        </div>
      </section>

      {/* Popup modal */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors text-xl"
            >
              &times;
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">&#10084;</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">দান করুন</h3>
              <p className="text-gray-500 text-sm mt-1">আল্লাহ আপনার দান কবুল করুন</p>
            </div>

            {/* Payment numbers */}
            <div className="space-y-3">
              {/* bKash */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-5 border border-pink-200">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">b</span>
                  </div>
                  <span className="text-base font-bold text-pink-600">বিকাশ</span>
                </div>
                <div className="bg-white rounded-xl py-3 px-4 border-2 border-dashed border-pink-300 flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-800 tracking-wider font-mono">01626947430</p>
                  <button
                    onClick={() => handleCopy("01626947430", "bkash")}
                    className="px-3 py-1.5 bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium rounded-lg transition-all duration-200 shrink-0"
                  >
                    {copied === "bkash" ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Nagad */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-5 border border-orange-200">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">N</span>
                  </div>
                  <span className="text-base font-bold text-orange-600">নগদ</span>
                </div>
                <div className="bg-white rounded-xl py-3 px-4 border-2 border-dashed border-orange-300 flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-800 tracking-wider font-mono">01626947430</p>
                  <button
                    onClick={() => handleCopy("01626947430", "nagad")}
                    className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-all duration-200 shrink-0"
                  >
                    {copied === "nagad" ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Rocket */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-5 border border-purple-200">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">R</span>
                  </div>
                  <span className="text-base font-bold text-purple-600">রকেট</span>
                </div>
                <div className="bg-white rounded-xl py-3 px-4 border-2 border-dashed border-purple-300 flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-800 tracking-wider font-mono">01626947430</p>
                  <button
                    onClick={() => handleCopy("01626947430", "rocket")}
                    className="px-3 py-1.5 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-lg transition-all duration-200 shrink-0"
                  >
                    {copied === "rocket" ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            {/* Motivational footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 italic leading-relaxed">
                &laquo; দান করার মাধ্যমে আপনি কেবল সম্পদ দিচ্ছেন না, বরং একটি অবিচ্ছেদ্য সম্পদ সঞ্চয় করছেন যা আখিরাতে আপনার কাজে আসবে। &raquo;
              </p>
              <p className="text-xs text-gray-400 mt-3">
                আল্লাহ তায়ালা আপনার দান কবুল করুন এবং আপনার জীবনে বরকত দান করুন। আমীন।
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonateSection;
