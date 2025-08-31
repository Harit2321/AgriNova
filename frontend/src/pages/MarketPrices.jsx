import React, { useState, useEffect } from "react";

const MarketPrices = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [commodities, setCommodities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCommodity, setSelectedCommodity] = useState("");
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/market/")
      .then(res => res.json())
      .then(data => {
        setStates(data.states || []);
        setDistricts(data.districts || []);
        setCommodities(data.commodities || []);
      })
      .catch(err => console.error("Error fetching initial data:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setPrices([]);

    try {
      const res = await fetch("http://localhost:8000/market/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          state: selectedState,
          district: selectedDistrict,
          commodity: selectedCommodity,
        }),
      });

      const data = await res.json();
      if (data.prices) {
        setPrices(data.prices);
      } else {
        setError("No price data found for the selected criteria.");
      }
    } catch (err) {
      setError("Error fetching market prices. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Market Prices</h1>
        <p className="text-xl text-gray-600">Track current market prices for agricultural commodities</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">State</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">District</label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select District</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>{district}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Commodity</label>
            <select
              value={selectedCommodity}
              onChange={(e) => setSelectedCommodity(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Commodity</option>
              {commodities.map((commodity, index) => (
                <option key={index} value={commodity}>{commodity}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3 text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? "Fetching Prices..." : "Get Market Prices"}
            </button>
          </div>
        </form>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {prices.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Market Prices for {selectedCommodity} in {selectedDistrict}, {selectedState}
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Market</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Commodity</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Min Price (₹)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Max Price (₹)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Modal Price (₹)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Arrival (Qtl)</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((price, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 px-4 py-3">{price.market}</td>
                      <td className="border border-gray-300 px-4 py-3">{price.commodity}</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">₹{price.min_price}</td>
                      <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">₹{price.max_price}</td>
                      <td className="border border-gray-300 px-4 py-3 text-blue-600 font-bold">₹{price.modal_price}</td>
                      <td className="border border-gray-300 px-4 py-3">{price.arrival || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <h4 className="text-sm font-medium text-gray-600 mb-1">Average Price</h4>
                <p className="text-2xl font-bold text-green-600">
                  ₹{Math.round(prices.reduce((sum, p) => sum + p.modal_price, 0) / prices.length)}
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="text-sm font-medium text-gray-600 mb-1">Total Markets</h4>
                <p className="text-2xl font-bold text-blue-600">{prices.length}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <h4 className="text-sm font-medium text-gray-600 mb-1">Last Updated</h4>
                <p className="text-sm font-medium text-gray-700">{new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketPrices;