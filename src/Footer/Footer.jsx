import React from 'react';
import { NavLink } from 'react-router-dom';
import MotionWrapperDelay from '../Components/FramerMotion/MotionWrapperDelay';


const Footer = () => {
    const playClickSound = () => {
        const clickSound = new Audio("/Put.mp3");
        clickSound.play();
    };

    const currentYear = new Date().getFullYear();

    return (
        <MotionWrapperDelay
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <footer className="gradient-background2 text-white py-2">
                <div className="container mx-auto flex flex-col items-center space-y-3 sm:space-y-0 sm:flex-row sm:justify-between">
                    {/* Links Section */}
                    <ul className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <li>
                            <NavLink
                                to="/data-protection"
                                onClick={playClickSound}
                                className={({ isActive }) =>
                                    isActive ? "text-teal-400" : "text-gray-100 hover:text-teal-300"
                                }
                            >
                                Data Protection
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/terms"
                                onClick={playClickSound}
                                className={({ isActive }) =>
                                    isActive ? "text-teal-400" : "text-gray-100 hover:text-teal-300"
                                }
                            >
                                Terms of Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/privacy"
                                onClick={playClickSound}
                                className={({ isActive }) =>
                                    isActive ? "text-teal-400" : "text-gray-100 hover:text-teal-300"
                                }
                            >
                                Privacy Policy
                            </NavLink>
                        </li>
                    </ul>

                    {/* Logo Section */}
                    <div className="flex justify-center mt-2 sm:mt-0">
                        <img
                            src="/logo1.jpg"
                            alt="Art"
                            className="h-20 w-24 horizontal-spin rounded-lg"
                        />
                    </div>
                </div>

                <div className="text-center mt-1">
                    <p className="text-xs text-white">&copy; {currentYear} CODENOW101. All rights reserved.</p>
                </div>
            </footer>
        </MotionWrapperDelay>

    );


};

export default Footer;
