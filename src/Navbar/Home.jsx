import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { auth, db } from "../Firebaseconfig/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";


import Spinner from "../SpecialSetups/Spinner";
import MotionWrapperDelay from "../Components/FramerMotion/MotionWrapperDelay";
import FeatureMotionWrapper from "../Components/FramerMotion/FeatureMotionWrapperMap";

const Home = () => {
    const adminEmail = "admin@example.com";

    const [backgroundMediaUrl, setBackgroundMediaUrl] = useState("");
    const [mainImageUrl, setMainImageUrl] = useState("");
    const [showBackgroundDialog, setShowBackgroundDialog] = useState(false);
    const [showMainImageDialog, setShowMainImageDialog] = useState(false);
    const [newMediaUrl, setNewMediaUrl] = useState("");
    const [isBackgroundVideo, setIsBackgroundVideo] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const [hasProfile, setHasProfile] = useState(false); // State to track if the user has a profile
    const [isLoading, setIsLoading] = useState(true); // State for loading state

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user.email);
                setIsAdmin(user.email === adminEmail);
                checkUserProfile(user.uid); // Check if user has a profile
            } else {
                setCurrentUser(null);
                setIsAdmin(false);
                setHasProfile(false); // Reset profile status when user logs out
            }
        });

        const fetchBackgroundMedia = async () => {
            try {
                const docRef = doc(collection(db, "settings"), "background");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setBackgroundMediaUrl(data.backgroundMediaUrl || "");
                    setIsBackgroundVideo(data.isBackgroundVideo || false);
                    setMainImageUrl(data.mainImageUrl || "");
                    console.log("Fetched Data:", data); // Verify data fetched
                    console.log("Main Image URL:", data.mainImageUrl); // Verify URL
                } else {
                    setBackgroundMediaUrl("");
                    setIsBackgroundVideo(false);
                    setMainImageUrl("");
                }
            } catch (error) {
                console.error("Error fetching background media:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBackgroundMedia();
    }, []);

    const checkUserProfile = async (uid) => {
        try {
            const profileRef = doc(db, "profiles", uid);
            const profileSnap = await getDoc(profileRef);
            if (profileSnap.exists()) {
                setHasProfile(true);
            } else {
                setHasProfile(false);
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    const handleBackgroundMediaSubmit = async () => {
        const isVideo = newMediaUrl.endsWith(".mp4");
        setBackgroundMediaUrl(newMediaUrl);
        setIsBackgroundVideo(isVideo);
        setShowBackgroundDialog(false);
        setNewMediaUrl("");

        const docRef = doc(collection(db, "settings"), "background");
        await setDoc(docRef, { backgroundMediaUrl: newMediaUrl, isBackgroundVideo: isVideo, mainImageUrl }); // Update background media
    };

    const handleMainImageUrlSubmit = async () => {
        setMainImageUrl(newMediaUrl);
        setShowMainImageDialog(false);
        setNewMediaUrl("");

        const docRef = doc(collection(db, "settings"), "background");
        await setDoc(docRef, { backgroundMediaUrl, isBackgroundVideo, mainImageUrl: newMediaUrl }); // Update main image URL
    };


    useEffect(() => {
        console.log("Main Image URL updated:", mainImageUrl);
    }, [mainImageUrl]);




    if (isLoading) {
        return <Spinner />; // Show spinner while loading
    }

    return (
        <div
            className="relative flex min-h-screen flex-col items-center justify-start p-4"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                filter: "brightness(90%)", // slightly reduce brightness
            }}
        >
            {isBackgroundVideo ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={backgroundMediaUrl}
                    autoPlay
                    loop
                    muted
                />
            ) : (
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url(${backgroundMediaUrl})`,
                    }}
                />
            )}

            {currentUser === adminEmail && (
                <>
                    <button
                        className="relative left-4 top-3 z-10 mb-4 rounded-full bg-teal-600 px-4 py-2 text-white shadow-lg transition-colors duration-300 hover:bg-teal-700 md:left-3"
                        onClick={() => setShowBackgroundDialog(true)}
                    >
                        Change Background
                    </button>
                    <button
                        className="relative left-4 top-3 z-10 mb-4 rounded-full bg-teal-600 px-4 py-2 text-white shadow-lg transition-colors duration-300 hover:bg-teal-700 md:left-3"
                        onClick={() => setShowMainImageDialog(true)}
                    >
                        Change Main Image
                    </button>
                </>
            )}

            <h1 className="gradient-background2 mb-10 rounded-full p-8 text-center text-6xl font-bold text-white  md:text-4xl z-20">
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
                    <img src="/logo1.jpg" alt="logo" height={150} width={150} className="rounded-lg border border-indigo-800 hover:scale-105 transition-all" />
                </MotionWrapperDelay>
            </h1>

            {/* Main Image Changeable */}


            <div className="mb-8 w-full max-w-2xl md:w-4/5 lg:max-w-3xl ">
                <img
                    src={mainImageUrl}
                    alt="Main Image"
                    className=" mx-auto rounded-lg shadow-lg mb-10 hover:scale-105 transition-all "
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: 'block',
                        position: 'relative',
                        zIndex: 10
                    }}
                />


            </div>


            <Carousel
                className="mb-8 w-full md:w-3/4"
                style={{ maxWidth: "600px" }}
                interval={1000}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata1.jpg?raw=true"
                        alt="First slide"
                        style={{ objectFit: "contain", height: "400px" }} // Ensure the image is not cropped
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata11.jpg?raw=true"
                        alt="Second slide"
                        style={{ objectFit: "contain", height: "400px" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata12.jpg?raw=true"
                        alt="Third slide"
                        style={{ objectFit: "contain", height: "400px" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata13.jpg?raw=true"
                        alt="Fourth slide"
                        style={{ objectFit: "contain", height: "400px" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata14.jpg?raw=true"
                        alt="Fifth slide"
                        style={{ objectFit: "contain", height: "400px" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata15.jpg?raw=true"
                        alt="Sixth slide"
                        style={{ objectFit: "contain", height: "400px" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata16.jpg?raw=true"
                        alt="Seventh slide"
                        style={{ objectFit: "contain", height: "400px" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata28.jpg?raw=true"
                        alt="Eighth slide"
                        style={{ objectFit: "contain", height: "400px" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata29.jpg?raw=true"
                        alt="Eighth slide"
                        style={{ objectFit: "contain", height: "400px" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata33.jpg?raw=true"
                        alt="Eighth slide"
                        style={{ objectFit: "contain", height: "400px" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata31.jpg?raw=true"
                        alt="Eighth slide"
                        style={{ objectFit: "contain", height: "400px" }}
                    />
                </Carousel.Item>
            </Carousel>

            {/* <motion.a
                href="https://shop-diet-and-health-clinic.catalog.kyte.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded mb-10 bg-teal-600 px-4 py-2 text-white shadow-lg transition-colors duration-300 hover:bg-teal-700 z-20"
                whileHover={{ scale: 1.3 }}
            >
                Order Online
            </motion.a> */}


            {/* Background Carousel */}
            <Carousel
                className="mb-8 w-full md:w-3/4"
                style={{ maxWidth: "600px" }}
                interval={1000}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata34.jpg?raw=true"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata35.jpg?raw=true"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata37.jpg?raw=true"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata52.jpg?raw=true"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata3.jpg?raw=true"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata12.jpg?raw=true"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata13.jpg?raw=true"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata6.jpg?raw=true"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata51.jpg?raw=true"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata24.jpg?raw=true"
                        alt="Fourth slide"
                    />
                </Carousel.Item>

            </Carousel>

            {/* Add the order online link below the main image */}


            {/* Artwork Grid */}
            <div className="mt-4 grid w-full grid-cols-1 gap-4 md:w-3/4 md:grid-cols-2 lg:grid-cols-3">
                {[
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata7.jpg?raw=true",
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata35.jpg?raw=true",
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata9.jpg?raw=true",
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata8.jpg?raw=true",
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata17.jpg?raw=true",
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata18.jpg?raw=true",
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata19.jpg?raw=true",
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata21.jpg?raw=true",
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata22.jpg?raw=true",
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata23.jpg?raw=true",
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata40.jpg?raw=true",
                    "https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Stigmata48.jpg?raw=true"

                ].map((src, index) => (
                    <FeatureMotionWrapper index={index}>
                        <motion.div
                            key={index}
                            className="h-64 w-full overflow-hidden rounded-lg shadow-lg relative"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <img
                                className="object-cover h-full w-full"
                                src={src}
                                alt="Artwork"
                            />
                        </motion.div>
                    </FeatureMotionWrapper>
                ))}
            </div>

            {/* Background Media Dialog */}
            {showBackgroundDialog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                        <h2 className="mb-4 text-xl font-semibold">
                            Enter Background Media URL
                        </h2>
                        <input
                            type="text"
                            value={newMediaUrl}
                            onChange={(e) => setNewMediaUrl(e.target.value)}
                            placeholder="Enter image or video URL"
                            className="mb-4 w-full rounded border border-gray-300 p-2"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowBackgroundDialog(false)}
                                className="mr-2 rounded bg-gray-300 px-4 py-2 text-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleBackgroundMediaSubmit}
                                className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Image URL Dialog */}
            {showMainImageDialog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                        <h2 className="mb-4 text-xl font-semibold">
                            Enter Main Image URL
                        </h2>
                        <input
                            type="text"
                            value={newMediaUrl}
                            onChange={(e) => setNewMediaUrl(e.target.value)}
                            placeholder="Enter image URL"
                            className="mb-4 w-full rounded border border-gray-300 p-2"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowMainImageDialog(false)}
                                className="mr-2 rounded bg-gray-300 px-4 py-2 text-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleMainImageUrlSubmit}
                                className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Home;
