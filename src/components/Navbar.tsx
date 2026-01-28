import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../redux/store';

const Navbar: React.FC = () => {
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
                            FakeCart
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/cart"
                            className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            aria-label="Cart"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {totalQuantity > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
                                    {totalQuantity}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
