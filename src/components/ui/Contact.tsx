import React from 'react'

const Contact = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-5xl w-full text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact <span className="text-blue-500">Us</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Have questions, feedback, or suggestions? Reach out to us, and we’ll
          get back to you as soon as possible.
        </p>

        {/* Contact form & info */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center items-start space-y-6 text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You can also reach us directly through email or social media.
            </p>

            <div>
              <p className="text-gray-700 font-medium">Email:</p>
              <p className="text-gray-600">aiproject@gmail.com</p>
            </div>

            <div>
              <p className="text-gray-700 font-medium">Phone:</p>
              <p className="text-gray-600">+91 8125658595</p>
            </div>

            <div>
              <p className="text-gray-700 font-medium">Follow us:</p>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()}   AI Mock Interview Project.
          All rights reserved.
        </div>
      </div>
    </section>
  )
}

export default Contact