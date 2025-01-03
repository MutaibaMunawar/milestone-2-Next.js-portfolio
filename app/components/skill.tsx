import React from 'react';

const Skill = () => {
  return (
    <div id="skill" className="bg-black text-white min-h-screen flex flex-col items-center py-10 px-6 pt-[120px]">
      <h1 className="text-4xl font-bold mb-12 hover:text-orange-400">My Skills</h1>

      {/* Skill 1 - HTML */}
      <div className="w-full max-w-3xl mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">HTML</span>
          <span className="text-lg">100%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-4">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Skill 2 - CSS */}
      <div className="w-full max-w-3xl mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">CSS</span>
          <span className="text-lg">80%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-4">
          <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
        </div>
      </div>

      {/* Skill 3 - Next.js */}
      <div className="w-full max-w-3xl mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">Next.js</span>
          <span className="text-lg">70%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-4">
          <div className="bg-orange-500 h-4 rounded-full" style={{ width: '70%' }}></div>
        </div>
      </div>

      {/* Skill 4 - JavaScript/TypeScript */}
      <div className="w-full max-w-3xl mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">JavaScript / TypeScript</span>
          <span className="text-lg">75%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-4">
          <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>

      {/* Skill 5 - MS Office */}
      <div className="w-full max-w-3xl mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">MS Office</span>
          <span className="text-lg">100%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-4">
          <div className="bg-purple-500 h-4 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
