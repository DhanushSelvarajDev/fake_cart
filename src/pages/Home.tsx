import React from 'react';
import ProductList from '../components/ProductList';
import { Sparkles } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <div className="py-10">
            <header className="mb-12">
                <div className="flex items-center gap-2 mb-3">
                    <span className="p-1 px-2 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-md flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" /> New Arrivals
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                    Latest <span className="text-blue-600">Collections</span>
                </h1>
                <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
                    Premium products curated just for you. Quality meets affordability in our latest selection of handpicked items.
                </p>
            </header>

            <ProductList />
        </div>
    );
};

export default Home;
