import React from 'react'
import Header from './header';

const About = () => {
  return (
   <section className="bg-white text-gray-800 min-h-screen flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-6xl w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/public/assets/img/logo/react.png" // <-- replace with your actual logo path
            alt="Technologue Logo"
            className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto object-contain"

          />
          <img
            src="/public/assets/img/logo/tailwindcss.png" // <-- replace with your actual logo path
            alt="Technologue Logo"
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain"
          />
          <img
            src="/public/assets/img/logo/firebase.png" // <-- replace with your actual logo path
            alt="Technologue Logo"
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain"
          />
        </div>

      
<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
  About <span className="text-blue-500">Technologies</span>
</h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Welcome to <strong>AI Mock Interview</strong> — an intelligent
          interview preparation platform powered by <strong>Gemini API</strong>.
          Our mission is to help students and professionals practice interviews
          in a realistic, AI-driven environment.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Section - Illustration */}
          <div className="flex justify-center">
            <img
              src="/assets/svg/logo.png" // can be replaced with any AI-related illustration
              alt="AI Interview Illustration"
              className="w-64 md:w-80 rounded-2xl shadow-lg border border-gray-100"
            />
          </div>

          {/* Right Section - Text */}
          <div className="text-left space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                💡 What We Do
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We provide an AI-powered mock interview experience that helps
                users improve communication, technical, and problem-solving
                skills. Our platform simulates real interview scenarios using
                the <strong>Gemini API</strong> for dynamic question generation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                ⚙️ Built With Modern Tech
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The project is built using <strong>React</strong> and{" "}
                <strong>TypeScript</strong> for a robust front end, styled with{" "}
                <strong>Tailwind CSS</strong> for a clean, responsive design.
                Authentication is managed by <strong>Clerk</strong>, while{" "}
                <strong>Firebase</strong> powers our backend and database. All
                routes are handled through <strong>React Router DOM</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                🚀 Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We aim to make interview preparation smarter and more
                personalized. With AI-driven insights, we help users understand
                their strengths and improve areas that matter most.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} Technologue — AI Mock Interview Project.
          All rights reserved.
        </div>
      </div>
    </section> 
  )
}

export default About;