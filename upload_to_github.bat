@echo off
echo Initializing Git repository...
git init

echo Adding all files...
git add .

echo Creating initial commit...
git commit -m "Initial commit: AgriNova Agricultural Management System"

echo Adding remote repository...
git remote add origin https://github.com/Harit2321/AgriNova.git

echo Setting main branch...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo Done! Your project has been uploaded to GitHub.
pause