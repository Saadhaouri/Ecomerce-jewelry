const Footer = () => {
    return (
        <footer class=" w-[100%] h-[auto] bg-blue-100/80 font-sans ">
    <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 gap-x-10 sm:gap-y-10 lg:grid-cols-4">

            <div>
                <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Appelez-nous : +2134566 65 10 30 49</p> <br></br>
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">De 10h00 à 18h00 du lundi au vendredi et le samedi de 10h00 à 13h00 hors jours fériés.</p> <br></br>
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Envoyez-nous un e-mail</p>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p>
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</p>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 dark:text-white">Industries</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Retail & E-Commerce</p>
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Information Technology</p>
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Finance & Insurance</p>
                </div>
            </div>
            
               <div >
               <p class="font-semibold text-gray-800 dark:text-white">Moyens De Paiement</p>

            <div class="flex flex-1 gap-4 hover:cursor-pointer p-2">
                <img className="sm:w-[330px] mt-4" src="https://rafinityfashionstore.com/wp-content/uploads/2020/12/logo-cmi-visa-mastercard-maroc-lcdmaroc.png" width="200" height="110" alt="" />
            </div>
            
        </div>
        </div>
        
        <p className="text-center mt-6">© 2023 You Company Inc. All rights reserved.</p>
    </div>
</footer>
    );
};

export default Footer;