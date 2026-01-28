import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-600">
          <Navbar />

          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <footer className="bg-white border-t border-gray-100 py-12 mt-20">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gray-400 text-sm font-medium">
                &copy; {new Date().getFullYear()} FakeCart Store
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
