import React from 'react';


export default function AgentsAndClinics() {
    const contacts = [
        {
            name: "JML Health and Wellness",
            contact: "Dr. Lotz",
            phone: "+27 82 722 7166",
            address: "674 Conan Street, Moreleta Park, Pretoria",
        },
        {
            name: "Michelle Joubert",
            phone: "082 925 6121",
            address: "De La Rey Straat 53, Bronkhorstspruit, 1020",
        },
        {
            name: "Idd Skin Sense",
            contact: "Ingrid Davey",
            phone: "079 895 4036",
            address: "9 Whitby Street, Summerstrand, Port Elizabeth",
        },
        {
            name: "Arrie Nel Apteek",
            contact: "Alta Barkhuizen",
            phone: "083 707 8105",
            address: "Ladybrand",
        },
        {
            name: "Aniska Skin and Art",
            phone: "082 407 2355",
            address: "32 Russell Street, Nelspruit",
        },
        {
            name: "Erika du Toit",
            phone: "+27 82 781 8272",
            address: "19 Holtzhausen Road, Baillie Park, Potchefstroom",
        },
        {
            name: "Bright on Health",
            contact: "Dr. Karasee",
            phone: "082 779 7525",
            address: "201 Tara Road, Bluff, Durban",
        },
        {
            name: "Hair Infinity",
            contact: "Rudi Pretorius",
            phone: "+27 76 381 1193",
            address: "1 Chesterton Road, Stilfontein",
        },
        {
            name: "Dr. Maharaj",
            phone: "076 931 5762",
            address: "20 Connor Street, Port Shepstone",
        },
    ];

    return (
        <section className="relative min-h-screen overflow-hidden flex  justify-center py-8">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover -z-100"
            >
                <source src={"https://cdn.pixabay.com/video/2020/07/29/45919-447070813_tiny.mp4"} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 w-full text-center">
                <h1 className="text-4xl font-bold text-white zoom mb-12">Agents And Clinics</h1>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-90 shadow-teal rounded-lg p-6 text-center flex flex-col items-center space-y-2 transform transition-transform duration-300 hover:-translate-y-2"
                        >
                            <h2 className="text-xl font-semibold text-gray-800">{contact.name}</h2>
                            {contact.contact && (
                                <p className="text-gray-700">Contact: {contact.contact}</p>
                            )}
                            <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                                Phone: {contact.phone}
                            </a>
                            <p className="text-gray-600">{contact.address}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
