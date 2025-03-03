import React from 'react';

export default function TermsOfService() {
    return (
        <section className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gradient-to-r from-blue-400 to-white">
            {/* Title */}
            <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8">
                Terms of Service
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/4065405/pexels-photo-4065405.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Terms Image 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/4963437/pexels-photo-4963437.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Terms Image 2"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/6249385/pexels-photo-6249385.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Terms Image 3"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Terms of Service Content */}
            <div className="bg-gradient-to-r from-indigo-500 via-teal-500 to-purple-800 text-white rounded-lg shadow-lg p-6 mb-8 ">
                <h2 className="text-2xl font-bold mb-4 text-center">Terms and Conditions</h2>
                <p className="text-lg mb-4">
                    Welcome to Stigmata 031! By using our tattoo, art, and clothing services, you agree to the following terms and conditions. Please read them carefully.
                </p>
                <p className="text-lg mb-4">
                    1. Service Usage : Our tattoo services, artwork, and custom clothing are designed to enhance your personal expression. By booking a tattoo or purchasing our art or clothes, you acknowledge that these services and products are for personal and artistic purposes. Tattoos and artwork are permanent, and you understand that Stigmata 031 does not accept responsibility for changes in personal taste or preferences after the service has been completed.
                </p>
                <p className="text-lg mb-4">
                    2. Payment and Refunds : Payment for tattoo services, artwork, and clothing is required upfront or as agreed upon. Refunds are not available for tattoos once the process has begun. Refunds for artwork or clothing are subject to specific conditions outlined in our refund policy. Please review our policy for more information.
                </p>
                <p className="text-lg mb-4">
                    3. Client Conduct : We expect all customers to act responsibly and respectfully when using our services. Any inappropriate behavior, harassment, or requests that do not align with our artistic vision may result in the termination of services without a refund.
                </p>
                <p className="text-lg mb-4">
                    4. Liability : Stigmata 031 is not liable for any complications, infections, or damages resulting from the tattoo process or aftercare, artwork, or clothing. By booking a tattoo or purchasing artwork or clothing, you agree to hold us harmless from any claims or damages.
                </p>
                <p className="text-lg">
                    For any questions or concerns about our terms, please contact Stigmata 031 at <a href="mailto:sadboystig@gmail.com" className="text-yellow-300 hover:underline">sadboystig@gmail.com</a> or call (+27) 81 537 0498.
                </p>
            </div>
        </section>
    );
}
