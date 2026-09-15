# Personal Portfolio & Help Center Web Template

A modern, responsive, and dynamic web portfolio template featuring grouped project showcases, interactive help resource cards, a modal detail view, and a floating contact action button.

## Features

- **Light Theme**: White-dominant modern aesthetic with custom color accents (`#ff6b77`, `#b0c8f8`, `#b19ff1`, `#e2bd8b`, `#c14368`).
- **Dynamic Projects Showcase**: Edit `assets/js/projects.js` to update project cards automatically, ordered by category (Web, Python, Flutter, Android, Scripting, Contribution).
- **Interactive Help Center**: Product/Guide cards rendered dynamically from `assets/js/help.js` with short description previews and full detail popup modals upon click.
- **Floating Action Button**: Fixed floating mail button in the bottom right corner.
- **Zero External JS Dependencies**: Lightweight vanilla JavaScript and clean CSS3.

## How to Customize

1. **Personal Information**:
   - Edit `index.html` to update your Name, Role, Bio, and Navbar logo.
   - Replace `assets/img/pfp.jpg` with your profile picture.
   - Replace `assets/img/wallpaper.png` with your header background.

2. **Projects**:
   - Open `assets/js/projects.js` and edit or add items to `window.projectsData`.
   - Update `github` and `demo` links.

3. **Help Center / Resource Cards**:
   - Open `assets/js/help.js` and edit items in `window.helpData`.
   - Update `shortDescription` for the card preview and `fullDescription` for the popup modal.
   - Set `buttonText` and `buttonUrl` for direct links or downloads.

## Author

[Azriels-Tech](https://github.com/azriels-tech/)