[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/BhShQpq1)





# 🌎 GEOTREASURE: WEB GIS TREASURE FINDING GAME

**Welcome to GeoTreasure!** An interactive, fast-paced, and engaging Web GIS game designed to test your global knowledge through a thrilling treasure hunt.

## ✨ Quick Links & Overview

| Item | Description |
| :--- | :--- |
| **LIVE DEMO** | (https://gmt-458-web-gis.github.io/geogame-irem122/) |
| **MISSION** | To transform geography, culture, and sports learning into a fun, competitive **treasure hunt** adventure on a world map. |
| **THEME** | Gamified Geographic Information Systems (GIS) and rapid-response trivia. |
| **TECHNOLOGY** | Leaflet.js, GeoJSON, D3.js, JavaScript. |

---
<img width="1024" height="768" alt="Oyun Başlangıcı-2" src="https://github.com/user-attachments/assets/24987881-7c82-4232-a821-a9f1a4daab1a" />



## 🎯 Core Game Mechanic: The Treasure Hunt

GeoTreasure takes the concept of global discovery and wraps it in a "treasure hunt" adventure. The system randomly selects a target country for each round. You must identify this country based on provided clues and **click it on the map** before the 60-second timer runs out.

### 🕹️ Gameplay Flow

| Action | Result | Points/Lives |
| :--- | :--- | :--- |
| **Correct Click** | Advance to the next question. | 🏆 **+20 / +15 / +10** (Based on hint level) |
| **Incorrect Click** | Lose a life, receive a new hint (up to 3 total). | ❤️ **3 Lives** per Question |
| **Out of Time** | The game ends, and final statistics are displayed. | ⏳ **60 Seconds** per Game |

**Total Questions:** 30

---

## 🗺️ Game Stages & Categories

The game starts with a brief personalization step before diving into the main challenge.

### 1. Character (Hero) Selection
Before starting, users select one of four unique characters. This selection is purely visual, providing a fun and engaging introduction to the game.


<img width="836" height="367" alt="Ekran Resmi 2025-11-26 15 01 55" src="https://github.com/user-attachments/assets/fef290c7-0706-4089-a24b-4b5f064509a2" />


### 2. Hint Type Selection
Users choose their area of expertise. The game will draw clues exclusively from the chosen category, encouraging focused learning.
<img width="836" height="367" alt="Ekran Resmi 2025-11-26 15 02 01" src="https://github.com/user-attachments/assets/664786fd-863c-462c-ad76-c7351b78021e" />

| Category | Focus Area | Example Clue |
| :--- | :--- | :--- |
| **Capital** | Political Geography | "Tokyo" |
| **Food** | Local Cuisine & Culture | "Sushi" |
| **Football** | Sports Culture | "Real Madrid" (Club Name/Logo) |

---
<img width="1528" height="864" alt="Ekran Resmi 2025-11-26 15 02 21" src="https://github.com/user-attachments/assets/c41a5574-40c3-4b1a-9082-f0d9fbce36bf" />

### 🎧 Immersive Audio Experience

To enhance the pace and excitement of the game, GeoTreasure incorporates a fully responsive audio system:

* **Countdown:** A thrilling 3-2-1 musical countdown initiates the game, building anticipation.
* **Feedback:** Instant sound cues are provided for **correct** and **incorrect** answers (win/wrong sounds) to give immediate feedback.
* **Game Flow:** Dedicated sound effects are used for screen transitions and the dramatic **game over** sequence.


## 💻 Technology Stack

This project is built on standard web technologies with a focus on powerful GIS visualization libraries to handle the complex map data.

| Library | Primary Role |
| :--- | :--- |
| **Leaflet.js** | **Core Mapping Library.** Handles map creation, rendering of clickable country polygons, and managing map interactions (panning, zooming). |
| **GeoJSON** | **Spatial Data Handling.** Used to load the geographical boundaries of all countries, allowing them to be displayed as interactive layers on the map. |
| **D3.js** | **Data Visualization.** Utilized to create dynamic and clear statistics graphs on the end-game screen, showing the user's performance breakdown. |

---

##  Project Management & Contribution

This project is open-source and welcomes contributions.

### Get Started

1.  Clone the repository: `git clone [REPO_URL]`
2.  Open `index.html` in your browser to view the game locally.

### Contribution
Feel free to open a Pull Request to contribute to the project! Areas for enhancement include:
* Expanding the Country/Clue data sets (JSON/JS files).
* Adding new map layers or visual features via Leaflet.
* Improving the scoring algorithm or UI/UX.

---



