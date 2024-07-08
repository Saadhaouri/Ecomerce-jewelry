import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import HeroSection from "./HeroSection";

function ProductCard({
  productName,
  imageUrl,
  price,
  promotion,
  onAddToCart,
  onAddToWishlist,
  id,
}) {
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ productName, imageUrl, price });
  };
  // const navigate = useNavigate();
  const handleAddToWishlist = () => {
    onAddToWishlist({ productName, imageUrl, price });
  };

  // const handleShowDetails = () => {
  //   console.log("=>=> Product Selected: " + productName);
  //   // Navigate to the product details page with the product ID in the URL
  //   navigate(`/product-details/${id}`); // Use product ID instead if available
  // };

  return (
    <>

      <div
        className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md relative transition-transform transform hover:scale-105"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          className="w-full h-64 object-cover"
          src={imageUrl}
          alt={productName}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{productName}</div>
          <p className="text-gray-700 text-base">{price} DH </p>
          {promotion && <p className="text-green-500 text-sm">{promotion}</p>}
        </div>
        {hovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4 transition-opacity duration-300">
            <button className="text-white bg-yellow-600 hover:bg-yellow-500 p-2 rounded-full mb-2"
              onClick={handleAddToCart}>
              <FaShoppingCart className="text-[22px]" />
            </button>
            <button className="text-white bg-red-600 hover:bg-red-500 p-2 rounded-full mb-2" onClick={handleAddToWishlist}>
              <FaHeart className=" text-[22px]" />
            </button>
            <button className="text-white bg-blue-600 hover:bg-blue-500 p-2 rounded-full">
              <Link to={`product-details/${id}`} >
                <FaInfoCircle className=" text-[22px]" />
              </Link>
            </button>
          </div>
        )}
      </div>

    </>
  );
}

export default ProductCard;
