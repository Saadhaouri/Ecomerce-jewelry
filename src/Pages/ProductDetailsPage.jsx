import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import necklacesdata from "../DATA/NicklacesData";
import ringsdata from "../DATA/RingsData";
import braceletsdata from "../DATA/BraceletsData";
import earringsdata from "../DATA/EarringsData";
import FeaturedProducts from "../Components/FeaturedProducts";

function ProductDetailsPage() {
    const { category, id } = useParams();
    const [product, setProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        setProduct(findProductById(category, id));
    }, [category, id]);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("wishList", JSON.stringify(wishList));
    }, [cartItems, wishList]);

    const getProductData = (category) => {
        switch (category.toLowerCase()) {
            case 'necklaces':
                return necklacesdata;
            case 'rings':
                return ringsdata;
            case 'bracelets':
                return braceletsdata;
            case 'earrings':
                return earringsdata;
            default:
                return [];
        }
    };

    const findProductById = (category, productId) => {
        const data = getProductData(category);
        return data.find(product => product.id === productId);
    };

    const addToCart = (product) => {
        const isProductInCart = cartItems.some(cartItem => cartItem.id === product.id);
        if (isProductInCart) {
            toast.warn("Product already exists in cart!");
        } else {
            console.log("Items added to cart: ", product);
            setCartItems([...cartItems, product]);
        }
    };

    const addToWish = (product) => {
        const isProductInWishList = wishList.some(wishItem => wishItem.id === product.id);
        if (isProductInWishList) {
            toast.warn("Product already exists in wishlist!");
        } else {
            console.log("Items added to wishlist: ", product);
            setWishList([...wishList, product]);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const { name, description, price, images } = product;

    return (
        <>
            <div className="bg-white py-8 mt-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-white dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover rounded-lg shadow-md" src={images} alt="Product Image" />
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{name}</h2>
                            <p className="text-gray-700 text-lg mb-4">
                                {description}
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-8">
                                    <span className="text-2xl font-semibold text-gray-900">${price}</span>
                                </div>
                                <div>
                                    <span className="text-xl font-semibold text-green-600">In Stock</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="text-lg font-semibold text-gray-900">Select Size:</span>
                                <div className="flex items-center mt-2 space-x-2">
                                    <button className="bg-gray-200 text-gray-900 hover:bg-gray-300 px-4 py-2 rounded-md font-semibold">S</button>
                                    <button className="bg-gray-200 text-gray-900 hover:bg-gray-300 px-4 py-2 rounded-md font-semibold">M</button>
                                    <button className="bg-gray-200 text-gray-900 hover:bg-gray-300 px-4 py-2 rounded-md font-semibold">L</button>
                                    <button className="bg-gray-200 text-gray-900 hover:bg-gray-300 px-4 py-2 rounded-md font-semibold">XL</button>
                                    <button className="bg-gray-200 text-gray-900 hover:bg-gray-300 px-4 py-2 rounded-md font-semibold">XXL</button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="text-lg font-semibold text-gray-900">Product Description:</span>
                                <p className="text-gray-700 text-base mt-2">
                                    {description}
                                </p>
                            </div>
                            <div className="mt-4 flex space-x-4">
                                <button className="bg-black text-white px-6 py-3 rounded-md font-bold shadow-md hover:bg-gray-800 transition duration-300" onClick={() => addToCart(product)}>Add to Cart</button>
                                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-bold shadow-md hover:bg-gray-100 transition duration-300 flex items-center space-x-2" onClick={() => addToWish(product)}>
                                    <FaRegHeart />
                                    <span>Add to Wishlist</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FeaturedProducts />
            <ToastContainer />
        </>
    );
}

export default ProductDetailsPage;
