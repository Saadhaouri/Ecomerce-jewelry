import { FaPhone, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/jewelryLogo.png'
const Navbar = () => {
    return (
        <nav className="bg-black p-1 flex justify-between items-center">
            <div className="flex items-center text-white">
                <FaPhone />
                <span className=' text-white text-sm '> +212 766444205</span>
            </div>
            <div className="flex items-center">
                {/* Shopping cart icon */}
                <FaShoppingCart className="text-white text-sm mr-4 cursor-pointer" />
                {/* User icon */}
                <FaUser className="text-white text-sm cursor-pointer" />
            </div>
        </nav>
    );
};

export default Navbar;
