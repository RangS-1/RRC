// ===========================
// ARTICLES DATA
// Semua artikel blog disimpan di sini.
// Tambahkan artikel baru dengan menambahkan objek ke array ini.
// ===========================

const ARTICLES = [
  {
    id: 1,
    title: "This is title for pages/example1/index.html",
    slug: "celeste-game-review",
    summary: "And this is the summary of the article.",
    category: "game",
    tags: ["review", "indie-game", "celeste", "game"],
    date: "2026-05-20",
    readTime: "15 min",
    url: "/pages/example1/"
  },
  {
    id: 2,
    title: "Made sure to check your article-data.js",
    slug: "absolute-arch-linux-experience",
    summary: "Because it change right here!",
    category: "technology",
    tags: ["review", "linux", "distro", "arch"],
    date: "2026-05-30",
    readTime: "20 min",
    url: "/pages/example2/"
  }
];

// ===========================
// CATEGORIES
// ===========================
const CATEGORIES = [
  { value: "all", label: "semua kategori" },
  { value: "technology", label: "technology" },
  { value: "game", label: "game" },
  { value: "art", label: "art" },
  { value: "life", label: "life" }
];
// You can make your own Category, this will add a dropdown in dashboard.html