# AgriNova - Agricultural Management System

## Quick Setup Guide

### Backend Setup (Django)

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

4. **Start Django server:**
   ```bash
   python manage.py runserver 8000
   ```
   Or simply double-click `start_backend.bat`

### Frontend Setup (React)

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start React server:**
   ```bash
   npm start
   ```
   Or simply double-click `start_frontend.bat`

## API Endpoints Fixed

### Weather API
- **Endpoint:** `POST /weather/weather-forecast/`
- **Frontend calls:** ✅ Fixed to handle JSON requests

### Crop Recommendation API
- **Endpoint:** `POST /crop/recommend/`
- **Frontend calls:** ✅ Working correctly

### Disease Detection API
- **Endpoint:** `POST /disease/predict/`
- **Frontend calls:** ✅ Fixed endpoint path

### Market Prices API
- **Endpoint:** `GET/POST /market/`
- **Frontend calls:** ✅ Added JSON support

## Issues Fixed

1. ✅ **CORS Configuration** - Added proper CORS settings for React frontend
2. ✅ **JSON Request Handling** - All APIs now handle JSON requests from frontend
3. ✅ **CSRF Exemption** - Added @csrf_exempt for API endpoints
4. ✅ **Model Path Issues** - Fixed absolute paths for ML models
5. ✅ **API Endpoint Consistency** - Aligned frontend calls with backend URLs
6. ✅ **Missing Dependencies** - Updated requirements.txt

## Running the Application

1. Start the backend server (port 8000)
2. Start the frontend server (port 3000)
3. Access the application at `http://localhost:3000`

## Features Working

- ✅ Weather Forecast
- ✅ Crop Recommendation
- ✅ Plant Disease Detection
- ✅ Market Prices
- ✅ Dashboard Navigation

Your application should now work without API path issues!