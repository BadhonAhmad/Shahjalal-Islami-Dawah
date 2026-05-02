import React, { useEffect } from "react";
import icon_facebook from "../Assets/facebook.png";
import icon_youtube from "../Assets/youtube.png";
import icon_gmail from "../Assets/gmail.png";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="contact-page" className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 inline-block relative">
            যোগাযোগ
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-2 w-20 h-1 bg-emerald-500 rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Email contact card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 flex flex-col justify-center">
            <div className="text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <img src={icon_gmail} alt="Email" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">ইমেইলে যোগাযোগ করুন</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                যেকোনো প্রয়োজনে আমাদের ইমেইল করুন। আমরা শীঘ্রই আপনার বার্তার উত্তর দেব।
              </p>
              <a
                href="mailto:tupayelahamad811@gmail.com"
                className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                ইমেইল করুন
              </a>
              <p className="text-gray-500 text-sm break-all">
                tupayelahamad811@gmail.com
              </p>
            </div>

            {/* Social media */}
            <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-100">
              <a
                href="https://www.facebook.com/aioubd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <img src={icon_facebook} alt="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100086495283114"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <img src={icon_facebook} alt="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@ManaratusSunnah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <img src={icon_youtube} alt="YouTube" className="w-5 h-5" />
              </a>
              <a
                href="mailto:tupayelahamad811@gmail.com"
                className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <img src={icon_gmail} alt="Gmail" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Address info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-5">বিস্তারিত ঠিকানা</h3>

              <div className="space-y-5">
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">ঠিকানা</p>
                  <p className="text-gray-600 text-sm">শাহজালাল ইসলামী দাওয়াহ সেন্টার</p>
                  <p className="text-gray-600 text-sm">সিলেট বিভাগীয় নওমুসলিম মারকায</p>
                  <p className="text-gray-600 text-sm">বালুচর, নয়াবাজার, সিকান্দারমহল, সিলেট</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">যাতায়াতের নির্দেশনা</p>
                  <p className="text-gray-600 text-sm">১) টিলাগড় পয়েন্ট থেকে সিএনজি যোগে বালুচর পয়েন্টে এসে, সেখান থেকে অটোরিকশায় ১০ টাকায় নতুনবাজারের ১০০ গজ পূর্বে লিপু মার্কেটের ডানের গলি দিয়ে সেকান্দর মহলের নিচতলায়।</p>
                  <p className="text-gray-600 text-sm mt-1">২) সিলেট কৃষি বিশ্ববিদ্যালয়ের সেকেন্ড গেইট দিয়ে প্রবেশ করে শেখ সফিক উদ্দীন মসজিদ অতিক্রম করে বাম পাশের গলি দিয়ে সেকান্দর মহলের নিচতলায়।</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 text-sm">ইমেইল</p>
                  <p className="text-gray-600 text-sm">tupayelahamad811@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
