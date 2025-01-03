'use client'
import Link from 'next/link'

export default function Project() {
  return (
    <div id="portfolio" className="bg-black text-white py-12 px-4 lg:px-16 pt-[100px]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 hover:text-orange-400">My Projects</h1>
        <p className="text-lg mb-8">Check out some of the projects I have worked on:</p>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Project 1 - Fitness Club */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Fitness Club</h2>
            <p className="text-sm mb-4">This is an assignment I completed using Next.js.</p>
            <Link href="https://2nd-assignment-next-js-smoky.vercel.app/" target="_blank">
              <div className="text-orange-500 hover:underline">View Project</div>
            </Link>
          </div>

          {/* Project 2 - Interior Design */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Interior Design</h2>
            <p className="text-sm mb-4">This is an assignment I completed using Next.js.</p>
            <Link href="https://3rd-assignment-next-js-psi.vercel.app/" target="_blank">
              <div className="text-orange-500 hover:underline">View Project</div>
            </Link>
          </div>

          {/* Project 3 - Hackathon Next.js */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Hackathon Next.js</h2>
            <p className="text-sm mb-4">This is a project I worked on during a Hackathon using Next.js for rapid development.</p>
            <Link href="https://figma-hackthone-gce3.vercel.app/" target="_blank">
              <div className="text-orange-500 hover:underline">View Project</div>
            </Link>
          </div>

          {/* Project 4 - HTML Portfolio */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">HTML Portfolio</h2>
            <p className="text-sm mb-4">This is a simple HTML-based portfolio that showcases my skills and projects.</p>
            <Link href="https://mutaiba-portfolio.netlify.app" target="_blank">
              <div className="text-orange-500 hover:underline">View Project</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
