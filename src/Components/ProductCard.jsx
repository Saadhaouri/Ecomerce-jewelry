import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

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
  const navigate = useNavigate();
  const handleAddToWishlist = () => {
    onAddToWishlist({ productName, imageUrl, price });
  };

  const handleShowDetails = () => {
    console.log("=>=> Product Selected: " + productName);
    // Navigate to the product details page with the product ID in the URL
    navigate(`/product-details/${id}`); // Use product ID instead if available
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden bg-white shadow-lg relative"
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
        <p className="text-gray-700 text-base">{price}</p>
        {promotion && <p className="text-green-500 text-sm">{promotion}</p>}
      </div>
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          <button className="text-white mr-4" onClick={handleAddToCart}>
            <FaShoppingCart className="mr-1 text-[22px]" />
          </button>
          <button className="text-white mr-4" onClick={handleAddToWishlist}>
            <FaHeart className="mr-1 text-[22px]" />
          </button>
          <button className="text-white" onClick={handleShowDetails}>
            <FaInfoCircle className="mr-1 text-[22px]" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
