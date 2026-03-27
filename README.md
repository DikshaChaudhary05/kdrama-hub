# K-Drama Hub - Korean Dramas & Movies Streaming Website

A modern, Netflix-style streaming platform dedicated exclusively to Korean dramas and Korean movies. Built with HTML, CSS, and vanilla JavaScript for fast performance and smooth user experience.

## 🎬 Features

### Core Features

- **Responsive Design** - Fully responsive on desktop, tablet, and mobile devices
- **Dark Theme** - Premium Netflix-inspired dark theme with red accent (#E50914)
- **Hero Banner** - Featured content showcase with call-to-action buttons
- **Trending Section** - Dynamic trending dramas and movies with popularity rankings
- **Advanced Search** - Real-time search functionality across all content
- **Genre Filtering** - Filter content by Romance, Thriller, Action, Comedy, Historical, Fantasy, and Drama

### Pages

- **Home** - Hero banner with trending, latest dramas, latest movies, and genre categories
- **Movies** - Browse all Korean movies with filtering options
- **Dramas** - Browse all K-dramas with episode and season information
- **Trending** - View trending content with rankings and performance metrics
- **Login** - User authentication with email and password
- **Sign Up** - Create new user accounts

### User Features

- **User Authentication** - Login/Signup with local storage
- **Watchlist** - Add/remove items from personal watchlist (localStorage)
- **Search Functionality** - Search dramas and movies by title
- **Genre Filtering** - Filter content by multiple genres
- **Responsive Navigation** - Mobile-friendly hamburger menu
- **User Dashboard** - Welcome message for logged-in users

## 📁 Project Structure

```
kdrama-hub/
├── index.html                 # Home page
├── pages/
│   ├── movies.html           # Movies page
│   ├── dramas.html           # K-Dramas page
│   ├── trending.html         # Trending page
│   ├── login.html            # Login page
│   └── signup.html           # Sign Up page
├── assets/
│   ├── css/
│   │   └── style.css         # All styling (responsive)
│   └── js/
│       ├── data.js           # Sample data (8 movies, 8 dramas)
│       └── script.js         # Core functionality
└── README.md                 # This file
```

## 🎨 Design System

### Colors

- **Primary Color**: #E50914 (Netflix Red)
- **Secondary Color**: #141414 (Dark Background)
- **Light Background**: #221f1f
- **Card Background**: #2F2F2F
- **Text Primary**: #ffffff
- **Text Secondary**: #808080

### Typography

- **Font Family**: Poppins, Roboto (with fallbacks)
- **Font Weights**: 400, 500, 600, 700, 800

### Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🚀 Getting Started

### 1. Clone or Download

```bash
# If using git
git clone <repository-url>

# Or simply download and extract the files
```

### 2. Open in Browser

```bash
# Simply open index.html in your browser
# Or use a local server:

# Python
python -m http.server 8000

# Node.js
npx http-server
```

### 3. Access the Website

```
http://localhost:8000
```

## 💾 Sample Data

The website includes **8 realistic Korean movies** and **8 K-dramas** with real titles:

### Featured Movies

- Parasite (2019)
- Train to Busan (2016)
- Squid Game: The Movie (2023)
- A Taxi Driver (2017)
- Along with the Gods (2017)
- Burning (2018)
- The Handmaiden (2016)
- Okja (2017)

### Featured Dramas

- Squid Game (9 episodes, 2 seasons)
- Descendants of the Sun (16 episodes)
- Itaewon Class (16 episodes)
- Crash Landing on You (16 episodes)
- My Love From the Star (21 episodes)
- Boys Over Flowers (25 episodes)
- Goblin (16 episodes)

## 🔧 Usage

### Search

- Click on the search bar in the navbar
- Type the title of a drama or movie
- Results filter in real-time

### Filter by Genre

- Use the genre filter buttons on each page
- Click a genre to show only content of that type
- Click "All" to show all content

### User Authentication

1. Click **Sign Up** to create a new account
2. Fill in your details (name, email, password)
3. Accept terms and create account
4. You'll be redirected to home with your welcome message
5. Click **Logout** to sign out

### Add to Watchlist

- Click on any drama or movie card
- Click "+ Add to Watchlist" button
- Watchlist is saved in browser's localStorage

## 🛠️ Customization

### Change Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
  --primary-color: #e50914; /* Change Netflix red */
  --secondary-color: #141414; /* Change dark background */
  --button-hover: #c40812; /* Change button hover color */
  /* ... other colors */
}
```

### Add More Content

Edit `assets/js/data.js` to add more movies or dramas:

```javascript
const moviesData = [
  {
    id: 9,
    title: "New Movie Title",
    genre: "Action",
    release_year: 2024,
    rating: 8.5,
    poster_url: "https://image-url",
    description: "Movie description",
    video_url: "#",
    views: 1500000,
  },
  // ... more movies
];
```

### Modify Navigation Links

Edit the navbar in HTML files to add new pages:

```html
<li><a href="newpage.html">New Page</a></li>
```

## 📱 Mobile-First Responsive Design

The website is fully responsive with breakpoints at:

- **1024px**: Large desktop adjustments
- **768px**: Tablet layout
- **480px**: Mobile layout

Mobile features include:

- Collapsed navigation menu (hamburger)
- Optimized card sizes
- Touch-friendly buttons
- Flexible grid layouts
- Optimized footer columns

## 🔐 Authentication

User data is stored in the browser's **localStorage**:

- No backend server required
- Data persists across browser sessions
- Perfect for demo/prototype purposes

For production, integrate with a real backend:

- Node.js + MongoDB
- Firebase Authentication
- AWS Cognito
- Django + PostgreSQL

## 📊 Local Storage Structure

### User Data

```javascript
{
  name: "User Name",
  email: "user@example.com",
  loggedIn: true
}
```

### Watchlist

```javascript
[
  { id: 1, title: "Drama Title", type: "drama", ... },
  { id: 2, title: "Movie Title", type: "movie", ... }
]
```

## 🎯 Future Enhancements

- **Video Player Integration** - Add real video streaming
- **User Reviews & Ratings** - Allow users to rate and review content
- **Recommendation Engine** - Suggest content based on viewing history
- **Watch History** - Track watched episodes and movies
- **Multiple Languages** - Support Korean, English, Spanish, etc.
- **Dark/Light Theme Toggle** - User preference settings
- **Advanced Filtering** - Filter by year, duration, episode count
- **Social Features** - Share with friends, follow users
- **Payment Integration** - Subscription plans
- **Admin Dashboard** - Manage content

## 🐛 Troubleshooting

### Search not working?

- Make sure the data attributes are set on cards: `data-search` and `data-genre`
- Check browser console for JavaScript errors

### Styling looks off?

- Clear browser cache (Ctrl+Shift+Delete)
- Make sure all CSS files are loaded correctly
- Check that Poppins/Roboto fonts are loading

### Navigation not working?

- Ensure all `href` attributes point to correct file paths
- Check that relative paths are correct from current page location

### Local storage not saving?

- Check browser privacy settings
- Make sure localStorage is enabled
- Try in a different browser

## 📝 License

This project is created for educational purposes. Korean drama and movie titles are used for demonstration only.

## 👨‍💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (Vanilla)** - No frameworks required
- **Local Storage API** - Client-side data persistence
- **Responsive Design** - Mobile-first approach

## 📞 Support

For issues or questions:

1. Check the troubleshooting section above
2. Review JavaScript console for errors
3. Verify all files are in correct directories

## 🎬 About K-Dramas

Korean dramas (K-dramas) have gained worldwide popularity for their:

- Compelling storytelling
- High production quality
- Diverse genres
- Strong character development
- Cultural authenticity

This project celebrates the beauty of Korean entertainment and makes it easy for fans to discover and watch their favorite content.

---

**Enjoy discovering amazing K-dramas and Korean movies! 🎭🍿**
