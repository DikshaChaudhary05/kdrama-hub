# 🎬 K-Drama Hub - Quick Start Guide

## ✨ What's Included

Your K-Drama Hub project includes:

### 📄 Pages

- ✅ **index.html** - Home page with hero banner, trending, and featured content
- ✅ **pages/movies.html** - Browse all Korean movies
- ✅ **pages/dramas.html** - Browse all K-dramas
- ✅ **pages/trending.html** - View trending dramas and movies
- ✅ **pages/login.html** - User login page
- ✅ **pages/signup.html** - User registration page
- ✅ **pages/watchlist.html** - Personal watchlist page

### 🎨 Styling

- ✅ **assets/css/style.css** - Complete responsive CSS with:
  - Netflix-style dark theme
  - Responsive design (desktop, tablet, mobile)
  - Smooth animations and transitions
  - Mobile hamburger menu

### 💻 JavaScript

- ✅ **assets/js/data.js** - Sample data (8 movies, 8 dramas)
- ✅ **assets/js/script.js** - Core functionality including:
  - Search functionality
  - Genre filtering
  - User authentication (localStorage)
  - Carousel and grid creation
  - Watchlist management

### 📋 Documentation

- ✅ **README.md** - Complete project documentation

---

## 🚀 How to Run

### Option 1: Direct Browser (Simplest)

1. Open `index.html` directly in your browser
2. That's it! No server needed for basic functionality

### Option 2: Local Server (Recommended)

#### Using Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js

```bash
# Install http-server
npm install -g http-server

# Run server
http-server
```

#### Using VS Code

- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

---

## 🎮 Try These Features

### 1. Search Functionality

- Go to home page
- Type in the search bar
- Watch results filter in real-time

### 2. Genre Filtering

- Scroll to "Browse by Genre"
- Click any genre (Romance, Thriller, Action, etc.)
- See content filter by selected genre

### 3. Create Account

- Click "Sign Up" button
- Fill in your details
- Create your account (saved in browser)

### 4. Add to Watchlist

- Click on any movie or drama
- Click "+ Add to Watchlist"
- Go to Watchlist page to view saved items

### 5. Responsive Design

- Resize your browser window
- See the layout adapt to different screen sizes
- Try on mobile devices

---

## 📊 Sample Data

**8 Popular Korean Movies:**

- Parasite ⭐ 9.0
- Train to Busan ⭐ 8.8
- Squid Game: The Movie ⭐ 8.5
- A Taxi Driver ⭐ 8.4
- Along with the Gods ⭐ 7.9
- Burning ⭐ 8.1
- The Handmaiden ⭐ 8.3
- Okja ⭐ 7.7

**8 Popular K-Dramas:**

- Squid Game ⭐ 8.0 (9 episodes)
- Descendants of the Sun ⭐ 8.5 (16 episodes)
- Itaewon Class ⭐ 8.3 (16 episodes)
- Crash Landing on You ⭐ 8.7 (16 episodes)
- My Love From the Star ⭐ 8.4 (21 episodes)
- Boys Over Flowers ⭐ 8.1 (25 episodes)
- Goblin ⭐ 8.6 (16 episodes)
- Descendants of the Sun: The Movie ⭐ 7.8 (Movie)

---

## 🎨 Customization Quick Tips

### Change Brand Colors

Edit the first 10 lines in `assets/css/style.css`:

```css
:root {
  --primary-color: #e50914; /* Netflix Red - Change here */
  --secondary-color: #141414; /* Dark Background - Change here */
  --light-bg: #221f1f;
  --text-primary: #ffffff;
  --text-secondary: #808080;
  --button-hover: #c40812;
  --card-bg: #2f2f2f;
}
```

### Add More Content

Edit `assets/js/data.js` to add movies or dramas:

```javascript
const moviesData = [
  {
    id: 1,
    title: "Your Movie Title",
    genre: "Action",
    release_year: 2024,
    rating: 8.5,
    poster_url: "YOUR IMAGE URL",
    description: "Description here",
    video_url: "#",
    views: 1000000,
  },
  // ... add more
];
```

### Update Navigation Links

Edit navbar in any HTML file:

```html
<ul class="nav-links">
  <li><a href="/">Home</a></li>
  <li><a href="your-new-page.html">New Page</a></li>
  <!-- ... -->
</ul>
```

---

## 🔐 User Authentication (Demo)

- Uses **browser localStorage** (no backend needed)
- Data persists between sessions
- Perfect for prototyping

**Login Test:**

- Email: any@email.com
- Password: anything123

---

## 📱 Responsive Breakpoints

| Device  | Width      | Features                           |
| ------- | ---------- | ---------------------------------- |
| Desktop | 1024px+    | Full navbar, search bar visible    |
| Tablet  | 768-1023px | Reduced padding, optimized grid    |
| Mobile  | <768px     | Hamburger menu, single column grid |

---

## 🛠️ Troubleshooting

### Issue: Page won't load

**Solution:** Make sure you're opening from the correct path (index.html at root)

### Issue: Styling looks broken

**Solution:** Clear browser cache (Ctrl+Shift+Delete) and refresh

### Issue: Images not showing

**Solution:** The images use placeholder URLs. Replace with real image URLs in data.js

### Issue: Search or filters not working

**Solution:** Check browser console (F12) for JavaScript errors

### Issue: Can't add to watchlist

**Solution:** Make sure localStorage is enabled in your browser

---

## 📝 File Checklist

Before you dive in, confirm you have:

- ✅ index.html (root)
- ✅ pages/ folder with all 7 HTML files
- ✅ assets/css/style.css
- ✅ assets/js/data.js
- ✅ assets/js/script.js
- ✅ README.md

---

## 🚀 Next Steps

### Short Term

1. Customize colors and branding
2. Add more Korean movies/dramas data
3. Test search and filtering
4. Create accounts and build watchlist

### Medium Term

1. Replace placeholder images with real posters
2. Add video player integration
3. Create more genre categories
4. Add user reviews and ratings

### Long Term

1. Build a backend (Node.js, Django, etc.)
2. Add real video streaming
3. Implement payment/subscription
4. Deploy to cloud (Vercel, netlify, AWS)

---

## 💡 Pro Tips

- **Color Scheme**: Uses Netflix signature red (#E50914) - you can customize
- **Responsive**: Mobile-first design - works great on all devices
- **SEO Ready**: Semantic HTML structure, proper meta tags
- **Performance**: No heavy frameworks - pure HTML/CSS/JS
- **Storage**: User data in localStorage - works offline

---

## 🎓 Learning Opportunities

This project teaches:

- HTML5 semantic markup
- CSS3 flexbox & grid
- Vanilla JavaScript (no frameworks)
- Responsive web design
- LocalStorage API
- DOM manipulation
- Event handling

---

## 📞 Quick Reference

| Feature           | Location             | How to Use                             |
| ----------------- | -------------------- | -------------------------------------- |
| Add Content       | assets/js/data.js    | Add to moviesData or dramasData arrays |
| Change Colors     | assets/css/style.css | Edit :root variables                   |
| Update Navigation | Any HTML file        | Edit .nav-links ul                     |
| Add Page          | pages/ folder        | Create new .html file                  |
| User Data         | LocalStorage         | Automatic, view in DevTools            |

---

## 🎬 Enjoy Your K-Drama Hub!

You now have a fully functional, premium-looking Korean drama and movie streaming website. Start customizing, adding content, and enjoy building your perfect K-entertainment platform!

**Happy coding! 🎉**

---

_Last Updated: March 2024_
_K-Drama Hub - Your gateway to Korean entertainment_
