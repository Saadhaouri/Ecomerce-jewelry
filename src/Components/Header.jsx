import { Link } from 'react-router-dom'; // If you're using React Router 
import logo from '../assets/jewelryLogo.png'
import { ShoppingCartOutlined } from '@ant-design/icons';

const Header = () => {
    // Dummy data for jewelry types
    const jewelryTypes = ['Necklaces', 'Earrings', 'Bracelets', 'Rings'];

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
                    <Link to="/cart" className="ml-6 lg:ml-0">
                        <ShoppingCartOutlined className=' text-[32px] text-yellow-600' />
                    </Link>
                </div>
            </div>
            {/* Mobile Menu */}
            <nav className="lg:hidden mt-4">
                <ul className="flex flex-col">
                    {jewelryTypes.map(type => (
                        <li key={type} className="my-2">
                            <Link
                                to={`/products/${type.toLowerCase()}`}
                                className="hover:text-gray-300"
                            >
                                {type}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link to="/cart" className="mt-4">
                            <img src="/path/to/cart-icon.png" alt="Shopping Cart" className="h-6" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
