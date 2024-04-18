import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage'; // Import your other pages as needed
import Title from './Components/Title';
import Navbar from './Components/Navbar';
import Nicklaces from './Pages/Necklaces.jsx'
import Earrings from './Pages/Earrings.jsx'
import Bracelets from './Pages/Bracelets.jsx'
import Rings from './Pages/Rings.jsx'


function App() {
  return (
    <Router>
      <div className='bg-greyIsh '>
        <Navbar />
        <Title />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/necklaces" element={<Nicklaces />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/rings" element={<Rings />} />

          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
