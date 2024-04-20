import nicklacespic from '../assets/Necklacepng.png'
const HeroSection = () => {
    return (
        <div className="bg-white mt-10 lex relative z-20 items-center overflow-hidden">
            <div className="container mx-auto px-6 flex relative py-16">
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <span className="w-20 h-2 bg-gray-800 mb-12"></span>
                    <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                        Beautiful
                        <span className="text-5xl sm:text-7xl">Nicklaces</span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-700">

                        Nicklaces, those shimmering threads of significance, weaving through the fabric of our existence, creating pathways for change and understanding.                    </p>

                </div>
                <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img src={nicklacespic} className="max-w-xs md:max-w-sm m-auto" alt="illustration" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
