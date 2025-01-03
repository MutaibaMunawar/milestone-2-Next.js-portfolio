'use client'
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="flex h-screen bg-black">
      {/* Image Section */}
      <div className="relative w-1/2">
        <Image
          src="/about.jpeg"
          alt="Your Image"
          width={450}
          height={300}
          className="pl-[120px] pt-[60px]"
        />
      </div>

      {/* About Section */}
      <div className="flex flex-col justify-center items-center text-white w-1/2 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center transition-all hover:text-orange-400">
          About Me
        </h1>
        <p className="text-lg text-center mb-6">
          Hello I&apos;m a passionate and dedicated individual currently
          pursuing a Software Engineering diploma from Aptech Institute&apos;
          alongside learning Web Development through GIAIC. I come from a
          Commerce background and completed my second year in this field&apos;
          which sparked my interest in technology and development
        </p>

        {/* Contact Info */}
        <div className="text-center">
          <p className="text-lg">Feel free to contact me at:</p>
          <div className="flex justify-center items-center space-x-4">
            <Link href="mailto:mutaibamunawar@gmail.com">
              <div className="text-[#e3874f] hover:underline">
                mutaibamunawar@gmail.com
              </div>
            </Link>
            <span className="text-white">|</span>
            <Link href="tel:+92 311 0776644">
              <div className="text-[#e3874f] hover:underline">
                +92 311 0776644
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
