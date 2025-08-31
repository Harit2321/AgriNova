import React, { useState } from "react";

const CropMarketPrices = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [commodity, setCommodity] = useState("");
  const [prices, setPrices] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  // Example dropdown options (replace with API data if available)
  const states = ["Gujarat", "Maharashtra", "Punjab"];
  const districts = ["Ahmedabad", "Pune", "Amritsar"];
  const commodities = ["Wheat", "Rice", "Cotton"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSearched(true);
    setPrices([]);

    try {
      // Replace with your backend endpoint (Flask/Django/FastAPI)
      const response = await fetch("http://localhost:8000/api/market-prices/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state, district, commodity }),
      });

      const data = await response.json();
      if (data.error) {
        setError("No market data found for the selected location and crop.");
      } else {
        setPrices(data.prices || []);
      }
    } catch (err) {
      setError("Failed to fetch market data. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Live Crop Market Prices</h1>
        <p className="text-gray-600 mt-2">
          Select your state, district, and crop to view live prices.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* State */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              State:
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            >
              <option value="">Select State</option>
              {states.map((s, idx) => (
                <option key={idx} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* District */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              District:
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            >
              <option value="">Select District</option>
              {districts.map((d, idx) => (
                <option key={idx} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Crop */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Crop:
            </label>
            <select
              value={commodity}
              onChange={(e) => setCommodity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            >
              <option value="">Select Crop</option>
              {commodities.map((c, idx) => (
                <option key={idx} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md transform hover:scale-105"
        >
          {loading ? "Fetching Prices..." : "Get Prices"}
        </button>
      </form>

      {/* Results */}
      {searched && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Results
          </h2>

          {error ? (
            <p className="text-red-600 text-center mt-4">{error}</p>
          ) : (
            <div className="overflow-x-auto mt-6">
              <table className="w-full border border-gray-300 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="py-3 px-4 text-left">Market</th>
                    <th className="py-3 px-4 text-left">Crop</th>
                    <th className="py-3 px-4 text-left">Price (₹/Quintal)</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.length > 0 ? (
                    prices.map((item, idx) => (
                      <tr key={idx} className="border-t border-gray-200">
                        <td className="py-3 px-4">{item.market}</td>
                        <td className="py-3 px-4">{item.crop}</td>
                        <td className="py-3 px-4 font-semibold text-green-700">
                          ₹{item.price}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="3"
                        className="py-4 px-4 text-center text-gray-500"
                      >
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CropMarketPrices;
