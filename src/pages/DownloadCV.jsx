import React from 'react'
import CalendarIcon from '../components/CalendarIcon'
import placeholderUser from '/male.png'
import WorkExperience from '../components/version1/WorkExperience';
import TechnicalSkills from '../components/version1/TechnicalSkills';
import Education from '../components/version1/Education';

const DownloadCV = () => {

    const workExperience = [
        {
            job: "Software Developer",
            companyName: "Acme Inc.",
            startYear: "2020",
            endYear: "Present",
            responsabilities: [
                "Developed and maintained complex web applications using React, Node.js, and MongoDB.",
                "Collaborated with cross - functional teams to design and implement new features.",
                "Optimized application performance and scalability through code refactoring and infrastructure improvements.",
                "Participated in agile development processes, including sprint planning, code reviews, and retrospectives."
            ]
        },
        {
            job: "Intern Software Engineer",
            companyName: "Globex Corporation",
            startYear: "2019",
            endYear: "2020",
            responsabilities: [
                "Contributed to the development of a web - based enterprise resource planning(ERP) system.",
                "Implemented new features and bug fixes using Java, Spring Boot, and PostgreSQL.",
                "Participated in code reviews and pair programming sessions to improve code quality.",
                "Gained experience in agile development methodologies and project management tools."
            ]
        },
    ];

    const technicalSkills = [
        {
            category: "Programming Languages",
            skills: ["JavaScript", "TypeScript", "Python", "Java"]
        },
        {
            category: "Frameworks & Libraries",
            skills: ["React", "Node.js", "Express", "Django", "Spring Boot"]
        },
        {
            category: "Databases",
            skills: ["MongoDB", "PostgreSQL", "MySQL"]
        },
        {
            category: "Tools & Platforms",
            skills: ["Git", "GitHub", "Docker", "AWS", "Azure"]
        },
        {
            category: "Testing",
            skills: ["Jest", "Enzyme", "Cypress"]
        },
        {
            category: "Methodologies",
            skills: ["Agile", "Scrum", "Kanban"]
        },
    ];

    const education = [
        {
            educationName: "    Bachelor of Science in Computer Science",
            place: "University of Example",
            startYear: "2015",
            endYear: "2019"
        },
        {
            educationName: "Certified Scrum Master",
            place: "Scrum Alliance",
            endYear: "2021"
        },
    ];


    return (
        <section className="w-full max-w-4xl mx-auto">
            <header className="bg-muted/20 p-6">
                <div className="flex items-center gap-6">
                    <div className="h-32 w-24 flex items-center">
                        <img src={placeholderUser} className='object-cover h-16' />
                    </div>
                    <div className="grid gap-1">
                        <h1 className="text-3xl font-bold">Roney Alfonso Valdelomar López</h1>
                        <p className="text-muted-foreground">Software Developer</p>
                        <p className="text-muted-foreground">rvaldelomarlopez@gmail.com | (506) 6283-1879</p>
                        <p className="text-muted-foreground">
                            Experienced software developer with a passion for building scalable and efficient applications. Proficient
                            in a variety of programming languages and frameworks, and always eager to learn new technologies.
                        </p>
                    </div>
                </div>
            </header>
            <main className="p-6 grid gap-8">
                <div className="grid gap-4">
                    <h2 className="text-2xl font-bold">Work Experience</h2>
                    <div className="grid gap-6">

                        {workExperience.map((workInformation, index) => (
                            <WorkExperience key={index} workInformation={workInformation} />
                        ))}

                    </div>
                </div>

                <div className="grid gap-4">
                    <h2 className="text-2xl font-bold">Technical Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                        {technicalSkills.map((skillsInformation, index) => (
                            <TechnicalSkills key={index} skillsInformation={skillsInformation} />
                        ))}

                    </div>
                </div>
                <div className="grid gap-4">
                    <h2 className="text-2xl font-bold">Education</h2>
                    <div className="grid gap-4">

                        {education.map((educationInformation, index) => (
                            <Education key={index} educationInformation={educationInformation} />
                        ))}

                    </div>
                </div>
            </main>
            <footer className='mb-8 text-center'>
                <button
                    className='py-2 px-4 border-4 border-emerald-500 border-dashed rounded-lg hover:scale-105 transition-transform no-print'
                >
                    Descargar CV
                </button>
            </footer>
        </section>
    )
}

export default DownloadCV
