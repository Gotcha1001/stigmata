import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../Firebaseconfig/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { FaWhatsapp } from 'react-icons/fa';
import MotionWrapperDelay from '../Components/FramerMotion/MotionWrapperDelay';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const clickSoundRef = useRef(null);
    const navigate = useNavigate();
    const adminEmail = "admin@example.com";
    const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
    const adminDropdownRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Burger menu state

    // State for user details
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        clickSoundRef.current = new Audio("/Put.mp3");

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                if (currentUser.providerData[0].providerId === 'google.com') {
                    setUserDetails({
                        firstName: currentUser.displayName,
                        lastName: ''
                    });
                } else {
                    try {
                        const usersRef = collection(db, 'users');
                        const q = query(usersRef, where('uid', '==', currentUser.uid));
                        const querySnapshot = await getDocs(q);
                        if (!querySnapshot.empty) {
                            const userDoc = querySnapshot.docs[0].data();
                            setUserDetails(userDoc);
                        } else {
                            console.log("No such document!");
                            setUserDetails(null);
                        }
                    } catch (error) {
                        console.error("Error fetching user details:", error);
                        setUserDetails(null);
                    }
                }
            } else {
                setUser(null);
                setUserDetails(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const playClickSound = () => {
        clickSoundRef.current.play();
    };

    const logout = async () => {
        try {
            await signOut(auth);
            navigate("/"); // Redirect to the home page after logout
        } catch (error) {
            console.error(error);
        }
    };

    const toggleAdminDropdown = () => {
        setIsAdminDropdownOpen(!isAdminDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (adminDropdownRef.current && !adminDropdownRef.current.contains(event.target)) {
                setIsAdminDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        playClickSound();
        setIsMenuOpen(false);
    };

    // Function to capitalize each word in the user's name
    const capitalizeName = (name) => {
        if (!name) return "";
        return name
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    };

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
            <nav className="gradient-background2 text-white py-4">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                    {/* Logo and Title Section */}

                    <div className="flex flex-col items-center md:items-start md:flex-row md:mr-auto md:mb-0 mx-4 md:mx-0">
                        <Link to="/" className="text-2xl font-bold flex flex-col items-center" onClick={playClickSound}>
                            <img
                                src="/logo2.jpg"
                                alt="Logo"
                                className="rounded-2xl mb-2 md:mb-0 w-64 h-32 md:w-64 md:h-16 lg:w-64 lg:h-12 xl:w-64 xl:h-16 hover:scale-105 transition-all"
                            />
                        </Link>
                    </div>






                    {/* Burger Menu Button (Visible on smaller screens) */}
                    <div className="md:hidden flex flex-col items-center mt-4">
                        <button onClick={toggleMenu} className="text-white mb-2">
                            <svg
                                className="w-10 h-10"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>

                        {/* Mobile Menu Links (Visible when menu is open on smaller screens) */}
                        <div className={`flex flex-col items-center space-y-4 ${isMenuOpen ? "flex" : "hidden"}`}>

                            <NavLink to="/products" onClick={handleLinkClick} className={({ isActive }) =>
                                `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                                Products
                            </NavLink>
                            <NavLink to="/portfolio" onClick={handleLinkClick} className={({ isActive }) =>
                                `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                                Portfolio
                            </NavLink>
                            <NavLink to="/videos" onClick={handleLinkClick} className={({ isActive }) =>
                                `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                                Videos
                            </NavLink>
                            <NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) =>
                                `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                                Contact
                            </NavLink>
                            <NavLink to="/dreams" onClick={handleLinkClick} className={({ isActive }) =>
                                `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                                Dreams
                            </NavLink>
                            <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) =>
                                `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                                Home
                            </NavLink>






                            {/* WhatsApp Icon for Small Screens */}
                            <a href="https://wa.me/27845604003" target="_blank" rel="noopener noreferrer" className="mt-4">
                                <FaWhatsapp size={40} className="text-green-600 hover:opacity-75" />
                            </a>

                            {/* User Section for Smaller Screens */}
                            {user && (
                                <div className="flex flex-col items-center space-y-4">
                                    <span className="text-primary-800 text-xl font-bold">
                                        Welcome, {userDetails ? `${capitalizeName(userDetails.firstName)} ${capitalizeName(userDetails.lastName)}` : 'User'}
                                    </span>
                                    <button onClick={logout} className="text-white hover:text-teal-300 text-xl font-bold">
                                        Logout
                                    </button>
                                </div>
                            )}
                            {!user && (
                                <div className="flex flex-col items-center space-y-4">
                                    <NavLink to="/register" onClick={handleLinkClick} className={({ isActive }) =>
                                        `${isActive ? "text-black" : "text-white hover:text-teal-300"} text-xl font-bold`}>
                                        Register
                                    </NavLink>
                                    <NavLink to="/login" onClick={handleLinkClick} className={({ isActive }) =>
                                        `${isActive ? "text-black" : "text-white hover:text-teal-300"} text-xl font-bold`}>
                                        Login
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Navigation Links Section (Visible on larger screens) */}
                    <div className="hidden md:flex flex-row items-center space-x-6 md:space-x-16 ml-auto mr-14">

                        <NavLink to="/products" onClick={handleLinkClick} className={({ isActive }) =>
                            `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                            Products
                        </NavLink>
                        <NavLink to="/portfolio" onClick={handleLinkClick} className={({ isActive }) =>
                            `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                            Portfolio
                        </NavLink>

                        <NavLink to="/videos" onClick={handleLinkClick} className={({ isActive }) =>
                            `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                            Videos
                        </NavLink>
                        <NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) =>
                            `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                            Contact
                        </NavLink>

                        <NavLink to="/dreams" onClick={handleLinkClick} className={({ isActive }) =>
                            `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                            Dreams
                        </NavLink>

                        <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) =>
                            `${isActive ? "text-teal-500" : "text-white hover:text-teal-300"} text-sm font-bold`}>
                            Home
                        </NavLink>

                        {/* WhatsApp Icon for Large Screens */}
                        <a href="https://wa.me/+27815370498" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={60} className="ml-4 text-green-600 hover:opacity-75 horizontal-spin" />
                        </a>

                        {/* User Section for Larger Screens */}
                        {user && (
                            <div className="flex items-center space-x-6 md:space-x-8 ml-6">
                                <span className="text-lg text-primary-800 font-bold">
                                    Welcome, {userDetails ? `${capitalizeName(userDetails.firstName)} ${capitalizeName(userDetails.lastName)}` : 'User'}
                                </span>
                                <button onClick={logout} className="text-white hover:text-teal-300 text-xl font-bold">
                                    Logout
                                </button>
                            </div>
                        )}
                        {!user && (
                            <div className="flex items-center space-x-6 md:space-x-8 ml-6">
                                <NavLink to="/register" onClick={handleLinkClick} className={({ isActive }) =>
                                    `${isActive ? "text-black" : "text-white hover:text-teal-300"} text-xl font-bold`}>
                                    Register
                                </NavLink>
                                <NavLink to="/login" onClick={handleLinkClick} className={({ isActive }) =>
                                    `${isActive ? "text-black" : "text-white hover:text-teal-300"} text-xl font-bold`}>
                                    Login
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </MotionWrapperDelay>
    );
};

export default Navbar;
