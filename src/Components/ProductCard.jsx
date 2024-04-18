import { useState } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

function ProductCard({ productName, imageUrl, price, promotion, onAddToCart, onAddToWishlist }) {
    const [hovered, setHovered] = useState(false);

    const handleAddToCart = () => {
        onAddToCart({ productName, imageUrl, price });
    };

    const handleAddToWishlist = () => {
        onAddToWishlist({ productName, imageUrl, price });
    };

    return (
        <div
            className="max-w-sm rounded overflow-hidden bg-white shadow-lg relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img className="w-full h-64 object-cover" src={imageUrl} alt={productName} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{productName}</div>
                <p className="text-gray-700 text-base">{price}</p>
                {promotion && <p className="text-green-500 text-sm">{promotion}</p>}
            </div>
            {hovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                    <button className="text-white mr-4" onClick={handleAddToCart}>
                        <FaShoppingCart className="mr-1" />
                        Add to Cart
                    </button>
                    <button className="text-white" onClick={handleAddToWishlist}>
                        <FaHeart className="mr-1" />
                        Add to Wishlist
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductCard;
