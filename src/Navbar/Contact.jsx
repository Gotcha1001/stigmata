import { SiTiktok } from 'react-icons/si';
import React from 'react';
import { Facebook, Mail, Instagram, Twitter, Phone } from 'lucide-react';
import FeatureMotionWrapper from '../Components/FramerMotion/FeatureMotionWrapperMap';

export default function Contact() {
    const socialLinks = [
        {
            platform: "Facebook",
            icon: <Facebook size={28} color="#1877F2" />, // Facebook blue
            url: "https://www.facebook.com/ArtOfStigmata",
            handle: "Art Of Stigmata"
        },
        {
            platform: "Instagram",
            icon: <Instagram size={28} color="#E4405F" />, // Instagram pink
            url: "https://www.instagram.com/stigmata031/?hl=en",
            handle: "Stigmata031"
        },
        {
            platform: "Twitter",
            icon: <Twitter size={28} color="#1DA1F2" />, // Twitter blue
            url: "https://x.com/stigmata_ATM",
            handle: "Stigmata ATM"
        },
        {
            platform: "TikTok",
            icon: <SiTiktok size={28} color="#000000" />, // TikTok black
            url: "https://www.tiktok.com/@stigmata031",
            handle: "Stigmata 03"
        }
    ];

    const contactInfo = [
        {
            type: "Email",
            icon: <Mail size={40} color="#C4B5FD" />, // Light purple
            value: "sadboystig@gmail.com",
            link: "mailto:sadboystig@gmail.com"
        },
        {
            type: "Cellphone",
            icon: <Phone size={40} color="#C4B5FD" />, // Light purple
            value: "(+27) 81 537 0498",
            link: "tel:+27815370498"
        }
    ];

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


                <div className="relative container mx-auto max-w-4xl text-center p-8 bg-gradient-to-r from-purple-900 via-indigo-700 to-black rounded-lg shadow-2xl">
                    <h1 className="text-5xl font-bold text-indigo-500 mb-6">Contact Me</h1>

                    <p className="text-lg mb-6">Reach out through any of the platforms below:</p>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {contactInfo.map((contact, index) => (
                            <FeatureMotionWrapper index={index}>
                                <a
                                    href={contact.link}
                                    key={contact.type}
                                    className="flex flex-col items-center justify-center p-3 gradient-background2 rounded-lg hover:bg-opacity-30 transition duration-300 group text-center"
                                >
                                    <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {contact.icon}
                                    </div>
                                    <span className="text-center">
                                        <div className="text-xs opacity-70">{contact.type}</div>
                                        <div>{contact.value}</div>
                                    </span>
                                </a>
                            </FeatureMotionWrapper>

                        ))}
                    </div>

                    {/* Social Media */}
                    <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">Social Media</h2>
                    <div className="flex flex-wrap justify-center gap-6">

                        {socialLinks.map((social, index) => (
                            <FeatureMotionWrapper index={index}>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={social.platform}
                                    className="flex flex-col items-center p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition duration-300 group w-32 h-24"
                                >
                                    <div className="mb-2 group-hover:scale-110 transition-all duration-300">
                                        {social.icon}
                                    </div>
                                    <span className="text-sm text-gray-200">{social.handle}</span>
                                </a>
                            </FeatureMotionWrapper>
                        ))}
                    </div>
                </div>


                {/* Wellness Section */}
                <div className="mt-12 bg-indigo-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Live in the Present</h2>
                    <p className="mt-4 text-lg">
                        Live a life of being in the present. Start from now, and be the person you want to be. You have the power and
                        encouragement to be the healthiest and happiest soul alive. By eating well and improving your lifestyle with the help
                        of science, you can achieve your goals and live fully. Seize this moment to transform your life, one healthy choice at a time.
                    </p>
                </div>

                {/* Additional wellness sections remain unchanged */}

                <div className="mt-12 bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Live in the Present</h2>
                    <p className="mt-4 text-lg">
                        Live a life of being in the present. Start from now, and be the person you want to be. You have the power and
                        encouragement to be the healthiest and happiest soul alive. By eating well and improving your lifestyle with the help
                        of science, you can achieve your goals and live fully. Seize this moment to transform your life, one healthy choice at a time.
                    </p>
                </div>

                <div className="mt-8 bg-green-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Nourish Your Body</h2>
                    <p className="mt-4 text-lg">
                        Fuel your body with wholesome, nutritious foods. A balanced diet full of fruits, vegetables, lean proteins, and whole grains
                        gives your body the energy and nutrients it needs to thrive.
                    </p>
                </div>

                <div className="mt-8 bg-orange-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Stay Hydrated</h2>
                    <p className="mt-4 text-lg">
                        Water is essential for every cell in your body. Make sure to drink enough water throughout the day to keep yourself hydrated,
                        energized, and focused.
                    </p>
                </div>

                <div className="mt-8 bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Move Your Body</h2>
                    <p className="mt-4 text-lg">
                        Incorporate physical activity into your daily routine. Whether it’s a walk, a workout, or dancing, moving your body boosts
                        your mood, strengthens your muscles, and improves your overall health.
                    </p>
                </div>

                <div className="mt-8 bg-red-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Practice Gratitude</h2>
                    <p className="mt-4 text-lg">
                        Cultivate gratitude by acknowledging the positive aspects of your life. Regularly reflecting on what you’re thankful for can
                        uplift your spirit and create a sense of contentment and peace.
                    </p>
                </div>

                <div className="mt-8 bg-yellow-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Prioritize Sleep</h2>
                    <p className="mt-4 text-lg">
                        Sleep is essential for recovery and mental well-being. Aim for 7-9 hours of quality sleep each night to rejuvenate your body and mind,
                        allowing you to wake up refreshed and ready for the day.
                    </p>
                </div>

                <div className="mt-8 bg-teal-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Build Connections</h2>
                    <p className="mt-4 text-lg">
                        Strong social connections can improve your mood and boost your emotional health. Spend time with loved ones, foster meaningful relationships,
                        and build a supportive community around you.
                    </p>
                </div>

                <div className="mt-8 bg-indigo-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Practice Mindfulness</h2>
                    <p className="mt-4 text-lg">
                        Being mindful allows you to fully engage with the present moment. Whether through meditation, deep breathing, or simply focusing on your surroundings,
                        practicing mindfulness can reduce stress and promote inner calm.
                    </p>
                </div>

                <div className="mt-8 bg-gray-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Set Personal Boundaries</h2>
                    <p className="mt-4 text-lg">
                        Protect your mental and emotional well-being by setting clear boundaries in your personal and professional life. Respect your limits and give yourself
                        permission to say no when needed.
                    </p>
                </div>

                <div className="mt-8 bg-pink-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Find Joy in Movement</h2>
                    <p className="mt-4 text-lg">
                        Choose physical activities that bring you joy. Whether it’s yoga, hiking, or playing sports, finding joy in movement helps create a sustainable, active lifestyle
                        that enhances both your physical and emotional well-being.
                    </p>
                </div>

                <div className="mt-8 bg-lime-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold">Embrace Lifelong Learning</h2>
                    <p className="mt-4 text-lg">
                        Keep your mind active and engaged by embracing lifelong learning. Whether through reading, taking courses, or exploring new hobbies,
                        continuous learning promotes cognitive health and personal growth.
                    </p>
                </div>




            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Recipe List */}
                {/* Include the previous recipe cards here */}
            </div>



        </div >
    );
}
