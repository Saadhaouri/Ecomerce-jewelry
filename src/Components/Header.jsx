import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router 
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import logo from '../assets/jewelryLogo.png'

const Header = () => {
    // Dummy data for jewelry types
    const jewelryTypes = ['Necklaces', 'Earrings', 'Bracelets', 'Rings'];

    const [showDrawer, setShowDrawer] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const showDrawerHandler = () => {
        setShowDrawer(true);
    };

    const onCloseDrawer = () => {
        setShowDrawer(false);
    };

    return (
        <header className="bg-white shadow-md  py-4 px-4 lg:px-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-12" />
                    </Link>

                </div>
                <div>
                    <nav className="hidden lg:block ml-6 text-yellow-600 font-bold font-poppins">
                        <ul className="flex">
                            {jewelryTypes.map(type => (
                                <li key={type} className="mr-4">
                                    <Link
                                        to={`/${type.toLowerCase()}`}
                                        className="hover:text-gray-300"
                                    >
                                        {type}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center">
                    <div className="ml-6 lg:ml-0" onClick={showDrawerHandler}>
                        <ShoppingCartOutlined className=' text-[32px] text-yellow-600' />
                    </div>
                </div>
            </div>
            {/* Drawer */}
            <Drawer
                title="Cart Items"
                placement="right"
                onClose={onCloseDrawer}
                visible={showDrawer}
            >
                {cartItems.length === 0 ? (
                    <p>No items in the cart</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="mb-2">
                                {item.productName} - {item.price}
                            </li>
                        ))}
                    </ul>
                )}
            </Drawer>
        </header>
    );
};

export default Header;
