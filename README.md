[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/BhShQpq1)
🌍 GeoTreasure – Web GIS Treasure Finding Game
GeoTreasure is an interactive Web GIS-based game where users try to find hidden treasure using clues on a world map. The game is fun, fast-paced, and entirely based on user interaction. The goal is to find as many treasures as possible before the time runs out and achieve a high score.


🎯 Mission
The game's goal is to explore the world's countries in a fun way and provide the user with a clue-solving experience across different categories. The user not only has fun but also learns about countries' capitals, cuisine, and football cultures.


🧩 Core Game Mechanic: Treasure Hunt Mode
GeoTreasure transforms learning and discovery into a "treasure hunt" adventure.
The system randomly selects a country for each question.
The user guesses this country based on the clues.
They make their guess by clicking on the country on the map.
Correct clicks earn points; incorrect clicks lose lives.
<img width="1024" height="768" alt="Oyun Başlangıcı-2" src="https://github.com/user-attachments/assets/24987881-7c82-4232-a821-a9f1a4daab1a" />



🦸 1) Character (Hero) Selection
Before starting the game, the user chooses one of four different characters:
Character selection is purely visual and provides a fun introduction to the game.
🎯 2) Hint Type Selection
The user chooses one of three different categories to play:
Capital (e.g., "Tokyo")
Food (e.g., "Sushi")
Football – Club/Logo (e.g., "Real Madrid")


JS and Library Usage
Main libraries used in this project:
✔ Leaflet.js
Creating the world map
Displaying clickable polygons of countries
Providing treasure-finding mechanics on the map
✔ GeoJSON
Loading country borders as polygons
✔ D3.js
Creating statistics graphs on the end game screen




How Many Lives / Questions / Difficulty?
25 questions
3 lives per question
1st clue ⭐ +20 points
2nd clue ⭐ +15 points
3rd clue ⭐ +10 points
Race against the clock
