// Main JavaScript for K-Drama Website

let currentSlide = 0;

// ====================== HERO CAROUSEL FUNCTIONALITY ======================
function initializeCarousel() {
  if (!document.getElementById("heroCarousel")) return;

  const carousel = document.getElementById("heroCarousel");
  const indicators = document.getElementById("carouselIndicators");

  // Create carousel slides
  featuredItems.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.className = `carousel-slide ${index === 0 ? "active" : ""}`;
    slide.innerHTML = `
      <img src="${item.backdrop}" alt="${item.title}" class="carousel-slide-bg">
      <div class="carousel-content">
        <h1>${item.title}</h1>
        <div class="meta">
          <span class="type">${item.type === "drama" ? "🎭 K-Drama" : "🎬 Movie"}</span>
          <span class="genre">${item.genre}</span>
          <span class="rating">⭐ ${formatRating(item.rating)}</span>
        </div>
        <p>${item.description}</p>
        <div class="carousel-buttons">
          <button class="btn-play">▶ Play Now</button>
          <button class="btn-info">ℹ More Info</button>
        </div>
      </div>
    `;
    carousel.appendChild(slide);
  });

  // Create indicators
  featuredItems.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.className = `indicator ${index === 0 ? "active" : ""}`;
    indicator.addEventListener("click", () => goToSlide(index));
    indicators.appendChild(indicator);
  });

  // Add event listeners to controls
  document.getElementById("prevBtn").addEventListener("click", prevSlide);
  document.getElementById("nextBtn").addEventListener("click", nextSlide);

  // Auto-rotate carousel every 8 seconds
  setInterval(autoNextSlide, 8000);
}

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".indicator");

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  indicators.forEach((indicator) => indicator.classList.remove("active"));

  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function autoNextSlide() {
  showSlide(currentSlide + 1);
}

function goToSlide(index) {
  showSlide(index);
}

// ====================== UTILITY FUNCTIONS ======================
function formatRating(rating) {
  return (Math.round(rating * 10) / 10).toFixed(1);
}

function formatViews(views) {
  if (views >= 1000000) return (views / 1000000).toFixed(1) + "M";
  if (views >= 1000) return (views / 1000).toFixed(1) + "K";
  return views;
}

// ====================== NAVBAR FUNCTIONALITY ======================
function setActiveNav(page) {
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => link.classList.remove("active"));

  navLinks.forEach((link) => {
    if (
      link.textContent.toLowerCase() === page.toLowerCase() ||
      (page === "home" && link.textContent === "K-Drama Hub")
    ) {
      link.classList.add("active");
    }
  });
}

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  initializeCarousel();

  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const navLinks = document.querySelector(".nav-links");
      navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
    });
  }
});

// ====================== SEARCH FUNCTIONALITY ======================
function setupSearch() {
  const searchInput = document.querySelector(".search-bar input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const allMovies = document.querySelectorAll("[data-search]");

    allMovies.forEach((item) => {
      const title = item.getAttribute("data-search").toLowerCase();
      item.style.display = title.includes(query) ? "" : "none";
    });
  });
}

// ====================== FILTER FUNCTIONALITY ======================
function setupFilters() {
  const filterButtons = document.querySelectorAll(".filter-button");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const genre = button.getAttribute("data-genre");
      const items = document.querySelectorAll("[data-genre]");

      items.forEach((item) => {
        if (genre === "All" || item.getAttribute("data-genre") === genre) {
          item.style.display = "";
          setTimeout(() => (item.style.opacity = "1"), 10);
        } else {
          item.style.opacity = "0";
          setTimeout(() => (item.style.display = "none"), 300);
        }
      });
    });
  });
}

// ====================== CAROUSEL CREATION ======================
function createCarousel(containerId, items, itemType = "movie") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const carousel = document.createElement("div");
  carousel.className = "carousel-container";

  items.forEach((item) => {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";
    carouselItem.setAttribute("data-search", item.title);
    carouselItem.setAttribute("data-genre", item.genre);

    carouselItem.innerHTML = `
      <img src="${item.poster_url}" alt="${item.title}">
      <div class="carousel-overlay">
        <h3>${item.title}</h3>
        <div class="rating">⭐ ${formatRating(item.rating)}</div>
      </div>
    `;

    carouselItem.addEventListener("click", () => {
      window.location.hash = `#${itemType}/${item.id}`;
    });

    carousel.appendChild(carouselItem);
  });

  container.appendChild(carousel);
}

// ====================== GRID CREATION ======================
function createGrid(containerId, items, itemType = "movie") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const grid = document.createElement("div");
  grid.className = "content-grid";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-search", item.title);
    card.setAttribute("data-genre", item.genre);

    const badge =
      itemType === "drama" && item.status === "Ongoing"
        ? '<span class="card-badge">Ongoing</span>'
        : "";

    card.innerHTML = `
      <img src="${item.poster_url}" alt="${item.title}" class="card-image">
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-genre">${item.genre}</p>
        <div class="card-rating">
          <span class="card-rating-star">⭐</span>
          <span>${formatRating(item.rating)}</span>
        </div>
      </div>
      ${badge}
    `;

    card.addEventListener("click", () => {
      window.location.hash = `#${itemType}/${item.id}`;
    });

    grid.appendChild(card);
  });

  container.appendChild(grid);
}

// ====================== DETAIL PAGE FUNCTIONALITY ======================
function showMovieDetail(movieId) {
  const movie = moviesData.find((m) => m.id === parseInt(movieId));
  if (!movie) return;

  const container = document.getElementById("detail-container");
  if (!container) return;

  container.innerHTML = `
    <div class="detail-page">
      <div class="detail-hero" style="background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(229,9,20,0.3)), url('${movie.poster_url}'); background-size: cover; background-position: center;">
        <div class="detail-content">
          <h1>${movie.title}</h1>
          <div class="detail-meta">
            <span class="year">${movie.release_year}</span>
            <span class="rating">⭐ ${formatRating(movie.rating)}</span>
            <span class="views">👁️ ${formatViews(movie.views)} views</span>
          </div>
          <p class="description">${movie.description}</p>
          <div class="detail-buttons">
            <button class="btn-play">▶ Play Now</button>
            <button class="btn-info">+ Add to Watchlist</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function showDramaDetail(dramaId) {
  const drama = dramasData.find((d) => d.id === parseInt(dramaId));
  if (!drama) return;

  const container = document.getElementById("detail-container");
  if (!container) return;

  const castList = drama.cast ? drama.cast.join(", ") : "N/A";

  container.innerHTML = `
    <div class="detail-page">
      <div class="detail-hero" style="background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(229,9,20,0.3)), url('${drama.poster_url}'); background-size: cover; background-position: center;">
        <div class="detail-content">
          <h1>${drama.title}</h1>
          <div class="detail-meta">
            <span class="season">${drama.seasons} Season${drama.seasons > 1 ? "s" : ""}</span>
            <span class="episodes">${drama.episodes} Episodes</span>
            <span class="rating">⭐ ${formatRating(drama.rating)}</span>
            <span class="views">👁️ ${formatViews(drama.views)} views</span>
            <span class="status">${drama.status}</span>
          </div>
          <p class="description">${drama.description}</p>
          <div class="cast">
            <strong>Cast:</strong> ${castList}
          </div>
          <div class="detail-buttons">
            <button class="btn-play">▶ Play Now</button>
            <button class="btn-info">+ Add to Watchlist</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ====================== TRENDING FUNCTIONALITY ======================
function createTrendingList(containerId, items, itemType = "drama") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = document.createElement("div");
  list.className = "trending-list";

  items.forEach((item, index) => {
    const trendingItem = document.createElement("div");
    trendingItem.className = "trending-item";

    trendingItem.innerHTML = `
      <div class="trend-rank">#${index + 1}</div>
      <img src="${item.poster_url}" alt="${item.title}" class="trend-poster">
      <div class="trend-info">
        <h3>${item.title}</h3>
        <p>${item.genre} • ${item.rating}⭐</p>
        <div class="trend-progress">
          <div class="trend-bar" style="width: ${item.percentage}%"></div>
        </div>
        <span class="trend-percentage">+${item.percentage}%</span>
      </div>
    `;

    trendingItem.addEventListener("click", () => {
      window.location.hash = `#${itemType}/${item.id}`;
    });

    list.appendChild(trendingItem);
  });

  container.appendChild(list);
}

// ====================== LOCAL STORAGE FUNCTIONS ======================
function addToWatchlist(item, itemType) {
  let watchlist = JSON.parse(localStorage.getItem("kdrama-watchlist") || "[]");

  if (!watchlist.find((w) => w.id === item.id && w.type === itemType)) {
    watchlist.push({ ...item, type: itemType });
    localStorage.setItem("kdrama-watchlist", JSON.stringify(watchlist));
    return true;
  }
  return false;
}

function removeFromWatchlist(itemId, itemType) {
  let watchlist = JSON.parse(localStorage.getItem("kdrama-watchlist") || "[]");
  watchlist = watchlist.filter(
    (w) => !(w.id === itemId && w.type === itemType),
  );
  localStorage.setItem("kdrama-watchlist", JSON.stringify(watchlist));
}

function getWatchlist() {
  return JSON.parse(localStorage.getItem("kdrama-watchlist") || "[]");
}

function isInWatchlist(itemId, itemType) {
  const watchlist = getWatchlist();
  return watchlist.some((w) => w.id === itemId && w.type === itemType);
}

// ====================== USER AUTHENTICATION ======================
function saveUser(userData) {
  localStorage.setItem("kdrama-user", JSON.stringify(userData));
}

function getUser() {
  return JSON.parse(localStorage.getItem("kdrama-user") || "null");
}

function logout() {
  localStorage.removeItem("kdrama-user");
  window.location.href = "/";
}

// ====================== INITIALIZATION ======================
document.addEventListener("DOMContentLoaded", () => {
  setupSearch();
  setupFilters();

  // Update auth buttons based on login status
  const user = getUser();
  const authButtons = document.querySelector(".auth-buttons");
  if (authButtons && user) {
    authButtons.innerHTML = `
      <span style="font-size: 14px;">Welcome, ${user.name}!</span>
      <button class="btn-signup" onclick="logout()" style="background-color: #E50914;">Logout</button>
    `;
  }
});

// ====================== MODAL FUNCTIONALITY ======================
function showModal(title, content) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h2>${title}</h2>
      <p>${content}</p>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector(".close-modal");
  closeBtn.addEventListener("click", () => modal.remove());

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

// ====================== DETAIL PAGE STYLES (added dynamically) ======================
const detailStyles = `
.detail-page {
  margin-top: 70px;
}

.detail-hero {
  height: 500px;
  display: flex;
  align-items: center;
  padding: 50px;
  position: relative;
  overflow: hidden;
}

.detail-content {
  max-width: 600px;
  animation: slideInLeft 0.8s ease;
}

.detail-content h1 {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 20px;
}

.detail-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  font-size: 14px;
  color: #999;
}

.detail-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.description {
  font-size: 16px;
  margin-bottom: 30px;
  line-height: 1.6;
}

.cast {
  margin-bottom: 30px;
  font-size: 14px;
}

.detail-buttons {
  display: flex;
  gap: 20px;
}

.trending-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.trending-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #2F2F2F;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.trending-item:hover {
  background-color: #3F3F3F;
  transform: translateX(10px);
}

.trend-rank {
  font-size: 24px;
  font-weight: 700;
  color: #E50914;
  min-width: 40px;
  text-align: center;
}

.trend-poster {
  width: 80px;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
}

.trend-info {
  flex: 1;
}

.trend-info h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}

.trend-info p {
  font-size: 13px;
  color: #999;
  margin-bottom: 10px;
}

.trend-progress {
  height: 4px;
  background-color: #141414;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 5px;
}

.trend-bar {
  height: 100%;
  background-color: #E50914;
  border-radius: 2px;
}

.trend-percentage {
  font-size: 12px;
  color: #E50914;
  font-weight: 600;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: #2F2F2F;
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  position: relative;
  animation: slideUp 0.3s ease;
}

.close-modal {
  position: absolute;
  right: 20px;
  top: 15px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease;
}

.close-modal:hover {
  color: #E50914;
}

.modal-content h2 {
  margin-bottom: 15px;
}

.modal-content p {
  font-size: 14px;
  color: #ccc;
  line-height: 1.6;
}
`;

// Inject detail styles
const styleSheet = document.createElement("style");
styleSheet.textContent = detailStyles;
document.head.appendChild(styleSheet);
