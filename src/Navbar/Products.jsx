import React from 'react';
import { motion } from 'framer-motion';
import FeatureMotionWrapper from '../Components/FramerMotion/FeatureMotionWrapperMap';

const clothes = [
    { id: 1, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata25.jpg?raw=true', alt: 'Stylish Jeans' },
    { id: 2, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata26.jpg?raw=true', alt: 'Stylish Red Pants' },
    { id: 3, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata27.jpg?raw=true', alt: 'Awesome Long Pants' },
    { id: 4, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata36.jpg?raw=true', alt: 'Stylish Jeans' },
    { id: 5, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata41.jpg?raw=true', alt: 'Amazing Jacket' },
    { id: 6, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata43.jpg?raw=true', alt: 'Awesome Shoes' },
    { id: 7, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata42.jpg?raw=true', alt: 'Amazing Shirt' },
    { id: 8, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata44.jpg?raw=true', alt: 'Stylish Bag' },
    { id: 9, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata45.jpg?raw=true', alt: 'T-shirt Designs' },
    { id: 10, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata46.jpg?raw=true', alt: 'T-shirt Designs' },
    { id: 11, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata47.jpg?raw=true', alt: 'T-shirt Designs' },
    { id: 12, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata49.jpg?raw=true', alt: 'T-shirt Designs' },
    { id: 13, src: 'https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata50.jpg?raw=true', alt: 'T-shirt Designs' },
];

function Products() {
    return (
        <div className="relative min-h-screen flex justify-center items-center p-6">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://cdn.pixabay.com/video/2022/11/26/140582-775389269_tiny.mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

            {/* Content */}
            <div className="relative max-w-6xl w-full z-20">
                <h2 className="text-4xl font-bold text-center mb-8 text-white">
                    Featured Clothing Collection
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {clothes.map((item, index) => (
                        <FeatureMotionWrapper index={index}>
                            <motion.div
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white rounded-2xl shadow-lg p-4"
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                <p className="mt-4 text-center text-gray-700 font-medium">
                                    {item.alt}
                                </p>
                            </motion.div>
                        </FeatureMotionWrapper>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
