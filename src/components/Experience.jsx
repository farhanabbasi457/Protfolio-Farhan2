import React from "react";

const Experience = () => {
    return (
        <section id="experience" className="py-16 bg-gray-900 " >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-500 my-14">Professional Experience</h2>
                <div className="flex flex-col gap-4 p-4 bg-gray-800 ">
                    <h1 className="text-xl text-blue-500">Software Developer Intern | Softwise Solution</h1>
                    <h2>Oct 2024 – May 2025</h2>

                    <ul className="mt-2">
                        <li className="mb-2">•   Developed 3+ web applications using the MERN stack, focusing on front-end design with Tailwind CSS,SCSS and back-end APIs with Node.js and Express.js.</li>
                        <li className="mb-2">•   Improved front-end responsiveness and optimized load times by 20%.</li>
                        <li className="mb-2">•   Collaborated in an Agile environment, participating in daily stand-ups and sprint planning.</li>
                        <li className="mb-2">•   Implemented MongoDB database structures and integrated cloud deployment pipelines.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;