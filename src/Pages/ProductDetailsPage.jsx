import { useParams } from "react-router-dom";
import jewelryData from "../DATA/NicklacesData";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

function ProductDetailsPage() {
    const { id } = useParams();
    const product = findProductById(id); // Using the findProductById method
    const [cartItems, setCartItems] = useState([]);
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        // Update local storage whenever cartItems state changes
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("wishList", JSON.stringify(wishList)); // Fixed localStorage key
    }, [cartItems, wishList]); // This effect runs whenever cartItems or wishList state changes

    const addToCart = (product) => {
        console.log(" items added to cart  itemss ", product)
        setCartItems([...cartItems, product]);
    };

    const addToWish = (product) => {
        console.log(" items added to wish list  ", product)
        setWishList([...wishList, product]);
    };

    // Function to find product by ID
    function findProductById(productId) {
        return jewelryData.find(product => product.id === productId);
    }

    const share = () => {
        if (product) {
            console.log("Sharing product:", product.name);
        } else {
            console.log("Product not found");
        }
    };

    if (!product) {
        return <div>Loading...</div>; // Display a loading state while product data is being fetched
    }

    const { name, description, price, promotion, images } = product;

    return (
        <div className="bg-white py-8 mt-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-white dark:bg-gray-700 mb-4">
                            <img className="w-full h-full object-cover" src={product.images} alt="Product Image" />
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-black  mb-2">{product.name}</h2>
                        <p className="text-black text-sm mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                            ante justo. Integer euismod libero id mauris malesuada tincidunt.
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-black ">Price:</span>
                                <span className="text-black ">{product.price}</span>
                            </div>
                            <div>
                                <span className="font-bold text-black">Availability:</span>
                                <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-900">Select Size:</span>
                            <div className="flex items-center mt-2">
                                <button className="bg-black text-yellow-500 hover:border hover:border-b-black p-2 font-bold mr-2 hover:bg-transparent ">S</button>
                                <button className="bg-black text-yellow-500 hover:border hover:border-b-black p-2 font-bold mr-2 hover:bg-transparent ">M</button>
                                <button className="bg-black text-yellow-500 hover:border hover:border-b-black p-2 font-bold mr-2 hover:bg-transparent ">L</button>
                                <button className="bg-black text-yellow-500 hover:border hover:border-b-black p-2 font-bold mr-2 hover:bg-transparent ">XL</button>
                                <button className="bg-black text-yellow-500 hover:border hover:border-b-black p-2 font-bold mr-2 hover:bg-transparent ">XXL</button>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-black">Product Description:</span>
                            <p className="text-black text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                            </p>
                        </div>
                        <div className=" mt-2 flex justify-center flex-col  items-center ">
                            <button className="bg-black w-22 pl-6 pr-6 p-2.5 text-white font-bold shadow-lg hover:bg-yellow-600 hover:text-white  " onClick={() => addToCart(product)} > Add to Cartitems</button>
                            <button className="text-gray-500 hover:text-gray-800 flex items-center  justify-center font-bold p-2 mt-2" onClick={() => addToWish(product)}  > <FaRegHeart />
                                Add to wishlist </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
