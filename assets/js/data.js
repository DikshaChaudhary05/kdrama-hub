// Sample K-Drama and Korean Movies Data
const moviesData = [
  {
    id: 1,
    title: "Parasite",
    genre: "Thriller",
    release_year: 2019,
    rating: 9.0,
    poster_url:
      "https://mcauliffebirdwatch.com/wp-content/uploads/2020/03/parasite.jpg",
    description:
      "A brilliant thriller about class struggle between a poor family and a wealthy household.",
    video_url: "#",
    views: 2500000,
    backdrop:
      "https://mcauliffebirdwatch.com/wp-content/uploads/2020/03/parasite.jpg",
  },
  {
    id: 2,
    title: "Train to Busan",
    genre: "Action",
    release_year: 2016,
    rating: 8.8,
    poster_url:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300&h=450&fit=crop",
    description: "A fast-paced zombie thriller set on a high-speed train.",
    video_url: "#",
    views: 2100000,
    backdrop:
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Squid Game: The Movie",
    genre: "Action",
    release_year: 2023,
    rating: 8.5,
    poster_url:
      "https://images.unsplash.com/photo-1559305033-c0bae08d0b87?w=300&h=450&fit=crop",
    description:
      "Desperate competitors face off in deadly games for a massive prize.",
    video_url: "#",
    views: 3200000,
    backdrop:
      "https://images.unsplash.com/photo-1535016120754-188fbb846c8f?w=1200&h=600&fit=crop",
  },
  {
    id: 4,
    title: "A Taxi Driver",
    genre: "Drama",
    release_year: 2017,
    rating: 8.4,
    poster_url:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
    description:
      "A compelling historical drama about a taxi driver during civil unrest.",
    video_url: "#",
    views: 1800000,
    backdrop:
      "https://images.unsplash.com/photo-1489599849228-ed49395eb3cc?w=1200&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Along with the Gods",
    genre: "Fantasy",
    release_year: 2017,
    rating: 7.9,
    poster_url:
      "https://images.unsplash.com/photo-1537459363814-c6244da4d83f?w=300&h=450&fit=crop",
    description:
      "A firefighter's afterlife journey unfolds in this visual spectacle.",
    video_url: "#",
    views: 1600000,
    backdrop:
      "https://images.unsplash.com/photo-1518992028580-eb56b4b31d00?w=1200&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Burning",
    genre: "Thriller",
    release_year: 2018,
    rating: 8.1,
    poster_url:
      "https://images.unsplash.com/photo-1571847549984-c7cf26b21dbc?w=300&h=450&fit=crop",
    description: "A mysterious and atmospheric thriller with a shocking twist.",
    video_url: "#",
    views: 950000,
    backdrop:
      "https://images.unsplash.com/photo-1548689016-0267d646c9c0?w=1200&h=600&fit=crop",
  },
  {
    id: 7,
    title: "The Handmaiden",
    genre: "Romance",
    release_year: 2016,
    rating: 8.3,
    poster_url:
      "https://images.unsplash.com/photo-1489599849228-ed49395eb3cc?w=300&h=450&fit=crop",
    description: "An elaborate con between two women in 1930s Korea.",
    video_url: "#",
    views: 1500000,
    backdrop:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?w=1200&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Okja",
    genre: "Adventure",
    release_year: 2017,
    rating: 7.7,
    poster_url:
      "https://images.unsplash.com/photo-1536440936387-37b8e42ba9a2?w=300&h=450&fit=crop",
    description:
      "A girl fights corporate forces to protect her giant creature companion.",
    video_url: "#",
    views: 1200000,
    backdrop:
      "https://images.unsplash.com/photo-1533613220915-609f21a97be0?w=1200&h=600&fit=crop",
  },
];

const dramasData = [
  {
    id: 1,
    title: "Squid Game",
    genre: "Thriller",
    episodes: 9,
    rating: 8.0,
    poster_url:
      "https://images.unsplash.com/photo-1571847549984-c7cf26b21dbc?w=300&h=450&fit=crop",
    description:
      "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a massive prize.",
    views: 4200000,
    seasons: 2,
    cast: ["Lee Jung-jae", "Park Hae-soo", "Jung Ho-yeon"],
    status: "Ongoing",
    backdrop:
      "https://images.unsplash.com/photo-1535016120754-188fbb846c8f?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Descendants of the Sun",
    genre: "Romance",
    episodes: 16,
    rating: 8.5,
    poster_url:
      "https://images.unsplash.com/photo-1578888946835-55a130b67c1f?w=300&h=450&fit=crop",
    description:
      "A soldier and a doctor meet in a war-torn country and develop feelings amid danger.",
    views: 2800000,
    seasons: 1,
    cast: ["Song Joong-ki", "Song Hye-kyo", "Jin Goo"],
    status: "Completed",
    backdrop:
      "https://images.unsplash.com/photo-1542281286-9e0eeeba801e?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Itaewon Class",
    genre: "Drama",
    episodes: 16,
    rating: 8.3,
    poster_url:
      "https://images.unsplash.com/photo-1489599849228-ed49395eb3cc?w=300&h=450&fit=crop",
    description:
      "An ex-convict seeks revenge against powerful figures in Seoul's Itaewon district.",
    views: 2100000,
    seasons: 1,
    cast: ["Park Seo-joon", "Kim Da-mi", "Oh Nella"],
    status: "Completed",
    backdrop:
      "https://images.unsplash.com/photo-1548689016-0267d646c9c0?w=1200&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Crash Landing on You",
    genre: "Romance",
    episodes: 16,
    rating: 8.7,
    poster_url:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
    description:
      "A South Korean heiress accidentally paraglides into North Korea and falls for an army officer.",
    views: 3100000,
    seasons: 1,
    cast: ["Yoon Se-ri", "Ri Jeong-hyeok", "Seo Dan"],
    status: "Completed",
    backdrop:
      "https://images.unsplash.com/photo-1489599849228-ed49395eb3cc?w=1200&h=600&fit=crop",
  },
  {
    id: 5,
    title: "My Love From the Star",
    genre: "Fantasy",
    episodes: 21,
    rating: 8.4,
    poster_url:
      "https://images.unsplash.com/photo-1537459363814-c6244da4d83f?w=300&h=450&fit=crop",
    description:
      "An ancient alien falls in love with a modern-day actress after returning to Earth.",
    views: 2400000,
    seasons: 1,
    cast: ["Kim Soo-hyun", "Jun Ji-hyun", "Lee Hwi-jae"],
    status: "Completed",
    backdrop:
      "https://images.unsplash.com/photo-1518992028580-eb56b4b31d00?w=1200&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Boys Over Flowers",
    genre: "Romance",
    episodes: 25,
    rating: 8.1,
    poster_url:
      "https://images.unsplash.com/photo-1548789520-e70ba0cacfaa?w=300&h=450&fit=crop",
    description:
      "A poor girl attends an elite high school and gets caught up with four rich boys.",
    views: 2600000,
    seasons: 1,
    cast: ["Goo Hye-sun", "Lee Min-ho", "Kim Hyun-joong"],
    status: "Completed",
    backdrop:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Descendants of the Sun: The Movie",
    genre: "Action",
    episodes: 1,
    rating: 7.8,
    poster_url:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300&h=450&fit=crop",
    description:
      "The beloved couple from the drama reunites for an action-packed adventure.",
    views: 1800000,
    seasons: 1,
    cast: ["Song Joong-ki", "Song Hye-kyo"],
    status: "Movie",
    backdrop:
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1200&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Goblin",
    genre: "Fantasy",
    episodes: 16,
    rating: 8.6,
    poster_url:
      "https://images.unsplash.com/photo-1536440936387-37b8e42ba9a2?w=300&h=450&fit=crop",
    description:
      "A goblin who needs a human to pull out a sword meets the reaper and a grim reaper's assistant.",
    views: 3000000,
    seasons: 1,
    cast: ["Gong Yoo", "Kim Go-eun", "Lee Dong-wook"],
    status: "Completed",
    backdrop:
      "https://images.unsplash.com/photo-1533613220915-609f21a97be0?w=1200&h=600&fit=crop",
  },
];

// Featured items for hero carousel
const featuredItems = [
  {
    id: 1,
    title: "Squid Game",
    type: "drama",
    genre: "Thriller",
    rating: 8.0,
    poster_url:
      "https://www.monash.edu/__data/assets/image/0019/3046501/EN_SQdGame_Main_PlayGround_Horizontal_RGB_PRE.jpg",
    description:
      "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a massive prize.",
    backdrop:
      "https://www.monash.edu/__data/assets/image/0019/3046501/EN_SQdGame_Main_PlayGround_Horizontal_RGB_PRE.jpg",
  },
  {
    id: 2,
    title: "Crash Landing on You",
    type: "drama",
    genre: "Romance",
    rating: 8.7,
    poster_url:
      "https://resizing.flixster.com/6ygGnWTfgX8oc8gF6_Y_DNGVSMY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17693695_b_h8_aa.jpg",
    description:
      "A South Korean heiress accidentally paraglides into North Korea and falls for an army officer.",
    backdrop:
      "https://resizing.flixster.com/6ygGnWTfgX8oc8gF6_Y_DNGVSMY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17693695_b_h8_aa.jpg",
  },
  {
    id: 3,
    title: "Parasite",
    type: "movie",
    genre: "Thriller",
    rating: 9.0,
    poster_url:
      "https://mcauliffebirdwatch.com/wp-content/uploads/2020/03/parasite.jpg",
    description:
      "A brilliant thriller about class struggle between a poor family and a wealthy household.",
    backdrop:
      "https://mcauliffebirdwatch.com/wp-content/uploads/2020/03/parasite.jpg",
  },
  {
    id: 4,
    title: "Goblin",
    type: "drama",
    genre: "Fantasy",
    rating: 8.6,
    poster_url:"https://raistlin0903.wordpress.com/wp-content/uploads/2017/05/image26.jpg",
    description:
      "A goblin who needs a human to pull out a sword meets the reaper and a grim reaper's assistant.",
    backdrop:
      "https://raistlin0903.wordpress.com/wp-content/uploads/2017/05/image26.jpg",
  },
  {
    id: 5,
    title: "Train to Busan",
    type: "movie",
    genre: "Action",
    rating: 8.8,
    poster_url:"https://img.airtel.tv/unsafe/fit-in/1600x0/filters:format(webp)/https://xstreamcp-assets-msp.streamready.in/assets/LIONSGATEPLAY/MOVIE/68f0ced1e3269f22c65d6ad1/images/LANDSCAPE_169/TRAINTOBUSAN0Y2016M-airtel-cover-poster-1923X1082.jpg?o=production",
      //"https://soniassees.wordpress.com/wp-content/uploads/2016/07/2dcf15d772ce8275e4137e9cef7feddc.jpg",
    description: "A fast-paced zombie thriller set on a high-speed train.",
    backdrop:"https://img.airtel.tv/unsafe/fit-in/1600x0/filters:format(webp)/https://xstreamcp-assets-msp.streamready.in/assets/LIONSGATEPLAY/MOVIE/68f0ced1e3269f22c65d6ad1/images/LANDSCAPE_169/TRAINTOBUSAN0Y2016M-airtel-cover-poster-1923X1082.jpg?o=production",
      //"https://soniassees.wordpress.com/wp-content/uploads/2016/07/2dcf15d772ce8275e4137e9cef7feddc.jpg",
  },
];

const genres = [
  "All",
  "Romance",
  "Thriller",
  "Action",
  "Comedy",
  "Historical",
  "Fantasy",
  "Drama",
];

const trendingDramas = dramasData.slice(0, 5).map((drama) => ({
  ...drama,
  trendRank: 1,
  percentage: Math.floor(Math.random() * 100) + 50,
}));

const trendingMovies = moviesData.slice(0, 5).map((movie) => ({
  ...movie,
  trendRank: 1,
  percentage: Math.floor(Math.random() * 100) + 50,
}));
