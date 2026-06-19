# RRC - React Components

This is the React implementation of RangS Reusable Components (RRC), built with React 19+ and Vite for optimal development experience.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📦 Available Components

### Layout Components

#### Header
A page header component with title and subtitle support.
```jsx
import Header from './component/Header';

<Header 
  headtitle="Page Title" 
  headsubtitle="Page Subtitle"
/>
```

#### Navigation
Responsive navigation bar with logo, menu links, and hamburger menu for mobile.
```jsx
import Navigation from './component/Navigation';

<Navigation 
  webname="Website Name"
  nav1="Link 1"
  nav2="Link 2"
  nav3="Link 3"
/>
```

#### Card
Reusable card component for displaying content.
```jsx
import Card from './component/Card';

<Card 
  cardtitle="Card Title"
  content="Card content goes here"
/>
```

#### Footer
Footer component with dynamic copyright year.
```jsx
import Footer from './component/Footer';

<Footer footerc="Copyright Text" />
```

## 📁 Project Structure

```
src/
├── component/           # React components
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── Navigation.jsx
├── assets/
│   └── css/            # Component styles
│       ├── Card.css
│       ├── Footer.css
│       ├── Header.css
│       └── Navigation.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🛠 Tech Stack

- **React** 19+
- **Vite** - Next generation frontend build tool
- **ESLint** - Code quality and consistency
- **CSS** - Component styling

## 🎨 Styling

Each component includes its own CSS file for modular styling:
- `Card.css` - Card component styles
- `Header.css` - Header component styles
- `Footer.css` - Footer component styles
- `Navigation.css` - Navigation component styles with responsive design

## 📝 Development

### Build Tools

**Vite Plugins:**
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs) for fast HMR

### ESLint Configuration

For production applications, we recommend extending the ESLint configuration to include TypeScript support. See the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for more information.

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Main RRC Repository](https://github.com/RangS-1/RRC)
