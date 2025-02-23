import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "UiIT Labs Expert System (FYP)",
            description:
                "Real-time lab management system for university labs, automating equipment tracking, complaint management, and inventory management.",
            link: null,
        },
        {
            title: "Electronics E-Commerce Website",
            description:
                "Full-stack e-commerce platform for electronics, enabling users to browse products, place orders, and track shipments.",
            link: "https://minitronix.org/",
        },
        {
            title: "Food App",
            description:
                "Full-stack food ordering system, allowing users to browse menus, order, and track deliveries.",
            link: "https://abbasifoods.netlify.app/",
        },
        {
            title: "Auto Spare Parts Management System",
            description:
                "Desktop application for managing auto spare parts inventory, enabling users to add, update, and delete products.",
            link: null,
        },
        {
            title: "Book App",
            description:
                "Full-stack book management app with features for browsing, adding, and updating book details.",
            link: "https://abbasibookapp.netlify.app/",
        },
        {
            title: "Netflix Clone",
            description:
                "Recreated a Netflix-like streaming platform with a dynamic user interface built in React.js.",
            link: null,
        },
        {
            title: "Parking Management System",
            description:
                "C++ & Java application to manage car parking operations, recording vehicle details and calculating parking fees.",
            link: null,
        },
        {
            title: "Rock Paper Scissors Game",
            description:
                "Python-based Rock Paper Scissors game that supports two-player mode and an AI opponent.",
            link: null,
        },
        {
            title: "Car and Parts Sales Website",
            description:
                "Dynamic website using WAMP (Windows, Apache, MySQL, PHP) for car and auto parts sales.",
            link: null,
        },
    ];

    return (
        <section id="projects" className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-center font-bold text-blue-500 my-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-6 rounded-lg shadow-lg  shadow-md transition-transform transform hover:scale-105"
                        >
                            <h3 className="text-xl font-bold text-blue-500 mb-4">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            {
                                project.link != null ?
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 hover:cursor-pointer"
                                    >
                                        View Project
                                    </a> : ''
                            }

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;