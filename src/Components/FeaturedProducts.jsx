import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RingsData from '../DATA/RingsData.jsx';
import NecklacesData from '../DATA/NicklacesData.jsx';
import EarringsData from '../DATA/EarringsData.jsx';
import BraceletsData from '../DATA/BraceletsData.jsx';
import { BsCartPlus } from "react-icons/bs";


const ProductCard = ({ product, addToCart }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={product.images[0]} alt={product.name} />
            <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded-lg">
                New
            </div>
        </div>
        <div className="px-6 py-4">
            <h3 className="font-bold text-md mb-2">{product.name}</h3>
            <p className="text-gray-700 text-base">
                {product.description || "No description available."}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
            <span className="text-gray-900 font-bold text-xl">${product.price}</span>
            <button
                onClick={() => addToCart(product)}
                className="bg-yellow-600 text-white  py-2 px-4 rounded hover:bg-yellow-500">
                <BsCartPlus />
            </button>
        </div>
    </div>
);

const FeaturedProducts = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (!cart.some(item => item.id === product.id)) {
            setCart(prevCart => [...prevCart, product]);
            toast.success('Product added to cart!');
        } else {
            toast.info('Product already in the cart!');
        }
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const featuredProducts = [
        RingsData[0],
        NecklacesData[0],
        EarringsData[0],
        BraceletsData[0]
    ];

    return (
        <>
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Featured Products</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Explore our latest offerings
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default FeaturedProducts;
