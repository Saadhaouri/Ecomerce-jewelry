import PropTypes from 'prop-types';
import { Button, Carousel } from 'antd';

function ProductDetailsPage({ productName, description, price, promotion, images }) {




    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{productName}</h1>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mb-4">
                    <Carousel autoplay>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img className="w-full" src={image} alt={productName} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                    <p className="text-lg font-bold mb-2">{price}</p>
                    {promotion && <p className="text-green-500 text-sm mb-4">{promotion}</p>}
                    <p className="text-gray-700 mb-4">{description}</p>
                    <Button type="primary" className="mb-4">Add to Cart</Button>
                    <Button className="mr-2">Add to Wishlist</Button>
                    <Button>Share</Button>
                </div>
            </div>
        </div>
    );
}

ProductDetailsPage.propTypes = {
    productName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    promotion: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
};

export default ProductDetailsPage;
