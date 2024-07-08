import { MdOutlineDelete } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeaturedProducts from "../Components/FeaturedProducts";

function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState(JSON.parse(localStorage.getItem('wishList')) || []);

    const addToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const itemExists = cartItems.some(item => item.id === product.id);

        if (!itemExists) {
            cartItems.push(product);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            toast.success("Product added to cart!");
        } else {
            toast.error("Product already exists in cart!");
        }
    };

    const removeFromWishlist = (index) => {
        const updatedWishlist = [...wishlistItems];
        updatedWishlist.splice(index, 1);
        setWishlistItems(updatedWishlist);
        localStorage.setItem('wishList', JSON.stringify(updatedWishlist));
        toast.info("Product removed from wishlist!");
    };

    return (
        <>
            <ToastContainer />
            <div className="bg-white p-8 m-8 shadow-lg pt-10 mt-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Favorite Products:</h1>
                    {wishlistItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64">
                            <FaHeartBroken className="text-6xl text-gray-600" />
                            <p className="text-gray-600 mt-4">Your wishlist is empty.</p>
                            <Link to='/necklaces' className="text-yellow-600 font-poppins hover:underline font-bold">Go to shopping</Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {wishlistItems.map((item, index) => (
                                <div key={index} className="bg-white text-black shadow-md rounded-lg overflow-hidden flex items-center p-4">
                                    <div className="flex-shrink-0">
                                        <img src={item.images} alt={item.name} className="h-24 w-24 rounded-full object-cover" />
                                    </div>
                                    <div className="ml-6 flex-grow">
                                        <div className="text-xl font-semibold text-gray-800 mb-2">{item.name}</div>
                                        <p className="text-gray-700 mb-4">{item.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-gray-900">${item.price}</span>
                                            <div className="flex space-x-2">
                                                <button className="bg-black text-white hover:bg-yellow-600 hover:text-black p-2 rounded-md transition duration-300" onClick={() => addToCart(item)}>
                                                    <IoCartOutline />
                                                </button>
                                                <button className="bg-black text-white hover:bg-yellow-600 hover:text-black p-2 rounded-md transition duration-300" onClick={() => removeFromWishlist(index)}>
                                                    <MdOutlineDelete />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <FeaturedProducts />
        </>
    );
}

export default Wishlist;
