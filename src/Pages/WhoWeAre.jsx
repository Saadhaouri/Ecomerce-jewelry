import React from 'react';
import { FaGem, FaTools, FaBalanceScale, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const WhoWeAre = () => {
    return (
        <div className="bg-white mt-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Who We Are</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        We are a premium jewelry brand dedicated to providing exquisite and high-quality jewelry pieces.
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center">
                                <FaGem className="text-yellow-600 text-2xl" />
                                <h3 className="text-lg font-bold text-gray-900 ml-2">Custom Jewelry Design</h3>
                            </div>
                            <p className="mt-2 text-gray-600">
                                We offer bespoke jewelry design services to create unique pieces that reflect your style and personality.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center">
                                <FaTools className="text-yellow-600 text-2xl" />
                                <h3 className="text-lg font-bold text-gray-900 ml-2">Jewelry Repair</h3>
                            </div>
                            <p className="mt-2 text-gray-600">
                                Our expert jewelers provide repair services to restore your precious pieces to their original glory.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center">
                                <FaBalanceScale className="text-yellow-600 text-2xl" />
                                <h3 className="text-lg font-bold text-gray-900 ml-2">Jewelry Appraisal</h3>
                            </div>
                            <p className="mt-2 text-gray-600">
                                We offer professional appraisal services to help you determine the value of your jewelry items.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We'd love to hear from you! Please reach out to us through any of the methods below.
                    </p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center">
                                <FaEnvelope className="text-yellow-600 text-2xl" />
                                <h3 className="text-lg font-bold text-gray-900 ml-2">Email</h3>
                            </div>
                            <p className="mt-2 text-gray-600">info@jewelrybrand.com</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center">
                                <FaPhone className="text-yellow-600 text-2xl" />
                                <h3 className="text-lg font-bold text-gray-900 ml-2">Phone</h3>
                            </div>
                            <p className="mt-2 text-gray-600">+1 (123) 456-7890</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-yellow-600 text-2xl" />
                                <h3 className="text-lg font-bold text-gray-900 ml-2">Address</h3>
                            </div>
                            <p className="mt-2 text-gray-600">123 Jewelry Street, Gold City, XY 12345</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
