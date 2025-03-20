import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
        
        <p className="text-gray-600 mb-4">
          Hi there! I'm a passionate web and app developer with a deep interest in AI and technology.
          I am a Computer Science student currently in Class 9, striving to be a class topper. 
          I love working on creative projects that make people's lives easier and more exciting.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">My Behavior</h2>
        <p className="text-gray-600 mb-4">
          Straightforward and talkative, I keep things real. I enjoy meaningful conversations and 
          love being part of tech communities. My communication style is forward-thinking, direct, and engaging.
          I am also incredibly loyal and tend to overthink things a lot.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Family & Personal Life</h2>
        <p className="text-gray-600 mb-4">
          I come from a supportive family that encourages my ambitions. 
          Balancing personal and professional growth is key to my journey.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Essential Things</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Founder of 'Mountain Driftz' - a Nepali clothing brand.</li>
          <li>Developed multiple websites, including my portfolio and school website.</li>
          <li>Freelancer working under the name 'Aizivora' for web, UI/UX, and video editing.</li>
          <li>Passionate about building tech communities and launching innovative apps.</li>
          <li>Currently working on a blog website for tech news and fast services.</li>
          <li>Total Earnings: 20K</li>
        </ul>
      </div>
    </div>
  );
}

export default About;