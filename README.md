# RRC - RangS Reusable Components

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Repository](https://img.shields.io/badge/Repository-RRC-blue)](https://github.com/RangS-1/RRC)

A comprehensive library of reusable, well-tested components designed for modern web development. RRC provides a collection of components across multiple frameworks and technologies, enabling faster development and consistent design patterns.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Component Categories](#component-categories)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Framework Agnostic** - Components for React, Vue, vanilla JavaScript, and more
- **Production Ready** - Well-tested, optimized, and battle-tested components
- **Easy to Integrate** - Simple API with comprehensive documentation
- **TypeScript Support** - Full TypeScript support with proper type definitions
- **Modular Design** - Use only what you need, zero unnecessary bloat
- **Consistent Styling** - Unified design language across all components
- **Accessibility First** - WCAG compliant components for inclusive design
- **Active Maintenance** - Regularly updated with latest best practices

## 📁 Project Structure

```
RRC/
├── React/                 # React components using Vite
│   ├── src/
│   │   ├── components/   # React component library
│   │   ├── hooks/        # Custom React hooks
│   │   ├── utils/        # Utility functions
│   │   └── styles/       # Global and component styles
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── docs/                  # Documentation (coming soon)
├── LICENSE               # MIT License
└── README.md
```

## 🚀 Installation

### React Components

```bash
# Clone the repository
git clone https://github.com/RangS-1/RRC.git
cd React

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Requirements

- **Node.js** 16+ or higher
- **npm** or **yarn** package manager

## ⚡ Quick Start

### React Components

1. **Import and use a component:**

```jsx
import { Button } from './components';

export default function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click Me
    </Button>
  );
}
```

2. **Development workflow:**

```bash
cd React
npm run dev        # Start dev server
npm run build      # Build production
npm run lint       # Run linter
```

## 🎨 Component Categories

### Currently Available

- **React** - React 19+ components with hooks support
  - UI Components (buttons, cards, modals, etc.)
  - Form Components (inputs, selectors, validators)
  - Layout Components (containers, grids, navigation)
  - Utility Components

### Coming Soon

- **Vue** - Vue 3 composition API components
- **Web Components** - Framework-agnostic custom elements
- **Angular** - Angular 17+ components
- **Svelte** - Svelte 4+ components

## 📖 Usage Examples

### React Button Component

```jsx
import { Button } from './components/Button';

export function Demo() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger" disabled>Disabled</Button>
    </>
  );
}
```

### React Form Input

```jsx
import { Input } from './components/Input';
import { useState } from 'react';

export function FormDemo() {
  const [value, setValue] = useState('');

  return (
    <Input
      type="email"
      placeholder="Enter your email"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
    />
  );
}
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Code Quality

We follow:
- **ESLint** for code linting
- **React Hooks** best practices
- **Semantic HTML** for accessibility
- **CSS Modules/BEM** for styling

## 🤝 Contributing

To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/awesome-component`)
3. **Commit** your changes (`git commit -m 'Add awesome component'`)
4. **Push** to the branch (`git push origin feature/awesome-component`)
5. **Open** a Pull Request

### Guidelines

- Follow the existing code style
- Write clear, descriptive commit messages
- Add tests for new components
- Update documentation
- Ensure all linting passes (`npm run lint`)

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
Copyright (c) 2026 RangS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

## 📞 Support

For issues, feature requests, or questions:
- Open an [Issue](https://github.com/yourusername/RRC/issues)
- Start a [Discussion](https://github.com/yourusername/RRC/discussions)

---

Built from programmer to programmer
