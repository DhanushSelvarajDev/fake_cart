import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../redux/store';
import { clearCart } from '../redux/cartSlice';
import CartItem from '../components/CartItem';
import { ShoppingBag, ArrowLeft, CreditCard, Trash2 } from 'lucide-react';
import { formatCurrency } from '../utils/currency';

const Cart: React.FC = () => {
    const { items, totalAmount, totalQuantity } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="py-10 max-w-5xl mx-auto">
            <div className="mb-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors mb-4"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Continue Shopping
                </Link>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                    Shopping <span className="text-blue-600">Cart</span>
                </h1>
                <p className="text-gray-500 mt-2">
                    You have {totalQuantity} items in your cart
                </p>
            </div>

            {items.length === 0 ? (
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 text-center flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag className="w-12 h-12 text-gray-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                    <p className="text-gray-500 max-w-sm mb-8">
                        Looks like you hasn't added anything to your cart yet. Browse our collections to find something you love!
                    </p>
                    <Link
                        to="/"
                        className="px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                    >
                        Explore Products
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Items List */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                                <h3 className="font-bold text-gray-900">Cart Items</h3>
                                <button
                                    onClick={() => dispatch(clearCart())}
                                    className="text-xs font-bold text-red-500 hover:text-red-600 flex items-center gap-1.5 transition-colors"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                    Clear Cart
                                </button>
                            </div>
                            <div className="divide-y divide-gray-50 px-6">
                                {items.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sticky top-24">
                            <h3 className="font-bold text-gray-900 mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-gray-900">{formatCurrency(totalAmount)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Tax</span>
                                    <span className="font-semibold text-gray-900">{formatCurrency(0)}</span>
                                </div>
                                <div className="pt-4 border-t border-gray-50 flex justify-between">
                                    <span className="font-bold text-gray-900">Total</span>
                                    <span className="text-xl font-black text-blue-600">{formatCurrency(totalAmount)}</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 active:scale-[0.98]">
                                <CreditCard className="w-5 h-5" />
                                Checkout Now
                            </button>

                            <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-widest font-bold">
                                Secure Checkout Powered by FakeStore
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
