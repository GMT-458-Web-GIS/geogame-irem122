
// =========================================================
// ---------------------- SOUND SYSTEM ----------------------
// =========================================================
function playSound(id) {
  const s = document.getElementById(id);
  if (!s) return;
  s.currentTime = 0;
  s.play();
}

// =========================================================
// ---------------------- SCREEN CONTROL --------------------
// =========================================================
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.toggle("active", s.id === id);
  });

  // MAP görünür olunca boyutla
  if (id === "screen-game" && map) {
    setTimeout(() => map.invalidateSize(true), 100);
  }
}

function goToRules() {
  playSound("snd-intro");
  showScreen("screen-rules");
}

function goToHero() {
  showScreen("screen-hero");
}

// =========================================================
// ------------------------ HERO SEÇİMİ ----------------------
// =========================================================
let selectedHero = null;

function selectHero(name) {
  selectedHero = name;

  document.querySelectorAll(".hero").forEach(h =>
    h.classList.remove("selected")
  );
  event.target.classList.add("selected");

  // Hero paneline resim ve isim
  document.getElementById("heroImage").src = event.target.src;
  document.getElementById("heroName").innerText = "Hero: " + name;

  document.getElementById("btnHeroNext").classList.remove("disabled");
}

function goToCategory() {
  showScreen("screen-category");
}

// =========================================================
// ------------------------ CATEGORY ------------------------
// =========================================================
let selectedCategory = null;

function selectCategory(cat) {
  selectedCategory = cat;

  document.querySelectorAll(".cat-card").forEach(c =>
    c.classList.remove("selected")
  );

  event.currentTarget.classList.add("selected");
  document.getElementById("btnCatNext").classList.remove("disabled");

  // Panelde kategori göster
  document.getElementById("heroCategory").innerText =
    "Kategori: " + (cat === "capital"
      ? "Başkent"
      : cat === "food"
      ? "Yemek"
      : "Futbol");
}

// =========================================================
// --------------------- COUNTRY LISTS -----------------------
// =========================================================

// ---------- 1) BAŞKENT LİSTESİ ----------
const capitalCountries = [
  { country: "Turkey", capital: "Ankara", lat: 39.93, lon: 32.85 },
  { country: "Italy", capital: "Rome", lat: 41.90, lon: 12.50 },
  { country: "France", capital: "Paris", lat: 48.85, lon: 2.35 },
  { country: "Germany", capital: "Berlin", lat: 52.52, lon: 13.40 },
  { country: "Spain", capital: "Madrid", lat: 40.42, lon: -3.70 },
  { country: "Portugal", capital: "Lisbon", lat: 38.72, lon: -9.13 },
  { country: "Netherlands", capital: "Amsterdam", lat: 52.37, lon: 4.90 },
  { country: "Belgium", capital: "Brussels", lat: 50.85, lon: 4.35 },
  { country: "Sweden", capital: "Stockholm", lat: 59.33, lon: 18.06 },
  { country: "Norway", capital: "Oslo", lat: 59.91, lon: 10.75 },
  { country: "Finland", capital: "Helsinki", lat: 60.17, lon: 24.94 },
  { country: "Denmark", capital: "Copenhagen", lat: 55.68, lon: 12.57 },
  { country: "Ireland", capital: "Dublin", lat: 53.35, lon: -6.26 },
  { country: "United Kingdom", capital: "London", lat: 51.50, lon: -0.12 },
  { country: "Poland", capital: "Warsaw", lat: 52.23, lon: 21.01 },
  { country: "Austria", capital: "Vienna", lat: 48.20, lon: 16.36 },
  { country: "Switzerland", capital: "Bern", lat: 46.95, lon: 7.44 },
  { country: "Czechia", capital: "Prague", lat: 50.08, lon: 14.43 },
  { country: "Greece", capital: "Athens", lat: 37.98, lon: 23.72 },
  { country: "Russia", capital: "Moscow", lat: 55.75, lon: 37.61 },
  { country: "Japan", capital: "Tokyo", lat: 35.68, lon: 139.69 },
  { country: "China", capital: "Beijing", lat: 39.90, lon: 116.40 },
  { country: "South Korea", capital: "Seoul", lat: 37.56, lon: 126.97 },
  { country: "India", capital: "New Delhi", lat: 28.61, lon: 77.20 },
  { country: "Australia", capital: "Canberra", lat: -35.28, lon: 149.13 },
  { country: "Canada", capital: "Ottawa", lat: 45.42, lon: -75.69 },
  { country: "United States of America", capital: "Washington D.C.", lat: 38.89, lon: -77.03 },
  { country: "Mexico", capital: "Mexico City", lat: 19.43, lon: -99.13 },
  { country: "Brazil", capital: "Brasilia", lat: -15.79, lon: -47.88 },
  { country: "Argentina", capital: "Buenos Aires", lat: -34.60, lon: -58.38 }
];

// ---------- 2) YEMEK LİSTESİ ----------
const foodCountries = [
  {
    country: "Turkey",
    foods: [
      { name: "Baklava", img: "yemek/baklava.jpg.avif" },
      { name: "Shawarma", img: "yemek/shawarma.jpg.avif" }
    ],
    lat: 39.93, lon: 32.85
  },
  {
    country: "Portugal",
    foods: [
      { name: "Pastel de Nata", img: "yemek/pastel de nata.jpg" }
    ],
    lat: 38.72, lon: -9.13
  },
  {
    country: "Spain",
    foods: [
      { name: "Paella", img: "yemek/paella.jpg.avif" },
      { name: "Tapas", img: "yemek/tapas.png" }
    ],
    lat: 40.46, lon: -3.75
  },
  {
    country: "Italy",
    foods: [
      { name: "Pizza", img: "yemek/pizza.png" },
      { name: "Spaghetti", img: "yemek/spaghetti.png" }
    ],
    lat: 41.87, lon: 12.56
  },
  {
    country: "France",
    foods: [
      { name: "Ratatouille", img: "yemek/ratatouille.jpg.avif" },
      { name: "Croissant", img: "yemek/croissant.jpg.avif" }
    ],
    lat: 46.22, lon: 2.21
  },
  {
    country: "Netherlands",
    foods: [
      { name: "Stroopwafel", img: "yemek/Stroopwafel.jpg" },
      { name: "Bitterballen", img: "yemek/Bitterballen.png" }
    ],
    lat: 52.37, lon: 4.90
  },
  {
    country: "Belgium",
    foods: [
      { name: "Moules Frites", img: "yemek/moules frites.jpg" },
      { name: "Waffle", img: "yemek/waffle.png" }
    ],
    lat: 50.85, lon: 4.35
  },
  {
    country: "Germany",
    foods: [
      { name: "Bratwurst", img: "yemek/Bratwurst.jpg.avif" }
    ],
    lat: 52.52, lon: 13.40
  },
  {
    country: "Austria",
    foods: [
      { name: "Apple Strudel", img: "yemek/apple strudel.jpg.webp" },
      { name: "Schnitzel", img: "yemek/schnitzel.jpg.avif" }
    ],
    lat: 47.52, lon: 14.55
  },
  {
    country: "Sweden",
    foods: [
      { name: "Kottbullar", img: "yemek/kottbullar.jpg.avif" }
    ],
    lat: 60.12, lon: 18.64
  },
  {
    country: "Denmark",
    foods: [
      { name: "Smorrebrod", img: "yemek/smorrebrod-sandwiches.png" }
    ],
    lat: 56.26, lon: 9.50
  },
  {
    country: "Finland",
    foods: [
      { name: "Karjalanpiirakka", img: "yemek/karjalanpiirakka.jpg.avif" }
    ],
    lat: 61.92, lon: 25.75
  },
  {
    country: "Ireland",
    foods: [
      { name: "Irish Stew", img: "yemek/stew.jpg.avif" }
    ],
    lat: 53.14, lon: -8.23
  },
  {
    country: "United Kingdom",
    foods: [
      { name: "Fish and Chips", img: "yemek/fish and chips.jpg" },
      { name: "Shepherd’s Pie", img: "yemek/shepherd.png" }
    ],
    lat: 55.37, lon: -3.43
  },
  {
    country: "Russia",
    foods: [
      { name: "Pelmeni", img: "yemek/pelmeni.jpeg" }
    ],
    lat: 61.52, lon: 105.31
  },
 
  {
    country: "Japan",
    foods: [
      { name: "Ramen", img: "yemek/ramen.jpg" },
      { name: "Sushi", img: "yemek/sushi.jpg" }
    ],
    lat: 36.20, lon: 138.25
  },
  {
    country: "South Korea",
    foods: [
      { name: "Kimchi", img: "yemek/kimchi.jpg" }
    ],
    lat: 35.90, lon: 127.76
  },
  {
    country: "India",
    foods: [
      { name: "Biryani", img: "yemek/biryani.jpg.avif" }
    ],
    lat: 20.59, lon: 78.96
  },
  {
    country: "Brazil",
    foods: [
      { name: "Feijoada", img: "yemek/feijoada.jpg.avif" }
    ],
    lat: -14.23, lon: -51.92
  },
  {
    country: "Mexico",
    foods: [
      { name: "Quesadilla", img: "yemek/Quesadilla.jpeg" },
      { name: "Taco", img: "yemek/taco.png" }
    ],
    lat: 23.63, lon: -102.55
  },
  {
    country: "Canada",
    foods: [
      { name: "Poutine", img: "yemek/poutine.jpeg" }
    ],
    lat: 56.13, lon: -106.34
  },
  {
    country: "Greece",
    foods: [
      { name: "Souvlaki", img: "yemek/souvlaki.jpg" }
    ],
    lat: 39.07, lon: 21.82
  },
  {
    country: "United States",
    foods: [
      { name: "Hot Dog", img: "yemek/hotdog.png" },
      { name: "Hamburger", img: "yemek/hamburger.jpg.avif" }
    ],
    lat: 37.09, lon: -95.71
  },
  {
    country: "Switzerland",
    foods: [
      { name: "Fondue", img: "yemek/fondue.jpg.avif" }
    ],
    lat: 46.82,
    lon: 8.23
  }
];

// ---------- 3) FUTBOL LİSTESİ ----------
const footballCountries = [
  { country: "United Kingdom",   team: { name: "Aston Villa",           img: "futbol/aston villa.png" },           lat: 52.509, lon: -1.884 },
  { country: "Spain",     team: { name: "Atletico Madrid",       img: "futbol/atletico madrid.png" },       lat: 40.41,  lon: -3.70 },
  { country: "Switzerland", team:{ name: "FC Basel",             img: "futbol/basel.png" },                 lat: 47.559, lon: 7.588 },
  { country: "Germany",   team: { name: "Bayer Leverkusen",      img: "futbol/bayer leverkusen.png" },      lat: 51.034, lon: 6.984 },
  { country: "Portugal",  team: { name: "Benfica",               img: "futbol/benfica.png" },               lat: 38.752, lon: -9.184 },
  { country: "Germany",   team: { name: "Borussia Dortmund",     img: "futbol/Borussia Dortmund.png" },     lat: 51.492, lon: 7.451 },
  { country: "United Kingdom",   team: { name: "Chelsea",               img: "futbol/chelsea.png" },               lat: 51.48,  lon: -0.19 },
  { country: "Belgium",   team: { name: "Club Brugge",           img: "futbol/club brugge.png" },           lat: 51.209, lon: 3.224 },
  { country: "Denmark",   team: { name: "FC Copenhagen",         img: "futbol/copenhagen.png" },            lat: 55.673, lon: 12.568 },
  { country: "Turkey",    team: { name: "Fenerbahçe",            img: "futbol/fenerbahçe.png" },            lat: 40.98,  lon: 29.03 },
  { country: "Poland",    team: { name: "Górnik Zabrze",         img: "futbol/gornik zabrze.png" },         lat: 50.30,  lon: 18.78 },
  { country: "Finland",   team: { name: "HJK Helsinki",          img: "futbol/helsinki.png" },              lat: 60.17,  lon: 24.94 },
  { country: "Italy",     team: { name: "Juventus",              img: "futbol/juventus.png" },              lat: 45.11,  lon: 7.64 },
  { country: "Japan",     team: { name: "Kashima Antlers",       img: "futbol/kashima.png" },               lat: 35.97,  lon: 140.64 },
  { country: "Finland",   team: { name: "KuPS",                  img: "futbol/kups.png" },                  lat: 62.89,  lon: 27.68 },
  { country: "United States of America",       team: { name: "Inter Miami",           img: "futbol/miami.png" },                 lat: 25.76,  lon: -80.19 },
  { country: "Italy",     team: { name: "AC Milan",              img: "futbol/milan.png" },                 lat: 45.48,  lon: 9.12 },
  { country: "India",     team: { name: "Mohun Bagan",           img: "futbol/mohun bagan.png" },           lat: 22.57,  lon: 88.36 },
  { country: "Greece",    team: { name: "Olympiakos",            img: "futbol/olympiakos.png" },            lat: 37.95,  lon: 23.66 },
  { country: "France",    team: { name: "Olympique Lyonnais",    img: "futbol/olympique lyonnais.png" },    lat: 45.75,  lon: 4.85 },
  { country: "France",    team: { name: "PSG",                   img: "futbol/psg.png" },                   lat: 48.84,  lon: 2.25 },
  { country: "Netherlands", team:{ name: "PSV",                  img: "futbol/psv.png" },                   lat: 51.44,  lon: 5.48 },
  { country: "Norway",    team: { name: "Rosenborg",             img: "futbol/rosenborg.png" },             lat: 63.43,  lon: 10.40 },
  { country: "Austria",   team: { name: "RB Salzburg",           img: "futbol/salzburg.png" },              lat: 47.80,  lon: 13.04 },
  { country: "South Korea", team:{ name: "FC Seoul",             img: "futbol/seoul.png" },                 lat: 37.56,  lon: 126.97 },
  { country: "China",     team: { name: "Shanghai Port",         img: "futbol/shanghai.png" },              lat: 31.23,  lon: 121.47 },
  { country: "Czechia",   team: { name: "Slavia Prague",         img: "futbol/slavia.png" },                lat: 50.10,  lon: 14.45 },
  { country: "Sweden",    team: { name: "Stockholm Team",        img: "futbol/stockholm.png" },             lat: 59.33,  lon: 18.06 },
  { country: "United Kingdom",   team: { name: "Tottenham Hotspur",     img: "futbol/tottenham.png" },             lat: 51.60,  lon: -0.07 },
  { country: "Spain",     team: { name: "Valencia CF",           img: "futbol/valencia.png.gif" },          lat: 39.47,  lon: -0.38 },
  { country: "Russia",    team: { name: "Zenit St. Petersburg",  img: "futbol/zenit saint-petersburg.png" },lat: 59.93,  lon: 30.31 }
];

// =========================================================
// ------------------------ GAME VARS -----------------------
// =========================================================
let map;
let score = 0;
let timer = 60;
let current;
let hintLevel = 1;
let geoLayer;
let timerId = null;

let correct = 0;
let wrong = 0;
let lives = 3;

// sonuç listeleri
let correctAnswers = [];
let wrongAnswers = [];

let capitalPool = [];
let foodPool = [];
let footballPool = [];

// =========================================================
// ---------------------- HELPERS ---------------------------
// =========================================================
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function formatCurrent() {
  if (selectedCategory === "capital") {
    return `${current.country} – ${current.capital}`;
  } else if (selectedCategory === "food") {
    return `${current.country} – ${current.foods[0].name}`;
  } else {
    return `${current.country} – ${current.team.name}`;
  }
}

// =========================================================
// ---------------------- GAME START ------------------------
// =========================================================
function startGame() {
  const intro = document.getElementById("snd-intro");
  intro.pause();
  intro.currentTime = 0;

  showScreen("screen-countdown");

  const numEl = document.getElementById("countdownNumber");
  let count = 3;
  numEl.textContent = count;

  playSound("snd-robotic");

  const interval = setInterval(() => {
    count--;

    if (count > 0) {
      numEl.textContent = count;
    } else if (count === 0) {
      numEl.textContent = "GO!";
    } else {
      clearInterval(interval);
      startActualGame();
    }
  }, 1000);
}

// =========================================================
// ------------------ START ACTUAL GAME ---------------------
// =========================================================
function startActualGame() {
  showScreen("screen-game");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!map) initMap();
      map.invalidateSize(true);
    });
  });

  score = 0;
  timer = 60;
  correct = 0;
  wrong = 0;
  lives = 3;
  correctAnswers = [];
  wrongAnswers = [];

  document.getElementById("scoreBox").innerText = "Skor: 0";
  document.getElementById("timerBox").innerText = "Süre: 60";
  document.getElementById("timeLeftPanel").innerText = "60";
  document.getElementById("correctCount").innerText = "0";
  document.getElementById("wrongCount").innerText = "0";

  capitalPool = [...capitalCountries];
  foodPool = [...foodCountries];
  footballPool = [...footballCountries];

  shuffle(capitalPool);
  shuffle(foodPool);
  shuffle(footballPool);

  nextCountry();
  startTimer();
}

// =========================================================
// --------------------------- TIMER ------------------------
// =========================================================
function startTimer() {
  if (timerId) clearInterval(timerId);

  timerId = setInterval(() => {
    timer--;
    document.getElementById("timerBox").innerText = "Süre: " + timer;
    document.getElementById("timeLeftPanel").innerText = timer;

    if (timer <= 0) {
      clearInterval(timerId);
      endGame();
    }
  }, 1000);
}

// =========================================================
// --------------------------- MAP --------------------------
// =========================================================
function initMap() {
  map = L.map("map", {
    minZoom: 2,
    maxZoom: 5,
    worldCopyJump: false,
    maxBoundsViscosity: 1.0,
    maxBounds: [
      [-85, -180],
      [85, 180]
    ],
    zoomControl: true
  }).setView([20, 0], 2);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; CARTO",
    maxZoom: 8,
    minZoom: 1,
    noWrap: true
  }).addTo(map);

  fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json")
    .then(res => res.json())
    .then(data => {
      geoLayer = L.geoJSON(data, {
        style: {
          color: "#444",
          weight: 1,
          fillColor: "#ccc",
          fillOpacity: 0.2
        },
        onEachFeature: onCountryLayer
      }).addTo(map);

      map.invalidateSize(true);
    });
}

// =========================================================
// ------------------ COUNTRY LAYER EVENTS ------------------
// =========================================================
function onCountryLayer(feature, layer) {
  layer.on({
    click: () => countryClick(feature.properties.name, layer),
    mouseover: () => layer.setStyle({ fillOpacity: 0.45 }),
    mouseout: () => layer.setStyle({ fillOpacity: 0.2 })
  });
}

// =========================================================
// ---------------------- NEXT COUNTRY ----------------------
// =========================================================
function nextCountry() {
  hintLevel = 1;
  lives = 3;
  updateLives();

  if (selectedCategory === "capital") {
    if (capitalPool.length === 0) return endGame();
    current = capitalPool.pop();
  } else if (selectedCategory === "food") {
    if (foodPool.length === 0) return endGame();
    current = foodPool.pop();
  } else if (selectedCategory === "football") {
    if (footballPool.length === 0) return endGame();
    current = footballPool.pop();
  }

  updateHint();
}

function updateLives() {
  const livesDiv = document.getElementById("lives");
  livesDiv.innerHTML = "";
  for (let i = 0; i < lives; i++) {
    livesDiv.innerHTML += `<span class="heart">❤️</span>`;
  }
}

// =========================================================
// ----------------------- UPDATE HINT -----------------------
// =========================================================
function updateHint() {
  const hintText = document.getElementById("hintText");
  const hintImage = document.getElementById("hintImage");

  hintImage.style.display = "none";
  hintImage.src = "";

  if (selectedCategory === "capital") {
    hintText.innerText = "Başkent: " + current.capital;
  } else if (selectedCategory === "food") {
    hintText.innerText = "Yemek: " + current.foods[0].name;
    hintImage.src = current.foods[0].img;
    hintImage.style.display = "block";
  } else if (selectedCategory === "football") {
    hintText.innerText = "Takım: " + current.team.name;
    hintImage.src = current.team.img;
    hintImage.style.display = "block";
  }
}

// =========================================================
// ---------------------- COUNTRY CLICK ----------------------
// =========================================================
function countryClick(clickedName, layer) {
  const isCorrect =
    clickedName.trim().toLowerCase() === current.country.trim().toLowerCase();

  if (isCorrect) {
    playSound("snd-win");

    // bu soruyu doğru bildi
    correct++;
    document.getElementById("correctCount").innerText = correct;

    const label = formatCurrent();
    correctAnswers.push(label);

    let gained = hintLevel === 1 ? 20 : hintLevel === 2 ? 15 : 10;
    score += gained;
    document.getElementById("scoreBox").innerText = "Skor: " + score;

    layer.setStyle({ fillColor: "green", fillOpacity: 0.6 });
    map.flyTo([current.lat, current.lon], 4, { duration: 0.6 });
    // ⭐ DOĞRU ÜLKEDE HAZİNE ANİMASYONU
    const treasure = document.createElement("div");
    treasure.className = "correctTreasure";

    const point = map.latLngToContainerPoint([current.lat, current.lon]);
    treasure.style.left = point.x - 60 + "px";
    treasure.style.top = point.y - 60 + "px";

    document.body.appendChild(treasure);

    setTimeout(() => treasure.remove(), 1300);

    setTimeout(() => {
      geoLayer.resetStyle();
      map.flyTo([20, 0], 2, { duration: 0.6 });
      nextCountry();
    }, 1000);
  } else {
    playSound("snd-wrong2");

    lives--;
    updateLives();

    layer.setStyle({ fillColor: "red", fillOpacity: 0.5 });

    if (lives <= 0) {
      // bu soruyu yanlış bildi
      wrong++;
      document.getElementById("wrongCount").innerText = wrong;

      const label = formatCurrent();
      wrongAnswers.push(label);

      showCorrectAnswer();

      setTimeout(() => {
        geoLayer.resetStyle();
        nextCountry();
      }, 2000);
    } else {
      setTimeout(() => {
        geoLayer.resetStyle();
      }, 600);
    }
  }
}

function showCorrectAnswer() {
  const box = document.createElement("div");
  box.className = "correctPopup";

  let text = "";
  if (selectedCategory === "capital")
    text = `Doğru Cevap:<br><b>${current.country}</b><br>Başkent: ${current.capital}`;
  else if (selectedCategory === "food")
    text = `Doğru Cevap:<br><b>${current.country}</b><br>Yemek: ${current.foods[0].name}`;
  else
    text = `Doğru Cevap:<br><b>${current.country}</b><br>Takım: ${current.team.name}`;

  box.innerHTML = text;
  document.body.appendChild(box);

  setTimeout(() => {
    box.remove();
  }, 1900);
}

// =========================================================
// ------------------------- END GAME ------------------------
// =========================================================
function endGame() {
  clearInterval(timerId);
  playSound("snd-fail");

  showScreen("screen-end");

  document.getElementById("finalScore").innerHTML =
    "Toplam Skorun: <b>" + score + "</b>";

  // sayıları yaz
  document.getElementById("finalCorrect").innerText = correct;
  document.getElementById("finalWrong").innerText = wrong;

  // listeleri yaz
  const correctListEl = document.getElementById("correctList");
  const wrongListEl = document.getElementById("wrongList");

  if (correctAnswers.length === 0) {
    correctListEl.innerHTML = "<li>Hiç doğru yok</li>";
  } else {
    correctListEl.innerHTML = correctAnswers
      .map(item => `<li>${item}</li>`)
      .join("");
  }

  if (wrongAnswers.length === 0) {
    wrongListEl.innerHTML = "<li>Hiç yanlış yok</li>";
  } else {
    wrongListEl.innerHTML = wrongAnswers
      .map(item => `<li>${item}</li>`)
      .join("");
  }

  drawChart();
}

// =========================================================
// ------------------------ SCORE CHART ----------------------
// =========================================================
function drawChart() {
  const ctx = document.getElementById("scoreChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Skor"],
      datasets: [
        {
          label: "Final Skor",
          data: [score],
          backgroundColor: "rgba(74,108,247,0.5)",
          borderColor: "#4a6cf7",
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: false,
      scales: { y: { beginAtZero: true } }
    }
  });
}

// =========================================================
// ------------------------- DARK MODE ----------------------
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      toggle.textContent = "☀️";
    } else {
      toggle.textContent = "🌙";
    }
  });
});

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
