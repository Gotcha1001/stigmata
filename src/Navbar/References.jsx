import React from 'react';
import MotionWrapperDelay from '../Components/FramerMotion/MotionWrapperDelay';
import FeatureMotionWrapper from '../Components/FramerMotion/FeatureMotionWrapperMap';

const References = () => {
    return (
        <div className="relative w-full overflow-hidden min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white">
            {/* Video Background */}
            <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full opacity-20">
                <source src="https://cdn.pixabay.com/video/2019/07/20/25380-350507864_large.mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-24">
                {/* Title */}
                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >   <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text animate-pulse">
                        Portfolio
                    </h1></MotionWrapperDelay>

                <a
                    href="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/STIGMATA%20P4.jpg?raw=true"
                    download
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:scale-105"
                >
                    Download INFO PDF
                </a>

                {/* Image and Text Sections */}
                <div className="bg-white bg-opacity-90 hover:bg-purple-500 transition-all duration-300 mt-16 text-black rounded-lg shadow-lg p-12 max-w-4xl w-full text-center transform hover:scale-105 bg-gradient-to-r from purple-500 via-indigo-600 to-teal-500">
                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/STIGMATA%20P1.jpg?raw=true"
                            alt="Health Products"
                            className="w-full h-80 object-contain mb-6 rounded-md  "
                        />

                        <p className="text-3xl mb-4 bg-purple-700 text-white p-3 rounded-lg shadow-md">Stigmata 031</p>
                        <p className="text-lg">Explore My Journey</p></MotionWrapperDelay>
                </div>
                <div className='mt-10'>
                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >    <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/STIGMATA%20P2.jpg?raw=true"
                            alt="Health Products"
                            className="w-full h-80 object-contain mb-6 rounded-md transform transition-transform duration-300 hover:scale-110"
                        /></MotionWrapperDelay>

                </div>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >   <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/STIGMATA%20P3.jpg?raw=true"
                            alt="Health Products"
                            className="w-full h-80 object-contain mb-6 rounded-md transform transition-transform duration-300 hover:scale-110"
                        /></MotionWrapperDelay>
                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >    <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/STIGMATA%20P4.jpg?raw=true"
                            alt="Health Products"
                            className="w-full h-80 object-contain rounded-lg mb-6  transform transition-transform duration-300 hover:scale-110"
                        /> </MotionWrapperDelay>

                </div>
                <div className='mt-10'>
                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >        <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata1.jpg?raw=true"
                            alt="Health Products"
                            className="w-full h-80 object-contain mb-6 rounded-md transform transition-transform duration-300 hover:scale-110"
                        /></MotionWrapperDelay>
                </div>



                {/* Biography Section */}
                <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from purple-500 via-indigo-600 to-teal-500 bg-opacity-90 shadow-lg rounded-lg text-black mt-16">
                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >  <h1 className="text-5xl font-bold mb-8 gradient-background2 p-4 rounded-md animate-bounce text-center text-white">Portfolio</h1></MotionWrapperDelay>

                    <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-80 shadow-lg rounded-lg text-black">
                        <h2 className="text-2xl font-bold mb-4">References</h2>

                        <h3 className="text-xl font-semibold mt-6">Biography</h3>
                        <p className="mt-2 text-gray-700">
                            Nkosinathi Emmanuel Mdadane, popularly known as “Stigmata 031,” is a South African visual artist born on October 24, 1991, in Durban. He began sketching at the age of 7 in primary school, unaware that his skill would later become a career. At 16, he ventured into graffiti and tattooing, gaining exposure and confidence as a trusted tattoo artist in his hometown.
                        </p>

                        <p className="mt-4 text-gray-700">
                            In 2013, he moved to Johannesburg, where he worked as a tattoo artist at Soweto Ink. By 2015, he became a celebrity tattoo artist when South African musician Emtee signed him as the official tattoo artist for the African Trap Movement. This exposure connected him with international award-winning musicians like Burna Boy, Wizkid, and Sjava.
                        </p>

                        <h3 className="text-xl font-semibold mt-6">Artist Portfolio</h3>
                        <p className="mt-2 text-gray-700">
                            Before relocating to Johannesburg, Stigmata 031 worked at Safari Surf Boards as a sprayer in 2010 and later at Baron Surf Boards in 2013 as a surfboard custom designer. He applied these skills to graffiti, striving for realism in his art. His transition to full-time tattooing was driven by the challenge of working on human skin, where errors cannot be undone, pushing him to master his craft.
                        </p>

                        <h3 className="text-xl font-semibold mt-6">Contact Details</h3>
                        <p className="mt-2 text-gray-700"><strong>Email Address:</strong> sadboystig@gmail.com</p>
                        <p className="mt-2 text-gray-700"><strong>Cellphone Number:</strong> (+27) 81 537 0498</p>

                        <h3 className="text-xl font-semibold mt-6">Social Media Accounts</h3>
                        <p className="mt-2 text-gray-700"><strong>Facebook Page:</strong> Art Of Stigmata</p>
                        <p className="mt-2 text-gray-700"><strong>Instagram:</strong> Stigmata031</p>
                        <p className="mt-2 text-gray-700"><strong>Twitter:</strong> Stigmata ATM</p>
                        <p className="mt-2 text-gray-700"><strong>TikTok:</strong> Stigmata 03</p>
                    </div>




                </div>
                {/* Image Grid */}
                <div className="container mx-auto mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, index) => (
                            <FeatureMotionWrapper index={index}>    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={`https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/STIGMATA%20T${index + 1}.jpg?raw=true`}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div></FeatureMotionWrapper>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default References;
