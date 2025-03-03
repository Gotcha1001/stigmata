import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';
import MotionWrapperDelay from '../Components/FramerMotion/MotionWrapperDelay';

export default function Dreams() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    return (

        <div className="relative min-h-screen bg-black text-white p-6 overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover -z-100"
                src="https://cdn.pixabay.com/video/2023/04/11/158384-816637349_large.mp4"
            />
            <div className="relative container mx-auto max-w-4xl">
                <section className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100">
                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >    <div className="text-center gradient-background2 rounded-lg p-2 font-serif text-4xl font-bold text-primary-950 mb-4 max-w-xs md:max-w-md lg:max-w-lg mx-auto">
                            Dreams
                        </div> </MotionWrapperDelay>



                    {/* Logo Image */}
                    <div className="flex justify-center mb-8">
                        <motion.img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata19.jpg?raw=true"
                            alt="Logo"
                            className="w-48 h-48 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    {/* Stigmata Vision */}

                    <motion.div
                        className="max-w-4xl mx-auto mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">The Artistic Vision</h2>
                        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                            Stigmata is more than just a tattoo studio and clothing brand - it's a creative movement.
                            Born from a passion for artistic expression, we strive to transform bodies into canvases
                            and fabric into storytelling mediums. Each design, whether inked on skin or printed on fabric,
                            carries our unique aesthetic and creative philosophy.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our journey continues as we expand our artistic horizons, collaborating with artists
                            worldwide to create beautiful, meaningful artwork that resonates with those who wear it.
                            We believe in the power of art to transform, inspire, and connect people across cultures and borders.
                        </p>
                    </motion.div>

                    {/* Creative Showcase */}

                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    ><motion.div
                        className="mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Creative Universe</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <motion.div
                                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                                    variants={cardVariants}
                                >
                                    <div className="h-64 bg-gray-200 overflow-hidden">
                                        <img
                                            src="https://images.pexels.com/photos/955938/pexels-photo-955938.jpeg?auto=compress&cs=tinysrgb&w=800"
                                            alt="Tattoo Art"
                                            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                                        />

                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-xl mb-2 text-gray-800">Custom Tattoos</h3>
                                        <p className="text-gray-700">
                                            Our skilled artists transform your ideas into stunning, personalized tattoos that tell your unique story.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                                    variants={cardVariants}
                                >
                                    <div className="h-64 bg-gray-200 overflow-hidden">

                                        <img
                                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata42.jpg?raw=true"
                                            alt="Fashion Design"
                                            className=" aspect-video h-[400px] w-[400px] transform transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="font-bold text-xl mb-2 text-gray-800">Fashion Collections</h3>
                                        <p className="text-gray-700">
                                            Wearable art that stands out. Our clothing line features original designs that reflect our artistic vision.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                                    variants={cardVariants}
                                >
                                    <div className="h-64 bg-gray-200 overflow-hidden">
                                        <img
                                            src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800"
                                            alt="Artist Collaboration"
                                            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="font-bold text-xl mb-2 text-gray-800">Global Collaborations</h3>
                                        <p className="text-gray-700">
                                            We partner with artists worldwide to create unique, limited-edition pieces that push creative boundaries.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div> </MotionWrapperDelay>


                    {/* Feature Image */}
                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >      <div className="flex justify-center mb-12">
                            <motion.img
                                src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/STIGMATA%20P4.jpg?raw=true"
                                alt="Artistic Vision"
                                className="w-full max-w-2xl rounded-lg shadow-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            />
                        </div> </MotionWrapperDelay>


                    {/* Testimonials */}
                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >      <div className='mb-10'>
                            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">From Our Clients</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <p className="italic text-gray-700 mb-4">
                                        "The artists at Stigmata turned my concept into a beautiful piece of art that I'll cherish forever. Their attention to detail and creativity exceeded my expectations."
                                    </p>
                                    <p className="font-semibold text-gray-800">- Maya H., Cape Town</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <p className="italic text-gray-700 mb-4">
                                        "I've been wearing Stigmata designs for years, and their clothing is both unique and comfortable. I always get compliments when I wear their pieces."
                                    </p>
                                    <p className="font-semibold text-gray-800">- James T., Durban</p>
                                </div>
                            </div>
                        </div>  </MotionWrapperDelay>


                    {/* Social Connect */}
                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >       <div className="flex justify-center mb-8 space-x-6">
                            <motion.a
                                href="https://www.instagram.com/stigmata031/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaInstagram size={60} className="text-pink-600 hover:text-pink-700" />
                            </motion.a>
                            <motion.a
                                href="https://wa.me/+27815370498"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                            >
                                <FaWhatsapp size={60} className="text-green-600 hover:text-green-700" />
                            </motion.a>
                            <motion.a
                                href="https://www.facebook.com/ArtOfStigmata"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaFacebook size={60} className="text-blue-600 hover:text-blue-700" />
                            </motion.a>
                        </div></MotionWrapperDelay>


                    {/* Google Map */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344846.4094698658!2d30.72331279119756!3d-29.85868031192248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef705358a1d4a05%3A0x3bd65a17b187df5!2sDurban%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1710134557201!5m2!1sen!2sza"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}