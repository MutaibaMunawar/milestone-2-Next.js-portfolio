'use client'
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="flex flex-col lg:flex-row min-h-screen bg-black">
      {/* Left (Text) Section */}
      <div className="flex flex-col justify-center items-center text-white w-full lg:w-1/2 px-8 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center transition-all hover:text-orange-400">
          About Me
        </h1>
        <p className="text-lg text-center mb-6">
          Hello I&apos;m a passionate and dedicated individual currently
          pursuing a Software Engineering diploma from Aptech Institute&apos;
          alongside learning Web Development through GIAIC. I come from a
          Commerce background and completed my second year in this field&apos;
          which sparked my interest in technology and development.
        </p>

        {/* Contact Info */}
        <div className="text-center">
          <p className="text-lg mb-4">Feel free to contact me at:</p>
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-x-4 lg:space-y-0">
            {/* Email Link */}
            <Link href="mailto:mutaibamunawar@gmail.com">
              <div className="text-[#e3874f] hover:underline">
                mutaibamunawar@gmail.com
              </div>
            </Link>
            {/* Contact Number Link */}
            <Link href="tel:+92 311 0776644">
              <div className="text-[#e3874f] hover:underline">
                +92 311 0776644
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Right (Image) Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src="/about.jpeg"
          alt="Your Image"
          width={350}   
          height={350}  
          className="mx-auto lg:ml-16 lg:pt-[60px] rounded-lg" 
        />
      </div>
    </div>
  );
}
