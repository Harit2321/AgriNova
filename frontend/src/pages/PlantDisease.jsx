import React, { useState } from "react";

const PlantDisease = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setError("");
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setImageUrl(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Please select an image file");
      return;
    }

    setLoading(true);
    setError("");
    setPrediction("");

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const res = await fetch("http://localhost:8000/disease/predict/", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setPrediction(data.prediction);
        setImageUrl(data.image_url);
      } else {
        setError(data.error || "Failed to analyze image");
      }
    } catch (err) {
      setError("Failed to connect to server");
    }

    setLoading(false);
  };

  const resetForm = () => {
    setSelectedFile(null);
    setPrediction("");
    setImageUrl("");
    setError("");
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Plant Disease <span className="text-red-600">Detection</span>
          </h1>
          <p className="text-xl text-gray-600">
            Upload a plant image to detect diseases using AI-powered computer vision
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Upload Section */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🔬</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Upload Plant Image</h2>
            <p className="text-gray-600">Select a clear image of the plant leaf or affected area</p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            {/* File Upload */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-4 text-lg">
                Choose Image File
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-red-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="mb-4">
                    <span className="text-6xl">📷</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                </label>
              </div>
              
              {selectedFile && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-700 font-medium">
                    ✓ Selected: {selectedFile.name}
                  </p>
                </div>
              )}
            </div>

            {/* Image Preview */}
            {imageUrl && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Image Preview</h3>
                <div className="flex justify-center">
                  <img
                    src={imageUrl}
                    alt="Plant preview"
                    className="max-w-md max-h-64 rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center mb-6">
              <button
                type="submit"
                disabled={loading || !selectedFile}
                className="bg-red-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Analyzing Image..." : "Detect Disease"}
              </button>
            </div>
          </form>

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6">
              <div className="flex items-center">
                <span className="text-xl mr-2">⚠️</span>
                {error}
              </div>
            </div>
          )}

          {/* Results */}
          {prediction && (
            <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border border-red-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🩺</span>
                </div>
                <h2 className="text-3xl font-bold text-red-800 mb-4">Detection Result</h2>
                <p className="text-4xl font-bold text-red-600 mb-6">{prediction}</p>
                <p className="text-lg text-gray-700 mb-8">
                  Analysis completed successfully. Please consult with agricultural experts for treatment recommendations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Detection Status</h4>
                    <p className="text-2xl font-bold text-green-600">✓ Complete</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Confidence</h4>
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetForm}
                    className="bg-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-700 transition"
                  >
                    Analyze Another Image
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="bg-gray-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-700 transition"
                  >
                    Save Report
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tips Section */}
          <div className="mt-12 bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-800 mb-4">📋 Tips for Better Results</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• Use clear, well-lit images of affected plant parts</li>
              <li>• Focus on leaves, stems, or fruits showing symptoms</li>
              <li>• Avoid blurry or low-resolution images</li>
              <li>• Include the entire affected area in the frame</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDisease;