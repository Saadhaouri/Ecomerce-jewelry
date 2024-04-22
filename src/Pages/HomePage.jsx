import { Carousel } from "antd"
import banner1 from '../assets/Banners/Hm/bannerweb4.webp'
import banner2 from '../assets/Banners/Hm/bannerweb3.webp'
import banner3 from '../assets/Banners/Hm/bannerweb.webp'
import banner4 from '../assets/Banners/Hm/bannerweb2.webp'
import { BiSupport } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import FeaturedProducts from "../Components/FeaturedProducts"



const HomePage = () => {




    return (
        <>
            <Carousel autoplay>
                <div>
                    <img src={banner1} alt="" />
                </div>
                <div>
                    <img src={banner2} alt="" />
                </div>
                <div>
                    <img src={banner3} alt="" />
                </div>
                <div>
                    <img src={banner4} alt="" />
                </div>

            </Carousel>
            <FeaturedProducts />

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A better way to serve your customers
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Custom Design</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">Create your own unique jewelry piece with our bespoke design services.</dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 2l1.5 1.5M17.5 13L19 14.5m2-2.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h5.5m3 3H19m0 0l2-2m-2 2l-2-2" />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Jewelry Repair</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">Expert repair services to restore the original splendor of your cherished pieces.</dd>
                            </div>


                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 14l-2-2m0 0L6 6m2 6l6 6M18 6l-6 6" />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Virtual Try-On</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">Experience our collection from the comfort of your home with our virtual try-on service.</dd>
                            </div>
                        </dl>
                    </div>

                </div>
            </section>
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Get in touch with us
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Support Number Card */}
                        <div className="p-6 bg-white rounded-lg shadow-lg flex justify-center items-center flex-col ">
                            <BiSupport className=" text-[22px] text-white bg-indigo-400 rounded-full w-16 h-16 p-2  " />
                            <h3 className="text-lg font-medium text-gray-900">Support</h3>
                            <p className="mt-2 text-sm text-gray-500">
                                Call us at
                                <a className="text-blueColor hover:underline font-bold" >+1 (555) 123-4567</a>  for any inquiries.</p>
                        </div>

                        {/* WhatsApp Card */}
                        <div className="p-6 bg-white rounded-lg shadow-lg flex justify-center items-center flex-col">
                            <FaWhatsapp className=" text-[22px] text-white bg-green-400 rounded-full w-16 h-16 p-2  " />

                            <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                            <p className="mt-2 text-sm text-gray-500">Message us on WhatsApp at +1 (555) 123-4567.</p>
                        </div>

                        {/* Delivery Information Card */}
                        <div className="p-6 bg-white rounded-lg shadow-lg flex justify-center items-center flex-col">
                            <CiDeliveryTruck className=" text-[22px] text-white bg-violet-700 rounded-full w-16 h-16 p-2  " />

                            <h3 className="text-lg font-medium text-gray-900">Delivery</h3>
                            <p className="mt-2 text-sm text-gray-500">We offer free delivery within 3-5 business days. Contact us for more details.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default HomePage