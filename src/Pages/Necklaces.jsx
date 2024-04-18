import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard.jsx'; // Assuming you have a component for displaying necklace cards
import jewelryData from '../DATA/jewelrydata.jsx';

const Necklaces = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const [cartItems, setCartItems] = useState([]);

    // Calculate the index of the first and last item to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = jewelryData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="container mx-auto px-4">
            {/* Category Button in Header */}
            <div className="flex justify-between items-center py-4">
                <h2>Necklaces</h2>
                <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setShowSearch(!showSearch)}
                >
                    Categories
                </button>
            </div>

            {/* Search Bar */}
            <div className={`mt-4 ${showSearch ? 'block' : 'hidden'} transition-all duration-500 ease-in-out`}>
                <input
                    type="text"
                    placeholder="Search Necklaces"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>

            {/* Main Content Area */}
            <div>
                {/* Necklace Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {currentItems.map((item, index) => (
                        <ProductCard
                            key={index}
                            productName={item.name}
                            imageUrl={item.images[0]} // Assuming only one image per item
                            price={item.price}
                            promotion={item.promotion}
                            onAddToCart={() => addToCart(item)}
                        />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-4 flex justify-end">
                    <button
                        className="bg-black text-white px-4 py-2 "
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {[...Array(Math.ceil(jewelryData.length / itemsPerPage)).keys()].map((number) => (
                        <button
                            key={number}
                            className={`bg-black text-white px-4 py-2 mx-4 ${currentPage === number + 1 ? 'bg-yellow-500' : ''}`}
                            onClick={() => paginate(number + 1)}
                        >
                            {number + 1}
                        </button>
                    ))}
                    <button
                        className="bg-black text-white px-4 py-2    "
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === Math.ceil(jewelryData.length / itemsPerPage)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Necklaces;
