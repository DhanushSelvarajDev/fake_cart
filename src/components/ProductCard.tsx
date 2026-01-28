import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import type { Product } from '../services/api';
import { useProductCardAnimation } from '../hooks/useGSAPAnimations';
import { formatCurrency } from '../utils/currency';
import { Star, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
    const dispatch = useDispatch();
    const cardRef = useRef<HTMLDivElement>(null);

    useProductCardAnimation(cardRef);

    const handleAddToCart = () => {
        dispatch(
            addItem({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
            })
        );
    };

    return (
        <div
            ref={cardRef}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
        >
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
                {/* Hover overlay badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-gray-100 shadow-sm">
                    {product.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                        {product.title}
                    </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-3 h-3 ${i < Math.round(product.rating.rate)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-200'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-[11px] font-medium text-gray-400">
                        ({product.rating.count})
                    </span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-lg font-bold text-gray-900">
                        {formatCurrency(product.price)}
                    </span>

                    <button
                        onClick={handleAddToCart}
                        className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-200 transition-all duration-200 active:scale-90"
                        aria-label="Add to cart"
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
