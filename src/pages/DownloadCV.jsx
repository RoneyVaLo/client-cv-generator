import React, { useRef } from 'react';

import WorkExperience from '../components/V1-Preview/WorkExperience';
import TechnicalSkills from '../components/V1-Preview/TechnicalSkills';
import Education from '../components/V1-Preview/Education';
import UserInformation from '../components/V1-Preview/UserInformation';

const DownloadCV = () => {

    const userData = {
        fullName: "Roney Alfonso Valdelomar López",
        job: "Software Developer",
        email: "rvaldelomarlopez@gmail.com",
        countryCode: "506",
        phone: "6283-1879",
        biography: "Experienced software developer with a passion for building scalable and efficient applications. Proficient in a variety of programming languages and frameworks, and always eager to learn new technologies."
    }

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
            educationName: "Diploma in Software Engineering",
            place: "National Technical University (UTN), Costa Rica",
            endYear: "2024"
        },
        {
            educationName: "Certified Scrum Master",
            place: "Scrum Alliance",
            endYear: "2021"
        },
    ];

    const contentRef = useRef();

    const hideElements = (elements) => {
        elements.forEach(element => {
            if (element.tagName.toLowerCase() === "input") {
                element.style.visibility = 'hidden';
            } else {
                element.style.display = 'none';
            }
        });
    };

    const showElements = (elements) => {
        elements.forEach(element => {
            if (element.tagName.toLowerCase() === "input") {
                element.style.visibility = '';
            } else {
                element.style.display = '';
            }
        });
    };


    // TODO: Crear otra función para generarlo pero con texto no con una imagen
    // TODO: Buscar si puedo hacer más grande la letra de la imagen
    const generatePDFWithText = () => {

        //? Esta función abre el dialogo de impresión del navegador

        window.print()
    };

    const generatePDFWithImage = () => {
        const input = contentRef.current;

        const hiddenElements = input.querySelectorAll('.no-print');
        hideElements(hiddenElements);

        console.log(input.innerText);

        showElements(hiddenElements);
    };


    return (
        <section className="w-full max-w-4xl mx-auto" ref={contentRef}>
            <UserInformation userData={userData} />

            <main className="p-6 grid gap-8">
                <WorkExperience jobData={workExperience} />

                <TechnicalSkills technicalSkills={technicalSkills} />

                <Education studies={education} />
            </main>
            <footer className='mb-8 text-center flex gap-4'>
                <button
                    className='py-2 px-4 border-4 border-emerald-500 border-dashed rounded-lg hover:scale-105 transition-transform no-print'
                    id='btnDownload'
                    onClick={generatePDFWithImage}
                >
                    Descargar CV
                </button>

                <button
                    className='py-2 px-4 border-4 border-emerald-500 border-dashed rounded-lg hover:scale-105 transition-transform no-print'
                    id='btnDownload'
                    onClick={generatePDFWithText}
                >
                    Imprimir CV
                </button>
            </footer>
        </section>
    )
}

export default DownloadCV
