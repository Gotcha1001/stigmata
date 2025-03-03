import React from 'react';

export default function PrivacyPolicy() {
    return (
        <section className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gradient-to-r from-blue-400 to-white">
            {/* Title */}
            <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8">
                Privacy Policy
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/4152513/pexels-photo-4152513.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Privacy Policy Image 1"
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/2882638/pexels-photo-2882638.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Privacy Policy Image 2"
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/12188471/pexels-photo-12188471.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Privacy Policy Image 3"
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
            </div>

            {/* Privacy Policy Content */}
            <div className="bg-gradient-to-r from-indigo-500 via-teal-500 to-purple-800 text-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Privacy Policy</h2>
                <p className="text-lg mb-4">
                    At Stigmata 031, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our tattoo, artwork, and clothing services.
                </p>
                <p className="text-lg mb-4">
                    1. Information Collection : We collect personal information such as your name, email address, contact details, and tattoo preferences when you book an appointment or inquire about our services. This information is used to process your bookings, provide customer support, and enhance your experience with our products and services.
                </p>
                <p className="text-lg mb-4">
                    2. Data Usage : Your information is used to facilitate appointments, communicate with you about your bookings, and send updates about our new designs, artwork, and promotions. We may also use your data to improve our services and ensure your satisfaction.
                </p>
                <p className="text-lg mb-4">
                    3. Data Security : We implement robust security measures to protect your personal information from unauthorized access, alteration, or disclosure. We use industry-standard encryption and secure protocols to ensure your data is safe.
                </p>
                <p className="text-lg mb-4">
                    4. Third-Party Services : We may share your information with trusted third parties who assist us in managing bookings, payments, or providing customer support. These third parties are contractually obligated to protect your data and use it only for the purposes specified by us.
                </p>
                <p className="text-lg mb-4">
                    5. Changes to Policy : We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with an updated effective date, and we encourage you to review this policy regularly.
                </p>
                <p className="text-lg">
                    If you have any questions or concerns about our Privacy Policy, please contact Stigmata 031 at <a href="mailto:sadboystig@gmail.com" className="text-yellow-300 hover:underline">sadboystig@gmail.com</a> or call (+27) 81 537 0498.
                </p>
            </div>
        </section>
    );
}
