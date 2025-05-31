# React Redux Counter Application 🚀

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-purple.svg)](https://redux-toolkit.js.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0-blueviolet.svg)](https://getbootstrap.com/)
[![Vite](https://img.shields.io/badge/Vite-Latest-yellow.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, interactive counter application showcasing React and Redux Toolkit integration with a sleek Bootstrap UI.

## ✨ Features

### 🎯 Core Functionality
- ⬆️ Increment counter by 1
- ⬇️ Decrement counter by 1
- ➕ Add custom values
- ➖ Subtract custom values
- 🔒 Privacy toggle to hide counter value
- 💅 Modern UI with Bootstrap styling
- 🔄 Centralized state management with Redux

## 🛠️ Tech Stack

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg" alt="bootstrap" width="40" height="40"/>
  <img src="https://vitejs.dev/logo.svg" alt="vite" width="40" height="40"/>
</div>

- **React 18** - UI Library
- **Redux Toolkit** - State Management
- **React-Redux** - Redux Bindings
- **Bootstrap 5** - Styling Framework
- **Vite** - Build Tool

## 📁 Project Structure

```bash
src/
├── components/           # React Components
│   ├── Controls.jsx     # 🎮 Counter control buttons
│   ├── DisplayCounter   # 🔢 Counter display
│   ├── Header          # 📑 App header
│   └── PrivacyMessage  # 🔒 Privacy notice
├── store/               # Redux Store
│   ├── counterSlice    # 🔄 Counter logic
│   ├── privacySlice    # 🛡️ Privacy state
│   └── index           # 🏪 Store config
├── assets/             # Static assets
├── App.jsx             # 📱 Root component
├── App.css             # 🎨 Styles
└── main.jsx           # 🚀 Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/react-redux-counter.git
cd react-redux
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. View the app:
Open your browser and visit `http://localhost:5173`

## 🎮 Usage Guide

### Basic Operations
1. **Simple Counting:**
   - Click `+1` to increment
   - Click `-1` to decrement

2. **Custom Values:**
   - Enter a number in the input field
   - Click `Add` or `Subtract`

3. **Privacy Mode:**
   - Click `Privacy Toggle` to hide/show the counter value

## 📜 Available Scripts

| Command | Description |
|---------|------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Team for the amazing library
- Redux Team for the state management solution
- Bootstrap Team for the UI components

---
<div align="center">
  Made with ❤️ by Aditya
</div>