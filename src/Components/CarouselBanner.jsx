import { Carousel } from 'antd';

const CarouselBanner = ({ images }) => {
    // Ensure images is always an array
    const safeImages = Array.isArray(images) ? images : [];

    return (
        <Carousel autoplay className='mt-4'>
            {safeImages.map((img, index) => (
                <div key={index}>
                    <img src={img} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
                </div>
            ))}
        </Carousel>
    );
};

// Default props
CarouselBanner.defaultProps = {
    images: [] // Assuming no images are passed, it will default to an empty array
};

export default CarouselBanner;
