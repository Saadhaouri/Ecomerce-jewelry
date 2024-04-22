import React from 'react'

const ProductCard = ({ product }) => (
    <div className="p-6 bg-white rounded-lg shadow-lg">
        <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.description || "No description available."}</p>
        <div className="mt-4">
            <button className="px-4 py-2 text-white font-bold bg-yellow-600 hover:bg-yellow-500">
                Add to Cart
            </button>
        </div>
    </div>
);

const Productrelated = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Related Products</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Explore similar items
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Productrelated