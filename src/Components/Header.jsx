import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeartOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { Badge, Button, Drawer } from 'antd';
import logo from '../assets/jewelryLogo.png';
import { FaCartArrowDown } from 'react-icons/fa';

const Header = () => {
    const jewelryTypes = ['Necklaces', 'Earrings', 'Bracelets', 'Rings'];
    const [showDrawer, setShowDrawer] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, [localStorage.getItem('cartItems'), cartItems.length]);

    const toggleDrawer = () => setShowDrawer(!showDrawer);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <header className="bg-white shadow-md py-4 px-4 lg:px-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-12" />
                    </Link>
                    <button className="lg:hidden ml-4" onClick={toggleMobileMenu}>
                        <MenuOutlined />
                    </button>
                </div>
                <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    <ul className="flex flex-col lg:flex-row lg:ml-6 text-yellow-600 font-bold">
                        <li className='mr-4'>
                            <Link to='/' className="hover:text-gray-300">Home</Link>
                        </li>
                        {jewelryTypes.map(type => (
                            <li key={type} className="mr-4">
                                <Link to={`/${type.toLowerCase()}`} className="hover:text-gray-300">{type}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center">
                    <Link to="/wishlist"> <HeartOutlined className="text-[32px] text-yellow-600" /></Link>
                    <Badge count={cartItems.length} offset={[10, -10]}>
                        <ShoppingCartOutlined onClick={toggleDrawer} className="ml-2 text-[32px] text-yellow-600" />
                    </Badge>
                </div>
            </div>
            <Drawer title="Cart Items" placement="right" onClose={toggleDrawer} open={showDrawer}>
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64"> {/* Adjust the height as needed */}
                        <FaCartArrowDown className="text-6xl text-gray-600" /> {/* React Icons heart-broken icon */}
                        <p className="text-gray-600 mt-4">Your Itemcarts is empty.</p>
                        <Link to='/necklaces' className="text-yellow-600 font-poppins  hover:underline font-bold"> Go to shopping </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center">
                                <img className="h-16 w-16 rounded-full object-cover" src={item.images[0]} alt={item.name} />
                                <div className="ml-4">
                                    <div className="text-lg font-bold">{item.name}</div>
                                    <div className="text-gray-700">${item.price}</div>
                                </div>
                                <Button className="ml-auto" onClick={() => removeFromCart(index)}>Remove</Button>
                            </div>
                        ))}
                        <Link to="/cartItems" onClick={() => setShowDrawer(false)} className="mt-4 block text-center bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-500">Go to Cart Items</Link>
                    </div>
                )}
            </Drawer>
        </header>
    );
};

export default Header;
