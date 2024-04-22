import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard.jsx";
import RingsData from "../DATA/RingsData.jsx";  // Adjusted import for rings data
import slider1 from '../assets/Banners/Banner-Rings-1.jpg';  // Adjust image paths as needed
import slider2 from '../assets/Banners/Banner-Rings-2.jpg';  // Adjust image paths as needed
import slider3 from '../assets/Banners/Banner-Rings-3.jpg';  // Adjust image paths as needed
import Ringpng from '../assets/Ringpng.png';  // Hero image for rings
import CarouselBanner from "../Components/CarouselBanner.jsx";
import HeroSection from "../Components/HeroSection.jsx";
import { toast } from "react-toastify";
// import HeroSection from "../Components/HeroSection.jsx";

const Rings = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 8;
    const [cartItems, setCartItems] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const imagesbanner = [slider1, slider2, slider3];

    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        const storedWishList = localStorage.getItem("WishList");
        if (storedCartItems) setCartItems(JSON.parse(storedCartItems));
        if (storedWishList) setWishList(JSON.parse(storedWishList));
        setFilteredData(RingsData.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    }, [searchQuery]);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("wishList", JSON.stringify(wishList));
    }, [cartItems, wishList]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const addToCart = (product) => {

        setCartItems([...cartItems, product]);
        toast.success("Product successfully added to carte items!", {
            position: "bottom-right",
        });

    }
    const addToWish = (product) => {
        setWishList([...wishList, product]);
        toast.success("Product successfully added to the wishlist!", {
            position: "bottom-right",
        });
    }

    const handleSearchInputChange = (e) => setSearchQuery(e.target.value);

    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
                <h2 className="text-3xl font-bold text-center text-black">Rings</h2>
                <input
                    type="text"
                    placeholder="Search Rings"
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
            <HeroSection picture={Ringpng} title="Enchanting Rings" description="Step into a world of exquisite rings designed to captivate and charm, crafted for moments that will last a lifetime" />
        </div>
    );
};

export default Rings;
