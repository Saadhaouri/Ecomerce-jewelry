import { Carousel } from 'antd';

const CarouselBanner = () => {
    return (
        <Carousel autoplay className='mt-4'>
            <div>
                <img src="https://christopherduquet.com/wp-content/uploads/2022/11/necklace-designer-philosophy-focus-on-natural-beauty-christopher-duquet-fine-jewelry-evanston-il.jpg" alt="" />
            </div>
            <div>
                <img src="https://christopherduquet.com/wp-content/uploads/2021/11/EC-snowflakes-falling-snow-diamond-couture-necklace-christopher-duquet-banner.jpg" alt="" />
            </div>

            <div>
                <img src="https://www.bryananthonys.com/cdn/shop/files/StoriesOfYou-MobileBanner.jpg?v=1683240217&width=3840" alt="" />
            </div>
        </Carousel>)
}

export default CarouselBanner