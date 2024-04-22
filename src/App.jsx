import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Title from "./Components/Title";
import Navbar from "./Components/Navbar";
import Necklaces from "./Pages/Nicklaces/Necklaces.jsx";
import Earrings from "./Pages/Earrings";
import Bracelets from "./Pages/Bracelets";
import Rings from "./Pages/Rings";
import ProductDetailsPage from "./Pages/ProductDetailsPage.jsx"; // Import ProductDetails page
import Wishlist from "./Pages/Wishlist.jsx";
import MFooter from "./Components/MFooter.jsx";
import ShoppingCart from "./Pages/ShoppingCart.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <div className="bg-greyIsh font-poppins">
        <Navbar />
        <Title />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/necklaces/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cartitems" element={<ShoppingCart />} />
        </Routes>

        <ToastContainer />
        <MFooter />
      </div>
    </Router>
  );
}

export default App;
