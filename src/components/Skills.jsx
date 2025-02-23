import React from "react";

const Skills = () => {
    const skills = [{
        'Frontend Technologies': [
            "HTML5",
            "CSS",
            "SCSS",
            "Tailwind CSS",
            "React.js",
        ]
    },
    {
        'Backend Technologies': [
            "Node.js",
            "Express.js",
        ]
    },
    {
        'Programming Languages': [
            "Java",
            "C++",
            "C#",
            "Python",
            "Assembly Language",
        ]
    },
    {
        "Database Management": [
            "SQL",
            "Oracle",
            "MongoDB",
        ]
    },
    {
        "Development Tools": [
            "VS Code",
            "PyCharm",
            "Postman",
            "Visual Studio",
            "8086 Emulator",
        ]
    },
    {
        "Version Control": [
            "Git",
            "GitHub",
        ]
    },
    {
        "Others": [
            "OOP",
            "DSA",
            "Competitive Programming",
        ]
    },

    ];
    console.log(skills[0]);


    return (
        <section id="skills" className="py-16 bg-gray-900 " >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-500 my-8">Skills</h2>
                <div className="flex flex-col gap-4 ">
                    {
                        skills.map((skill, index) => {
                            const skillKey = Object.keys(skill)[0];
                            const skilldata = skill[skillKey];

                            return (
                                <>
                                    <div key={index} >
                                        <h6 className="text-2xl font-bold text-blue-500 mb-8 ">{skillKey}</h6>
                                        <div className="flex flex-wrap gap-5 ">
                                            {skilldata.map((value, skillIndex) => (
                                                <div
                                                    key={skillIndex}
                                                    className="px-14 py-5 mx-10 my-4 bg-gray-800 text-white rounded-lg hover:cursor-pointer hover:opacity-[70%]"
                                                >
                                                    {value}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;