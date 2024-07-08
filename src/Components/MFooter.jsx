import { Link } from 'react-router-dom';

const MFooter = () => {
    return (
        <footer className="w-full bg-black mt-10 font-sans">
            <div className="container px-6 py-12 mx-auto flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 gap-x-10 sm:gap-y-10 lg:grid-cols-4 w-full">

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Appelez-nous : +2134566 65 10 30 49</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">De 10h00 à 18h00 du lundi au vendredi et le samedi de 10h00 à 13h00 hors jours fériés.</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Envoyez-nous un e-mail</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link to='/' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</Link>
                            <Link to='/about' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                Who We Are
                            </Link>
                            <Link to='/ourphilosophy' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Retail & E-Commerce</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Information Technology</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Finance & Insurance</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Moyens De Paiement</p>

                        <div className="flex flex-1 gap-4 hover:cursor-pointer p-2">
                            <img className="sm:w-[330px] mt-4" src="https://rafinityfashionstore.com/wp-content/uploads/2020/12/logo-cmi-visa-mastercard-maroc-lcdmaroc.png" width="200" height="110" alt="" />
                        </div>

                    </div>
                </div>

                <p className="text-center mt-6">© 2023 Your Company Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default MFooter