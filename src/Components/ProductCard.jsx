
const NecklaceCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Necklace Image */}
            <img src="/path/to/necklace_image.jpg" alt="Necklace" className="w-full h-64 object-cover" />

            {/* Necklace Details */}
            <div className="p-4">
                {/* Necklace Title */}
                <h3 className="text-lg font-semibold mb-2">Necklace Name</h3>

                {/* Necklace Description */}
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at orci vel magna euismod fringilla.</p>

                {/* Necklace Price */}
                <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">$99.99</span>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default NecklaceCard;
