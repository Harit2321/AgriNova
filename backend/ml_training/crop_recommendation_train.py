import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import pickle

# Load the dataset
df = pd.read_csv('C:\Sem-4\Python_Grp_project\AgriNova\ml_training\Crop_recommendation.csv')

# Features and target
X = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
y = df['label']

# Splitting the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initializing the Random Forest Classifier
model = RandomForestClassifier(n_estimators=20, random_state=0)

# Training the model
model.fit(X_train, y_train)

# Predicting on the test set
y_pred = model.predict(X_test)

# Calculating the accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

# Saving the model
with open('C:\Sem-4\Python_Grp_project\AgriNova\ml_models\crop_model.pkl', 'wb') as f:
    pickle.dump(model, f)

print("Crop recommendation model trained and saved successfully!")
