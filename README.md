# FakeCart - Modern E-Commerce UI

A premium, high-performance E-Commerce Product Listing and Cart application built with React, Vite, TypeScript, and Redux Toolkit. This project focuses on a strict separation of concerns between UI and business logic.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone or Navigate to the project directory:**
   ```powershell
   cd D:\Projects\FakeCart\fake_cart
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Start the development server:**
   ```powershell
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API**: [FakeStore API](https://fakestoreapi.com/)

---

## 🏗️ Architecture & How It Works

### 1. Strict Separation of Concerns
The application follows a strict rule: **UI components must not contain business logic.**

- **Presentation (UI)**: Components in `src/components` and `src/pages` are responsible only for rendering JSX and dispatching Redux actions. They do not calculate totals or modify state directly.
- **Business Logic (Redux)**: All cart math (adding/removing items, calculating `totalQuantity` and `totalAmount`) is centralized in `src/redux/cartSlice.ts`.

### 2. State Persistence
The Redux store is configured to automatically sync the cart state to `localStorage`. On application load, it rehydrates the state, ensuring the user's cart is preserved across sessions.

### 3. Service Layer
API calls are abstracted into `src/services/api.ts`, making the data fetching logic clean and reusable without cluttering the components.

### 4. Advanced Animations
GSAP is used via custom React hooks (`src/hooks/useGSAPAnimations.ts`) to provide smooth entrance animations for products and the cart drawer, enhancing the "premium" feel of the interface.

---

## 📁 Folder Structure

```text
src/
 ├── components/        # UI-only components (Navbar, ProductCard, CartDrawer)
 ├── pages/             # Screen-level UI (Home)
 ├── redux/             # Redux Store and Cart Slice (Business Logic)
 ├── services/          # API Service Layer (FakeStore API calls)
 ├── hooks/             # GSAP Animation Hooks
 ├── utils/             # Formatting & Helper functions
 ├── App.tsx            # Main Application Shell
 └── main.tsx           # React Entry Point
```

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production (includes TypeScript checks).
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.
