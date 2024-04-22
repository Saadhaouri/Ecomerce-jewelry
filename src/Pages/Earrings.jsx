import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard.jsx";
import EarringsData from "../DATA/EarringsData.jsx";  // Adjusted import
import CarouselBanner from "../Components/CarouselBanner.jsx";
import HeroSection from "../Components/HeroSection.jsx";
import slider2 from '../assets/Banners/Banner-Earrings-2.jpg'
import slider1 from '../assets/Banners/Banner-Earrings-1.jpg'
import Earringspng from '../assets/Earringspng.png'
import { toast } from "react-toastify";

const Earrings = () => {
    // const [showSearch, setShowSearch] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 8;
    const [cartItems, setCartItems] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const imagesbanner = [
        slider1, slider2

    ];

    useEffect(() => {
        // Initialize from localStorage and filter data
        const storedCartItems = localStorage.getItem("cartItems");
        const storedWishList = localStorage.getItem("WishList");
        if (storedCartItems) setCartItems(JSON.parse(storedCartItems));
        if (storedWishList) setWishList(JSON.parse(storedWishList));
        setFilteredData(EarringsData.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())));
    }, [searchQuery]); // Refactored for clarity

    useEffect(() => {
        // Local Storage Updates
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("wishList", JSON.stringify(wishList));
    }, [cartItems, wishList]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const addToCart = (product) => {
        // Check if the product is already in the cart
        const exists = cartItems.some(item => item.id === product.id);

        if (!exists) {
            // Add product to the cart if it doesn't already exist
            setCartItems([...cartItems, product]);
            toast.success("Product successfully added to cart!", {
                position: "bottom-right",
            });
        } else {
            // Notify user that product is already in the cart
            toast.error("Product is already in the cart!", {
                position: "bottom-right",
            });
        }
    };

    const addToWish = (product) => {
        // Check if the product is already in the wishlist
        const exists = wishList.some(item => item.id === product.id);

        if (!exists) {
            // Add product to the wishlist if it doesn't already exist
            setWishList([...wishList, product]);
            toast.success("Product successfully added to the wishlist!", {
                position: "bottom-right",
            });
        } else {
            // Notify user that product is already in the wishlist
            toast.error("Product is already in the wishlist!", {
                position: "bottom-right",
            });
        }
    };

    const handleSearchInputChange = (e) => setSearchQuery(e.target.value);

    return (
        <div className="container mx-auto px-4 ">
            <div className="flex justify-between items-center py-4">
                <h2 className="text-3xl font-bold text-center text-black">Earrings</h2>
                <input
                    type="text"
                    placeholder="Search Earrings"
                    className="w-1/3 p-2 outline-none"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {currentItems.map((item, index) => (
                    <ProductCard
                        key={index}
                        productName={item.name}
                        imageUrl={item.images[0]} // Assuming one image per item
                        price={item.price}
                        promotion={item.promotion}
                        onAddToCart={() => addToCart(item)}
                        onAddToWishlist={() => addToWish(item)}
                        id={item.id}
                    />
                ))}
            </div>

            <div className="mt-4 flex justify-end">
                <button className="bg-black text-white px-2 py-2" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                {[...Array(Math.ceil(filteredData.length / itemsPerPage)).keys()].map(number => (
                    <button
                        key={number}
                        className={`bg-black text-white px-4 py-2 mx-4 ${currentPage === number + 1 ? "bg-yellow-500" : ""}`}
                        onClick={() => paginate(number + 1)}
                    >
                        {number + 1}
                    </button>
                ))}
                <button className="bg-black text-white px-2 py-2" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}>Next</button>
            </div>

            <CarouselBanner images={imagesbanner} />
            <HeroSection
                title="Earrings"
                description="Discover our stunning range of earrings, from elegant classics to modern statement pieces."
                picture={Earringspng} />
        </div>
    );
};

export default Earrings;
