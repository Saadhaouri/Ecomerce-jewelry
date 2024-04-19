import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router 
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button, Drawer } from 'antd';
import logo from '../assets/jewelryLogo.png'

const Header = () => {
    // Dummy data for jewelry types
    const jewelryTypes = ['Necklaces', 'Earrings', 'Bracelets', 'Rings'];

    const [showDrawer, setShowDrawer] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Load cart items from local storage
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, [localStorage.getItem('cartItems')]);



    const showDrawerHandler = () => {
        setShowDrawer(true);
    };

    const onCloseDrawer = () => {
        setShowDrawer(false);
    };

    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
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
                    <div className="ml-6 lg:ml-0 relative" onClick={showDrawerHandler}>
                        <Badge count={cartItems.length} offset={[10, -10]}>
                            <HeartOutlined className="text-[32px] text-yellow-600" />
                        </Badge>
                        <Badge count={cartItems.length} offset={[10, -10]}>
                            <ShoppingCartOutlined className=" ml-2 text-[32px] text-yellow-600" />
                        </Badge>
                    </div>
                </div>
            </div>
            {/* Drawer */}
            <Drawer
                title="Cart Items"
                placement="right"
                onClose={onCloseDrawer}
                open={showDrawer}
            >
                {cartItems.length === 0 ? (
                    <p>No items in the cart</p>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="h-16 w-16 rounded-full object-cover" src={item.images[0]} alt={item.name} />
                                </div>
                                <div className="ml-4">
                                    <div className="text-lg font-bold">{item.name}</div>
                                    <div className="text-gray-700">${item.price}</div>
                                </div>
                                <div className="ml-auto">
                                    <Button onClick={() => removeFromCart(index)}>Remove</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Drawer>
        </header>
    );
};

export default Header;
