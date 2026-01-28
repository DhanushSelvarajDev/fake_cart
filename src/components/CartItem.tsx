import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    type CartItem as CartItemType
} from '../redux/cartSlice';
import { useCartItemAnimation } from '../hooks/useGSAPAnimations';
import { formatCurrency } from '../utils/currency';
import { Plus, Minus, Trash2 } from 'lucide-react';

interface CartItemProps {
    item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = React.memo(({ item }) => {
    const dispatch = useDispatch();
    const itemRef = useRef<HTMLDivElement>(null);

    useCartItemAnimation(itemRef);

    return (
        <div
            ref={itemRef}
            className="flex gap-4 py-6 border-b border-gray-100 last:border-0"
        >
            {/* Image */}
            <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain mix-blend-multiply"
                />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start gap-2">
                        <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">
                            {item.title}
                        </h4>
                        <button
                            onClick={() => dispatch(removeItem({ id: item.id }))}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            aria-label="Remove item"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-sm font-bold text-blue-600 mt-1">
                        {formatCurrency(item.price)}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
                        <button
                            onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                            className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all text-gray-500 disabled:opacity-30"
                            aria-label="Decrease quantity"
                        >
                            <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-gray-700">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                            className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all text-gray-500"
                            aria-label="Increase quantity"
                        >
                            <Plus className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <p className="text-xs font-semibold text-gray-400">
                        Subtotal: <span className="text-gray-700">{formatCurrency(item.price * item.quantity)}</span>
                    </p>
                </div>
            </div>
        </div>
    );
});

CartItem.displayName = 'CartItem';

export default CartItem;
