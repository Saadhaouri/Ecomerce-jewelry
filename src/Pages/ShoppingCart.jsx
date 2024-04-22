import { useState, useEffect } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        // Load cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItems) {
            setCartItems(storedCartItems.map(item => ({
                ...item,
                quantity: item.quantity || 1  // Ensure each item has a quantity field
            })));
        }
    }, []);
    useEffect(() => {

        localStorage.setItem("wishList", JSON.stringify(wishList));
    }, [cartItems, wishList]);

    const handleContinueShopping = () => {
        navigate(-1); // Navigates back to the previous page
    };

    const updateQuantity = (index, delta) => {
        const newCartItems = cartItems.map((item, i) => {
            if (i === index) {
                let newQuantity = item.quantity + delta;
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }; // Ensure quantity does not go below 1
            }
            return item;
        });
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems)); // Update local storage with new quantities
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };
    const addToWish = (product) => {
        setWishList([...wishList, product]);
        toast.success("Product successfully added to the wishlist!", {
            position: "bottom-right",
        });
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="sm:flex shadow-md my-10">
                <div className="w-full sm:w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
                    </div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div className="md:w-4/12 2xl:w-1/4 w-full">
                                <img src={item.images} alt={item.name} className="h-full object-center object-cover md:block hidden" />
                                <img src={item.images} alt={item.name} className="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{item.code}</p>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base font-black leading-none text-gray-800">{item.name}</p>
                                    <div className="flex items-center">
                                        <button onClick={() => updateQuantity(index, -1)} className="px-2">-</button>
                                        <input type="text" value={item.quantity} readOnly className="w-12 text-center border mx-2" />
                                        <button onClick={() => updateQuantity(index, 1)} className="px-2">+</button>
                                    </div>
                                </div>
                                <p className="text-xs leading-3 text-gray-600 py-4">Color: {item.color}</p>
                                <p className="w-96 text-xs leading-3 text-gray-600">Composition: {item.composition}</p>
                                <div className="flex items-center justify-between pt-5">
                                    <div className="flex items-center">
                                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer" onClick={() => addToWish(item)}>Add to favorites</p>
                                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p className="text-base font-black leading-none text-gray-800"> ${item.price * item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button onClick={handleContinueShopping} className="flex font-semibold items-center text-indigo-600 text-sm mt-10">
                        <IoIosArrowRoundBack className='text-[22px]' />
                        Continue Shopping
                    </button>
                </div>
                <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
                        <span className="font-semibold text-sm">   ${calculateTotal().toFixed(2)}</span>
                    </div>
                    <div>
                        <label htmlFor="shipping" className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select id="shipping" className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-yellow-600 hover:bg-black px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                        </div>
                        <button className="bg-black font-semibold hover:bg-yellow-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
