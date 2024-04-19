import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Title from "./Components/Title";
import Navbar from "./Components/Navbar";
import Necklaces from "./Pages/Necklaces";
import Earrings from "./Pages/Earrings";
import Bracelets from "./Pages/Bracelets";
import Rings from "./Pages/Rings";
import ProductDetailsPage from "./Pages/ProductDetailsPage.jsx"; // Import ProductDetails page

function App() {
  return (
    <Router>
      <div className="bg-greyIsh">
        <Navbar />
        <Title />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
