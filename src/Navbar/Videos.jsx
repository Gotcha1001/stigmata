import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Videos() {
    const [state, handleSubmit] = useForm("xrbzjwno");

    return (
        <section className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="object-cover w-full h-full z-19"
                    autoPlay
                    muted
                    loop
                >
                    <source src="https://videos.pexels.com/video-files/2845487/2845487-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto shadow-lg border-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-black border-indigo-500 bg-white rounded-lg p-4 mb-6 max-w-4xl">
                {/* Title */}
                <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8 animate-bounce rounded-lg">
                    About Our Vision
                </div>
                {/* Benefits Cards */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-3">
                    <h2 className='gradient-title'>FEELING ...</h2>
                </div>
            </div>

            {/* Detailed Information on Cancer-Fighting and Weight-Loss Products */}
            <div className="relative z-10 container mx-auto bg-white shadow-lg rounded-lg p-12 mb-6 max-w-4xl bg-gradient-to-r from-black via-indigo-700 to-slate-900 border-2 border-indigo-500 ">
                <div className="text-center font-serif text-3xl font-bold text-primary-950 mb-8 rounded-lg ">
                    The Art In Motion...
                </div>
                <div className="space-y-6">
                    {/* YouTube Videos */}
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
                        {/* Video 1 */}
                        <div className="w-full sm:w-1/2">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/EWAL7M7Nnc4"
                                title="YouTube video 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className='rounded-xl'
                            ></iframe>
                        </div>
                        {/* Video 2 */}
                        <div className="w-full sm:w-1/2">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/T6fjrZh_vxw"
                                title="YouTube video 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className='rounded-xl'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
