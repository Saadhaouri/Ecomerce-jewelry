const HomeCard = ({ product }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                className=" "
                src={product.images[0]}
                alt={product.name}

            />
            <div className="px-6 py-4 bg-yellow-300">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">
                    {product.price} USD
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {product.promotion && <span className="inline-block    rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Promo: {product.promotion}</span>}
            </div>
        </div>
    );
}

export default HomeCard;
