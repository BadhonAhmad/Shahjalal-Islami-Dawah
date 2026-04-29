import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-3">
          <p className="text-sm">
            Copyright &copy; 2024 <span className="text-white font-semibold">শাহজালাল ইসলামী দাওয়াহ সেন্টার</span> - all rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="/terms-and-conditions" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              Terms and conditions
            </a>
            <span className="text-gray-600">|</span>
            <a href="/privacy-policy" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
