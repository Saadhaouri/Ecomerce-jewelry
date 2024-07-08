import { FaGem, FaHandsHelping, FaLeaf } from 'react-icons/fa';

const OurPhilosophy = () => {
    return (
        <section className="bg-white py-12 mt-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">Our Philosophy</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        At our jewelry store, we believe in crafting timeless pieces that embody elegance, quality, and sustainability. Our philosophy is rooted in the principles of ethical sourcing, exceptional craftsmanship, and customer satisfaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaGem className="text-yellow-600 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Exceptional Craftsmanship</h3>
                        <p className="text-gray-600">
                            Our skilled artisans meticulously create each piece of jewelry with attention to detail, ensuring that every item is a work of art.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaHandsHelping className="text-yellow-600 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Ethical Sourcing</h3>
                        <p className="text-gray-600">
                            We are committed to sourcing our materials responsibly and ethically, ensuring that our jewelry not only looks beautiful but also aligns with our values.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <FaLeaf className="text-yellow-600 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
                        <p className="text-gray-600">
                            Sustainability is at the heart of our operations. We strive to minimize our environmental impact through eco-friendly practices and sustainable materials.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-gray-600 mb-8">
                        We would love to hear from you. Whether you have questions, feedback, or simply want to say hello, please reach out to us.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">info@jewelrystore.com</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                            <p className="text-gray-600">+1 234 567 890</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                            <p className="text-gray-600">123 Jewelry St, Gem City, CA 12345</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPhilosophy;
