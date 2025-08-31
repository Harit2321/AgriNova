import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-2 rounded-full text-sm font-semibold text-green-700 mb-6 border border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Get In Touch
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Let's <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Connect</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Have questions about our AI-powered agriculture platform? We're here to help you succeed in your farming journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of agricultural experts and AI specialists is ready to assist you with any questions or support you need.
            </p>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600 text-lg">contact@agrinova.com</p>
                  <p className="text-sm text-green-600">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600 text-lg">+1 (555) 123-4567</p>
                  <p className="text-sm text-blue-600">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600 text-lg">123 Agriculture St, Farm City, FC 12345</p>
                  <p className="text-sm text-purple-600">Visit our innovation center</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose AgriNova?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                AI-powered crop recommendations
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Real-time weather insights
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Disease detection technology
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Market price tracking
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-green-100">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Message</h2>
            <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name..."
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address..."
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">Message</label>
              <textarea
                name="message"
                placeholder="Tell us how we can help you..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-8 rounded-2xl text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                Send Message
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;