import { useState, useEffect } from "react";
import ProductCard from "../../Components/ProductCard.jsx";
import NicklacesData from "../../DATA/NicklacesData.jsx";
import CarouselBanner from "../../Components/CarouselBanner.jsx";
import HeroSection from "../../Components/HeroSection.jsx";
import nicklacespic from '../../assets/Necklacepng.png'
import { toast } from "react-toastify";

const Necklaces = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 8;
  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


  const imagesbanner = [
    "https://christopherduquet.com/wp-content/uploads/2022/11/necklace-designer-philosophy-focus-on-natural-beauty-christopher-duquet-fine-jewelry-evanston-il.jpg",
    "https://christopherduquet.com/wp-content/uploads/2021/11/EC-snowflakes-falling-snow-diamond-couture-necklace-christopher-duquet-banner.jpg",
    // More images
  ];

  useEffect(() => {
    // Load cart items from local storage when the component mounts
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    const storedWishList = localStorage.getItem("WishList");
    if (storedWishList) {
      setWishList(JSON.parse(storedWishList));
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  useEffect(() => {
    // Update local storage whenever cartItems state changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [cartItems, wishList]); // This effect runs whenever cartItems state changes

  useEffect(() => {
    // Filter jewelryData based on searchQuery
    const filtered = NicklacesData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Category Button in Header */}
      <div className="flex justify-between items-center py-4">
        <h2 className="text-3xl font-bold text-center text-black">Necklaces</h2>

        <input
          type="text"
          placeholder="Search Necklaces"
          className="w-1/3 p-2 outline-none  "
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>


      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {currentItems.map((item, index) => (
            <ProductCard
              key={index}
              productName={item.name}
              imageUrl={item.images[0]}
              price={item.price}
              promotion={item.promotion}
              onAddToCart={() => addToCart(item)}
              onAddToWishlist={() => addToWish(item)}
              id={item.id}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-end">
          <button
            className="bg-black text-white px-2 py-2 "
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(Math.ceil(filteredData.length / itemsPerPage)).keys()].map(
            (number) => (
              <button
                key={number}
                className={`bg-black text-white px-4 py-2 mx-4 ${currentPage === number + 1 ? "bg-yellow-500" : ""
                  }`}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </button>
            )
          )}
          <button
            className="bg-black text-white px-2 py-2    "
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(filteredData.length / itemsPerPage)
            }
          >
            Next
          </button>
        </div>

        {/* Carousel  */}

        <CarouselBanner images={imagesbanner} />

        <HeroSection picture={nicklacespic} title="Nicklaces"
          description="Discover our stunning range of nikclaces, from elegant classics to modern statement pieces." />
      </div>
    </div>
  );
};

export default Necklaces;
