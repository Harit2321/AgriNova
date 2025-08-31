import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
import json

# Image dimensions
IMG_WIDTH, IMG_HEIGHT = 128, 128
BATCH_SIZE = 32

# Data paths
train_dir = r'C:\Sem-4\Python_Grp_project\AgriNova\ml_training\New Plant Diseases Dataset(Augmented)\New Plant Diseases Dataset(Augmented)\train'
valid_dir = r'C:\Sem-4\Python_Grp_project\AgriNova\ml_training\New Plant Diseases Dataset(Augmented)\New Plant Diseases Dataset(Augmented)\valid'

# Data augmentation and normalization
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest'
)

validation_datagen = ImageDataGenerator(rescale=1./255)

# Data generators
train_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(IMG_WIDTH, IMG_HEIGHT),
    batch_size=BATCH_SIZE,
    class_mode='categorical'
)

validation_generator = validation_datagen.flow_from_directory(
    valid_dir,
    target_size=(IMG_WIDTH, IMG_HEIGHT),
    batch_size=BATCH_SIZE,
    class_mode='categorical'
)

# Save the class indices
class_indices = train_generator.class_indices
with open(r'C:\Sem-4\Python_Grp_project\AgriNova\ml_models\class_indices.json', 'w') as f:
    json.dump(class_indices, f)

# Building the CNN model
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(IMG_WIDTH, IMG_HEIGHT, 3)),
    MaxPooling2D(2, 2),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D(2, 2),
    Conv2D(128, (3, 3), activation='relu'),
    MaxPooling2D(2, 2),
    Flatten(),
    Dense(512, activation='relu'),
    Dropout(0.5),
    Dense(train_generator.num_classes, activation='softmax')
])

# Compiling the model
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# Training the model
history = model.fit(
    train_generator,
    steps_per_epoch=train_generator.samples // BATCH_SIZE,
    epochs=10, # For demonstration; increase for better accuracy
    validation_data=validation_generator,
    validation_steps=validation_generator.samples // BATCH_SIZE
)

# Saving the model
model.save(r'C:\Sem-4\Python_Grp_project\AgriNova\ml_models\disease_model.h5')

print("Disease detection model and class indices saved successfully!")
