import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    Welcome to <span className="text-green-600">AgriNova</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Your smart farming companion. Select a service below to get started with data-driven agriculture.
                </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Crop Recommendation */}
                <Link 
                    to="/crop-recommend" 
                    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-200"
                >
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                        <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Crop Recommendation</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Get AI-powered crop suggestions based on your soil conditions, weather data, and location for optimal yields.
                    </p>
                </Link>

                {/* Disease Detection */}
                <Link 
                    to="/plant-disease" 
                    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200"
                >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                        <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Disease Detection</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Upload plant images to instantly identify diseases and get treatment recommendations using computer vision.
                    </p>
                </Link>

                {/* Weather Forecast */}
                <Link 
                    to="/weather-forecast" 
                    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-200"
                >
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                        <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Weather Forecast</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Access real-time weather data and forecasts to plan your farming activities and protect your crops.
                    </p>
                </Link>

                {/* Market Prices */}
                <Link 
                    to="/market-prices" 
                    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-200"
                >
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                        <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Market Prices</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Track live commodity prices across different markets to make informed selling decisions and maximize profits.
                    </p>
                </Link>
            </div>

            {/* Stats Section */}
            <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-12 text-white">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">AgriNova Impact</h2>
                    <p className="text-xl text-green-100">Transforming agriculture with technology</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-4xl font-bold mb-2">500+</h3>
                        <p className="text-lg text-green-100">Crop Varieties</p>
                    </div>
                    <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-4xl font-bold mb-2">95%</h3>
                        <p className="text-lg text-green-100">Accuracy Rate</p>
                    </div>
                    <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-4xl font-bold mb-2">10K+</h3>
                        <p className="text-lg text-green-100">Happy Farmers</p>
                    </div>
                    <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-4xl font-bold mb-2">24/7</h3>
                        <p className="text-lg text-green-100">Support Available</p>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Quick Actions</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                        to="/crop-recommend" 
                        className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300"
                    >
                        Get Crop Recommendation
                    </Link>
                    <Link 
                        to="/weather-forecast" 
                        className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Check Weather
                    </Link>
                    <Link 
                        to="/market-prices" 
                        className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
                    >
                        View Market Prices
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;