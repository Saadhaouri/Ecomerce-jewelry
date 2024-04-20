import { MdOutlineDelete } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState(JSON.parse(localStorage.getItem('wishList')) || []);

    const addToCart = (product) => {

        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    // Function to remove a product from the wishlist
    const removeFromWishlist = (index) => {
        // Create a copy of the current wishlist items array
        const updatedWishlist = [...wishlistItems];
        // Remove the product at the specified index
        updatedWishlist.splice(index, 1);
        // Update the wishlist items state
        setWishlistItems(updatedWishlist);
        // Update wishlist items in localStorage
        localStorage.setItem('WishList', JSON.stringify(updatedWishlist));
    };

    return (
        <div className="bg-white p-8 m-8 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Favorite Product : </h1>
                {wishlistItems.length === 0 ? (
                    <p className="text-gray-600 ">Your wishlist is empty.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {wishlistItems.map((item, index) => (
                            <div key={index} className="bg-white  text-black  shadow-md rounded-lg overflow-hidden flex items-center p-4">
                                <div className="flex-shrink-0">
                                    <img src={item.images} alt={item.name} className="h-16 w-16 rounded-full object-cover" />
                                </div>
                                <div className="ml-4 flex-grow">
                                    <div className="text-xl font-semibold text-gray-800 mb-2">{item.name}</div>
                                    <p className=" mb-4">{item.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className=" font-semibold">${item.price}</span>
                                        <div>
                                            {/* Button to add to cart */}
                                            <button className="bg-black  text-white hover:bg-yellow-600 hover:text-black p-2 hover:font-bold" onClick={() => addToCart(item)}>
                                                <IoCartOutline />
                                            </button>
                                            {/* Button to remove from wishlist */}
                                            <button className="bg-black  text-white hover:bg-yellow-600 hover:text-black p-2 hover:font-bold" onClick={() => removeFromWishlist(index)}>
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
    );
}

export default Wishlist;
