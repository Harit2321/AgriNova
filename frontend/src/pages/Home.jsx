import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-800/70 to-green-700/50"></div>

        <div className="relative z-10 text-center py-28 md:py-40 px-6 text-white">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
            AI-Powered Agriculture
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-white">Smart Agriculture</span>
            <br />
            <span className="text-yellow-300">Advisor</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mx-auto my-8 rounded-full"></div>
          <p className="text-xl md:text-2xl mt-6 max-w-4xl mx-auto text-green-100 leading-relaxed">
            Get personalized crop recommendations based on your soil conditions, climate data, and location. 
            Maximize your harvest potential with AI-driven insights.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/crop-recommend"
              className="group bg-white text-green-800 py-4 px-10 rounded-2xl text-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </Link>
            <Link
              to="/dashboard"
              className="bg-transparent text-white py-4 px-10 rounded-2xl text-lg font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Explore Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-green-600">AgriNova</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with agricultural expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">AI-Powered Insights</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced machine learning algorithms analyze soil, weather, and market data to provide personalized recommendations.
            </p>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-time Data</h3>
            <p className="text-gray-600 leading-relaxed">
              Access live weather forecasts, market prices, and disease detection results instantly for informed decisions.
            </p>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Secure & Reliable</h3>
            <p className="text-gray-600 leading-relaxed">
              Enterprise-grade security ensures your data is protected while maintaining 99.9% uptime for critical operations.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-green-600 rounded-3xl shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted by Farmers Worldwide</h2>
          <p className="text-xl text-green-100">Join thousands of successful farmers who have transformed their operations</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center px-8">
          <div className="bg-white/20 p-6 rounded-2xl border border-white/30">
            <h3 className="text-5xl font-bold text-white mb-2">500+</h3>
            <p className="text-lg text-green-100 font-medium">Crop Varieties</p>
            <p className="text-sm text-green-200 mt-2">Comprehensive database</p>
          </div>
          <div className="bg-white/20 p-6 rounded-2xl border border-white/30">
            <h3 className="text-5xl font-bold text-white mb-2">95%</h3>
            <p className="text-lg text-green-100 font-medium">Accuracy Rate</p>
            <p className="text-sm text-green-200 mt-2">Proven results</p>
          </div>
          <div className="bg-white/20 p-6 rounded-2xl border border-white/30">
            <h3 className="text-5xl font-bold text-white mb-2">10K+</h3>
            <p className="text-lg text-green-100 font-medium">Happy Farmers</p>
            <p className="text-sm text-green-200 mt-2">Growing community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;