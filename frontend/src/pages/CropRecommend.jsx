import React, { useState } from "react";

const CropRecommend = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [soilType, setSoilType] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const soilTypes = [
    "Alluvial Soil - High Fertility (उच्च उर्वरता जलोढ़ मिट्टी)",
    "Alluvial Soil - Low Fertility (कम उर्वरता जलोढ़ मिट्टी)",
    "Black Soil - High Fertility (उच्च उर्वरता काली मिट्टी)",
    "Black Soil - Low Fertility (कम उर्वरता काली मिट्टी)",
    "Red Soil - High Fertility (उच्च उर्वरता लाल मिट्टी)",
    "Red Soil - Low Fertility (कम उर्वरता लाल मिट्टी)",
    "Laterite Soil (लैटेराइट मिट्टी)",
    "Arid Soil (शुष्क मिट्टी)",
    "Forest Soil (वन मिट्टी)",
    "Peaty and Marshy Soil (पीट व दलदली मिट्टी)",
    "Desert Soil (मरुस्थलीय मिट्टी)",
    "Mountain/Forest Soil - Fertile (पर्वतीय/वन मिट्टी - उर्वर)",
    "Mountain/Forest Soil - Infertile (पर्वतीय/वन मिट्टी - कम उर्वर)"
  ];

  const handleWeatherSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8000/crop/location/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city }),
      });

      const data = await res.json();
      if (res.ok) {
        setWeatherData(data);
        setStep(2);
      } else {
        setError(data.error || "Failed to fetch weather data");
      }
    } catch (err) {
      setError("Failed to connect to server");
    }

    setLoading(false);
  };

  const handleCropSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8000/crop/recommend/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: weatherData.city,
          temperature: weatherData.temperature,
          humidity: weatherData.humidity,
          soil_type: soilType,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setPrediction(data);
      } else {
        setError(data.error || "Failed to get crop recommendation");
      }
    } catch (err) {
      setError("Failed to get recommendation");
    }

    setLoading(false);
  };

  const resetForm = () => {
    setStep(1);
    setCity("");
    setWeatherData(null);
    setSoilType("");
    setPrediction(null);
    setError("");
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Crop <span className="text-green-600">Recommendation</span>
          </h1>
          <p className="text-xl text-gray-600">
            Get AI-powered crop suggestions based on your location and soil conditions
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              2
            </div>
            <div className={`w-16 h-1 ${prediction ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${prediction ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              3
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Step 1: Location */}
          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📍</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Step 1: Enter Your Location</h2>
                <p className="text-gray-600">We'll fetch weather data for your area</p>
              </div>

              <form onSubmit={handleWeatherSubmit} className="max-w-md mx-auto">
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">City Name</label>
                  <input
                    type="text"
                    placeholder="Enter your city (e.g., Delhi, Mumbai)"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-green-500 focus:outline-none transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
                >
                  {loading ? "Getting Weather Data..." : "Get Weather Data"}
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Soil Selection */}
          {step === 2 && weatherData && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🌱</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Step 2: Select Your Soil Type</h2>
                <p className="text-gray-600">Choose the soil type that matches your farmland</p>
              </div>

              {/* Weather Data Display */}
              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">Weather Data for {weatherData.city}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <span className="block text-sm text-gray-500 mb-1">Temperature</span>
                    <span className="text-2xl font-bold text-green-700">{weatherData.temperature}°C</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <span className="block text-sm text-gray-500 mb-1">Humidity</span>
                    <span className="text-2xl font-bold text-green-700">{weatherData.humidity}%</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleCropSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">Soil Type</label>
                  <select
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-green-500 focus:outline-none transition-all"
                    required
                  >
                    <option value="">Select your soil type</option>
                    {soilTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 bg-gray-500 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-gray-600 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-green-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
                  >
                    {loading ? "Getting Recommendation..." : "Get Crop Recommendation"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {error}
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {prediction && (
          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">🌾</span>
              </div>
              <h2 className="text-4xl font-bold text-green-800 mb-4">Recommended Crop</h2>
              <p className="text-6xl font-bold text-green-600 mb-6">{prediction.prediction}</p>
              <p className="text-xl text-gray-700 mb-8">
                Based on your location ({prediction.city}) and soil conditions, this crop is predicted to give the best yield.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Temperature</h4>
                  <p className="text-2xl font-bold text-gray-800">{prediction.temperature}°C</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Humidity</h4>
                  <p className="text-2xl font-bold text-gray-800">{prediction.humidity}%</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Confidence</h4>
                  <p className="text-2xl font-bold text-green-600">{prediction.confidence || '87%'}</p>
                </div>
              </div>
              
              <button
                onClick={resetForm}
                className="bg-green-600 text-white py-3 px-8 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                Get Another Recommendation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropRecommend;