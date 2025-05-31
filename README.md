# React Redux Counter Application

A simple yet feature-rich counter application built with React and Redux Toolkit, demonstrating state management and component organization.

## Features

- Increment/Decrement counter by 1
- Add/Subtract custom values
- Privacy toggle to hide counter value
- Modern UI with Bootstrap styling
- Centralized state management with Redux

## Tech Stack

- React 18
- Redux Toolkit
- React-Redux
- Bootstrap 5
- Vite (Build Tool)

## Project Structure

```
src/
├── components/
│   ├── Controls.jsx       # Counter control buttons and input
│   ├── DisplayCounter.jsx # Counter value display
│   ├── Header.jsx        # Application header
│   └── PrivacyMessage.jsx # Privacy toggle message
├── store/
│   ├── counterSlice.js   # Counter reducer and actions
│   ├── privacySlice.js   # Privacy toggle state
│   └── index.js          # Redux store configuration
├── App.jsx               # Main application component
└── main.jsx             # Application entry point
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features Usage

- Click "+1" or "-1" buttons to increment/decrement the counter
- Enter a number in the input field and click "Add" or "Subtract"
- Toggle privacy mode to hide the counter value
- All state changes are managed through Redux

## Contributing

Feel free to submit issues and enhancement requests!