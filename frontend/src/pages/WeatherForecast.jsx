import React, { useState } from "react";

const WeatherForecast = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setWeather(null);

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/weather/weather-forecast/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ city: city.trim() }),
      });

      const data = await res.json();
      
      if (res.ok) {
        setWeather(data);
      } else {
        setError(data.error || "Unable to fetch weather");
      }
    } catch (err) {
      setError("Failed to fetch weather data. Check if backend is running.");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Weather <span className="text-blue-600">Forecast</span>
          </h1>
          <p className="text-xl text-gray-600">
            Get real-time weather information for any city worldwide
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Input Section */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🌤️</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Check Weather</h2>
            <p className="text-gray-600">Enter a city name to get current weather conditions</p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">City Name</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city name (e.g., Delhi, Mumbai)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Getting Weather..." : "Get Weather"}
            </button>
          </form>

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6">
              <div className="flex items-center justify-center">
                <span className="text-xl mr-2">⚠️</span>
                <p className="font-medium">{error}</p>
              </div>
            </div>
          )}

          {/* Weather Results */}
          {weather && (
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-blue-800 mb-6">{weather.city}</h2>
                
                <div className="flex items-center justify-center mb-8">
                  <div className="mr-6">
                    <img
                      src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                      alt="Weather icon"
                      className="w-24 h-24"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-6xl font-bold text-gray-800 mb-2">
                      {Math.round(weather.temperature)}°C
                    </p>
                    <p className="text-xl text-gray-600 capitalize">
                      {weather.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-3xl mr-3">💧</span>
                      <h3 className="text-lg font-semibold text-gray-700">Humidity</h3>
                    </div>
                    <p className="text-3xl font-bold text-blue-600">{weather.humidity}%</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-3xl mr-3">🌡️</span>
                      <h3 className="text-lg font-semibold text-gray-700">Feels Like</h3>
                    </div>
                    <p className="text-3xl font-bold text-orange-600">{Math.round(weather.temperature)}°C</p>
                  </div>
                </div>

                <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Weather Summary</h3>
                  <p className="text-gray-600 text-lg">
                    Current weather in {weather.city} shows {weather.description} with a temperature of {Math.round(weather.temperature)}°C 
                    and humidity at {weather.humidity}%. Perfect conditions for planning your agricultural activities.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setWeather(null);
                    setCity("");
                    setError("");
                  }}
                  className="mt-6 bg-blue-600 text-white py-3 px-8 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Check Another City
                </button>
              </div>
            </div>
          )}

          {/* Tips Section */}
          <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">🌾 Farming Tips</h3>
            <ul className="text-yellow-700 space-y-2">
              <li>• Check weather before planting or harvesting</li>
              <li>• Monitor humidity levels for disease prevention</li>
              <li>• Plan irrigation based on temperature and rainfall</li>
              <li>• Use weather data for optimal crop timing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;