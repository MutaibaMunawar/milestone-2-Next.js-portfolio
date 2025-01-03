import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left div (content) */}
      <div className="w-full md:w-1/2 bg-stone-800 text-white p-8 flex items-center justify-center">
        <div>
          <p>
            Hi{' '}
            <span className="text-[#e3874f] font-bold text-[20px] font-sans italic hover:not-italic">
              There
            </span>
          </p>
          <h1 className="text-3xl font-bold text-white hover:text-[#e3874f]">
            <span>I&apos;M A </span>
            <span className="typing">Web Designer</span>
          </h1>
          <p className="mt-4">
            I&apos;m a passionate web Designer with expertise in HTML&apos; CSS&apos; and JavaScript. Currently&apos; I&apos;m mastering Next.js to build dynamic and responsive web applications. I love turning ideas into interactive&apos; user-friendly websites. Whether it’s crafting clean&apos; pixel-perfect designs or optimizing performance&apos; I’m ready to bring your digital projects to life. Let’s create something amazing together!
          </p>
          <div className="flex gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/mutaiba-munawar-hussain-29750630b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-[#e3874f] transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/mutaibamunawar"
              className="px-6 py-3 text-lg font-semibold text-white bg-[#e3874f] rounded-lg shadow-md hover:bg-orange-500 transition duration-300"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>

      {/* Right div (image) */}
      <div className="w-full md:w-1/2 bg-stone-800">
        <Image
          src="/home_img.png"
          alt="home img"
          width={1000}
          height={1000}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Page;
