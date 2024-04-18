import { useState, useEffect } from 'react';
import slider1 from '../assets/background.jpg'

const BannerSlider = () => {
  const [currentBanner, setCurrentBanner] = useState(0); // State to track the current banner index
  const banners = [slider1, '/path/to/banner2.jpg', '/path/to/banner3.jpg', '/path/to/banner4.jpg']; // Array containing paths to banner images

  // Function to increment the current banner index, looping back to 0 when reaching the end
  const nextBanner = () => {
    setCurrentBanner(currentBanner === banners.length - 1 ? 0 : currentBanner + 1);
  };

  // Effect to set up the timer for switching banners
  useEffect(() => {
    const timer = setInterval(nextBanner, 3000); // Change banner every 3 seconds
    return () => clearInterval(timer); // Cleanup function to clear the interval when component unmounts
  }, [currentBanner]); // Dependency array to ensure effect runs when currentBanner changes

  return (
    <div className="relative w-full h-full overflow-hidden">

      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner}
          alt={`Banner ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentBanner ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default BannerSlider;
