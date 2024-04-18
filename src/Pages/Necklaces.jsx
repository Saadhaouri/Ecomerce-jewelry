import  ProductCard from '../Components/ProductCard.jsx'; // Assuming you have a component for displaying necklace cards
import  Footer from '../Components/footer.jsx';
const Necklaces = () => {
    return (
        <>
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-start">
                {/* Category Sidebar */}
                <div className="w-1/4">
                    {/* Add category filters here */}
                    <h2>Categories</h2>
                    {/* Example category list */}
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                    </ul>
                </div>

                {/* Main Content Area */}
                <div className="w-3/4">
                    {/* Search Bar */}
                    <div className="mt-4">
                        <input type="text" placeholder="Search Necklaces" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>

                    {/* Necklace Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                        {/* Render Necklace cards here */}
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        {/* Add more NecklaceCard components as needed */}
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex justify-center">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Previous</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-4">1</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ">Next</button>
                    </div>

                </div>
              
            </div>
        </div>
          <footer className="mt-10">
             <Footer />
          </footer>
       </>
    );
};

export default Necklaces;
