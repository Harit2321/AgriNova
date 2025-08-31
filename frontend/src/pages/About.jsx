import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-green-600">AgriNova</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering farmers with AI-driven agricultural solutions for a sustainable and profitable future
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              AgriNova is dedicated to revolutionizing agriculture through cutting-edge technology. 
              We provide farmers with intelligent tools to make data-driven decisions that increase 
              crop yields and promote sustainable farming practices.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our platform combines weather data, soil analysis, and machine learning to deliver 
              personalized recommendations for crop selection, disease detection, and market insights.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-2xl mr-4">🤖</span>
                <span className="text-gray-700">AI-powered crop recommendations</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">🌤️</span>
                <span className="text-gray-700">Real-time weather forecasting</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">🔬</span>
                <span className="text-gray-700">Plant disease detection</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">📈</span>
                <span className="text-gray-700">Market price tracking</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">⚡</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600">Built with modern technologies for reliability and performance</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h4 className="font-semibold text-gray-800">React.js</h4>
              <p className="text-sm text-gray-600">Frontend</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐍</span>
              </div>
              <h4 className="font-semibold text-gray-800">Django</h4>
              <p className="text-sm text-gray-600">Backend</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="font-semibold text-gray-800">AI/ML</h4>
              <p className="text-sm text-gray-600">Intelligence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h4 className="font-semibold text-gray-800">Cloud APIs</h4>
              <p className="text-sm text-gray-600">Data Sources</p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🌍</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Since our launch, AgriNova has helped thousands of farmers increase their crop yields 
              and adopt sustainable agriculture practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25%</div>
              <p className="text-green-100">Average Yield Increase</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <p className="text-green-100">Farmers Helped</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-green-100">Accuracy Rate</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">👥</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A passionate team of agricultural experts, data scientists, and software engineers 
            working together to transform farming through technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Agricultural Experts</h3>
              <p className="text-gray-600">Deep knowledge of farming practices and crop science</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Data Scientists</h3>
              <p className="text-gray-600">AI and machine learning specialists for smart predictions</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Software Engineers</h3>
              <p className="text-gray-600">Building robust and scalable technology solutions</p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gray-50 p-12 rounded-2xl text-center">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🚀</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To create a world where every farmer has access to intelligent, data-driven tools that 
            maximize productivity while preserving our planet's resources. We envision sustainable 
            agriculture powered by technology, ensuring food security for future generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;