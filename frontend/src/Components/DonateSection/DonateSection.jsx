import React, { useState } from "react";

const DonateSection = () => {
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedMobile, setCopiedMobile] = useState(false);

  const handleCopy = (text, setCopied) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <section id="donate-section" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
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
          <p className="text-teal-100 text-base md:text-lg leading-relaxed">
            &laquo; যে ব্যক্তি আল্লাহর রাস্তায় একটি ছোট দানও করবে, আল্লাহ তা তার জন্য বহুগুণ বৃদ্ধি করবেন। &raquo;
          </p>
          <p className="text-teal-200/90 text-base md:text-lg leading-relaxed">
            চিরস্থায়ী জাহান্নামগামী মানুষদের সত্যের পথ দেখানোর জন্য, ইসলামের আলো প্রতিটি ঘরে পৌঁছে দেওয়ার জন্য, গরিব-দুঃখী ও অসহায় মানুষের পাশে দাঁড়ানোর জন্য আপনার অণুতীৎ দানও হতে পারে অনেক বড় সাওয়াব।
          </p>
          <p className="text-teal-200/90 text-base md:text-lg leading-relaxed">
            আল্লাহ তায়ালা বলেন &mdash; <span className="text-amber-200 font-medium">&laquo; তোমরা আল্লাহকে ঋণ দাও, উত্তম ঋণ। আল্লাহ তোমাদের জন্য তা বহুগুণ বাড়িয়ে দেবেন এবং তিনি তোমাদের ক্ষমা করবেন। &raquo;</span> <span className="text-white/60">(সূরা আল-হাদীদ: ১১)</span>
          </p>
        </div>

        {/* Payment info */}
        <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-6 md:p-8 border border-teal-200 text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">দান পাঠানোর তথ্য</h3>

          {/* Mobile banking */}
          <div className="mb-8">
            <p className="text-center text-sm text-gray-500 mb-3">বিকাশ / নগদ / রকেট</p>
            <div className="bg-white rounded-xl py-4 px-5 border-2 border-dashed border-teal-300 flex items-center justify-between">
              <p className="text-2xl font-bold text-gray-800 tracking-wider font-mono">01626947430</p>
              <button
                onClick={() => handleCopy("01626947430", setCopiedMobile)}
                className="px-4 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shrink-0"
              >
                {copiedMobile ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Bank account */}
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Islami Bank</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><span className="font-semibold">Account Holder Name:</span> TUFAYEL AHMED</p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-base md:text-lg font-mono tracking-wide">
                  <span className="font-semibold font-sans">Account Number:</span> 20507770232413321
                </p>
                <button
                  onClick={() => handleCopy("20507770232413321", setCopiedBank)}
                  className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium rounded-lg transition-all duration-200 shrink-0"
                >
                  {copiedBank ? "Copied!" : "Copy"}
                </button>
              </div>
              <p><span className="font-semibold">Branch:</span> Laldighir par</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
