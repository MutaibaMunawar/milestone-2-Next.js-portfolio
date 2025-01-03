"use client";

export default function Footer() {
  return (
    <footer className="bg-stone-700 text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <p>&copy; 2025 Mutaiba Munawar. All rights reserved.</p>
        </div>

        <div className="flex justify-center space-x-6">
          {/* Social Media Links */}

          <a
            href="https://github.com/mutaibamunawar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#e3874f]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mutaiba-munawar-hussain-29750630b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#e3874f]"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-4 text-sm">
          <p>Designed and developed by Mutaiba Munawar</p>
        </div>
      </div>
    </footer>
  );
}
