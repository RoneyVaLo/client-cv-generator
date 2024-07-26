import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import placeholderUser from '/male.png';
import { useUserData } from '../context/UserContext';
import AddIcon from '../components/AddIcon';
import AddWork from '../components/V1-Customize/AddWork';
import BtnAddElement from '../components/V1-Customize/BtnAddElement';
import AddTechnicalSkill from '../components/V1-Customize/AddTechnicalSkill';
import AddEducation from '../components/V1-Customize/AddEducation';

const CustomizeCV = () => {

    const userData = useUserData();
    const { personalInformation, professionalResume, /* education */ } = userData;

    const { register, control, handleSubmit, formState: { errors } } = useForm();
    const { fields: professionalExperience, append: appendWork, remove: removeWork } = useFieldArray({
        control,
        name: "professionalExperience"
    });

    const { fields: technicalSkills, append: appendSkill, remove: removeSkill } = useFieldArray({
        control,
        name: "technicalSkills"
    });

    const { fields: education, append: appendEducation, remove } = useFieldArray({
        control,
        name: "education"
    });

    const [modalJobIsOpen, setModalJobIsOpen] = useState(false);
    const [modalSkillIsOpen, setModalSkillIsOpen] = useState(false);
    const [modalEducationIsOpen, setModalEducationIsOpen] = useState(false);


    const openModal = (setModal) => {
        setModal(true);
    };

    const closeModal = (setModal) => {
        setModal(false);
    };


    const saveCVData = (data) => {

        console.log(data)
    };


    return (
        <form onSubmit={handleSubmit(saveCVData)} className="w-full max-w-4xl mx-auto">
            <header className="bg-muted/20 p-6">
                <div className="flex items-center gap-6">
                    <div className="h-32 w-24 flex items-center">
                        <img src={placeholderUser} className='object-cover h-16' />
                    </div>

                    <div className="grid gap-1">
                        <input
                            type="text"
                            name="fullname"
                            className="text-3xl font-bold"
                            placeholder='Full name'
                            defaultValue={personalInformation.fullName}
                            {...register("personalInformation.fullName", { required: true })}
                        />
                        {errors.fullName && <span className='text-red-500 font-semibold'>This field is required</span>}

                        <input
                            type="text"
                            name="job"
                            className="text-muted-foreground"
                            placeholder='Job'
                            defaultValue={personalInformation.job}
                            {...register("personalInformation.job", { required: true })}
                        />
                        {errors.job && <span className='text-red-500 font-semibold'>This field is required</span>}

                        <section className='flex flex-wrap'>
                            <article className='grid gap-1 mb-2'>
                                <div className='flex'>
                                    <input
                                        type="text"
                                        name="email"
                                        className="text-muted-foreground max-h-6 min-w-56"
                                        placeholder='Email'
                                        defaultValue={personalInformation.email}
                                        {...register("personalInformation.email", { required: true })}
                                    />

                                    <div className='border-r-2 border-slate-600 mr-3'></div>
                                </div>
                                {errors.email && <span className='text-red-500 font-semibold'>This field is required</span>}
                            </article>

                            <article className='grid gap-1 mb-2'>
                                <div className='flex mr-1'>
                                    <p>&#40;</p>

                                    <input
                                        type="text"
                                        name="countryCode"
                                        className="text-muted-foreground max-h-6 max-w-7 text-center"
                                        placeholder='+'
                                        defaultValue={personalInformation.countryCode}
                                        {...register("personalInformation.countryCode", { required: true })}
                                    />

                                    <p>&#41;</p>
                                </div>
                                {errors.countryCode && <span className='text-red-500 font-semibold mr-4'>This field is required</span>}
                            </article>

                            <article className='grid gap-1 mb-2'>
                                <input
                                    type="text"
                                    name="phone"
                                    className="text-muted-foreground max-h-6"
                                    placeholder='Phone Number'
                                    defaultValue={personalInformation.phone}
                                    {...register("personalInformation.phone", { required: true })}
                                />
                                {errors.phone && <span className='text-red-500 font-semibold'>This field is required</span>}
                            </article>
                        </section>

                        <section>
                            {/* TODO: Debo hacer que se ajuste a la cantidad de texto ingresada por el usuario */}
                            <textarea
                                className="w-[70vw] resize-none"
                                placeholder='Professional Resume'
                                defaultValue={professionalResume}
                                {...register("professionalResume", { required: true })}
                            />
                            {errors.professionalResume && <span className='text-red-500 font-semibold'>This field is required</span>}
                        </section>
                    </div>
                </div>
            </header>

            <main className="p-6 grid gap-8">
                <div className="grid gap-4">
                    <h2 className="text-2xl font-bold">Work Experience</h2>
                    <div className="grid gap-6">

                        {professionalExperience.map((jobInformation, index) => (
                            <div className="grid gap-2" key={index}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold">{jobInformation.job}</h3>
                                        <p className="text-muted-foreground">{jobInformation.companyName} | {jobInformation.startYear} - {jobInformation.endYear}</p>
                                    </div>
                                </div>
                                <ul className="text-muted-foreground list-disc px-4">
                                    {jobInformation.responsabilities.map((responsability, index) => (
                                        <li key={index}>{responsability}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <AddWork
                            append={appendWork}
                            isOpen={modalJobIsOpen}
                            onRequestClose={closeModal}
                            setModalName={setModalJobIsOpen}
                        />

                        <BtnAddElement openModal={openModal} setModalName={setModalJobIsOpen} />

                    </div>
                </div>

                <div className="grid gap-4">
                    <h2 className="text-2xl font-bold">Technical Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                        {technicalSkills.map((skillsInformation, index) => (
                            <div className="grid gap-1" key={index}>
                                <div className="text-md font-medium">{skillsInformation.category}</div>
                                <div className="text-muted-foreground text-sm capitalize">{skillsInformation.skills.join(", ")}</div>
                            </div>
                        ))}

                        <AddTechnicalSkill
                            append={appendSkill}
                            isOpen={modalSkillIsOpen}
                            onRequestClose={closeModal}
                            setModalName={setModalSkillIsOpen}
                        />
                    </div>

                    <BtnAddElement openModal={openModal} setModalName={setModalSkillIsOpen} />
                </div>

                <div className="grid gap-4">
                    <h2 className="text-2xl font-bold">Education</h2>
                    <div className="grid gap-4">

                        {education.map((studyInformation, index) => (
                            <div className="flex gap-4" key={index}>
                                <div>
                                    <h3 className="text-xl font-semibold capitalize">{studyInformation.educationName}</h3>
                                    <p className="text-muted-foreground capitalize">{`${studyInformation.place}, ${studyInformation.endYear}`}</p>
                                </div>
                            </div>
                        ))}

                        <AddEducation
                            append={appendEducation}
                            isOpen={modalEducationIsOpen}
                            onRequestClose={closeModal}
                            setModalName={setModalEducationIsOpen}
                        />

                        <BtnAddElement openModal={openModal} setModalName={setModalEducationIsOpen} />
                    </div>
                </div>
            </main>

            <footer className='mb-8 text-center'>
                <button
                    className='py-2 px-4 border-4 border-emerald-500 border-dashed rounded-lg hover:scale-105 transition-transform no-print'
                    onClick={() => { console.log("Cambios Guardados") }}
                >
                    Guardar Cambios
                </button>
            </footer>
        </form>
    )
}

export default CustomizeCV
