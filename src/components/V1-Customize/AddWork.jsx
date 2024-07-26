import React, { useState } from 'react';
import ModalInputs from '../ModalInputs';

const AddWork = ({ append, isOpen, onRequestClose, setModalName }) => {

    const [work, setWork] = useState({
        job: "",
        companyName: "",
        startYear: "",
        endYear: "",
        responsabilities: []
    });

    const handleInputOnChange = (e) => {
        const { name, value } = e.target

        setWork(prevWork => ({
            ...prevWork,
            [name]: (name === "responsabilities") ? value.split("\n") : value
        }));
    }

    const saveNewWork = () => {
        const { job, companyName, startYear, endYear, responsabilities } = work;
        if ((job.trim() !== "") && (companyName.trim() !== "") && (startYear.trim() !== "") && (endYear.trim() !== "") &&
            (responsabilities.length > 0) && (responsabilities[0].trim() !== "")) {
            append(work);
            setWork({
                job: "",
                companyName: "",
                startYear: "",
                endYear: "",
                responsabilities: []
            });

            onRequestClose(setModalName);
        } else {
            alert("You should register all the fields!!")
        }
    }


    return (
        <ModalInputs
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            setModalName={setModalName}
        >
            <div className='w-full'>
                <section className='flex flex-col gap-4 px-4 py-2 mx-12'>
                    <input
                        type="text"
                        name="job"
                        className="text-lg font-semibold max-h-8 text-center border-b-2 rounded"
                        placeholder='Job'
                        value={work.job}
                        required
                        onChange={handleInputOnChange}
                    />
                </section>

                <section className='flex flex-col gap-4 px-4 py-2 mx-12'>
                    <input
                        type="text"
                        name="companyName"
                        className="text-muted-foreground max-h-6 border-b-2 rounded w-[40%] px-1"
                        placeholder='Company Name'
                        value={work.companyName}
                        required
                        onChange={handleInputOnChange}
                    />
                </section>

                <section className='flex justify-between my-4 mx-16 py-2 flex-wrap'>
                    <input
                        type="text"
                        name="startYear"
                        className="text-muted-foreground max-h-6 border-b-2 rounded w-[30%] px-1"
                        placeholder='Start Year'
                        value={work.startYear}
                        required
                        onChange={handleInputOnChange}
                    />

                    <input
                        type="text"
                        name="endYear"
                        className="text-muted-foreground max-h-6 border-b-2 rounded w-[30%] px-1"
                        placeholder='End Year'
                        value={work.endYear}
                        required
                        onChange={handleInputOnChange}
                    />
                </section>

                <section className='flex w-full my-4'>
                    <textarea
                        name="responsabilities"
                        className="w-full resize-none h-[16vh] border-2 p-1"
                        placeholder='Responsabilities
                        - Responsability 1
                        - Responsability 2
                        - .....'
                        value={work.responsabilities.join("\n")}
                        required
                        onChange={handleInputOnChange}
                    />
                </section>

                <section className='flex justify-center'>
                    <button
                        className='py-2 px-4 bg-emerald-500 text-white rounded hover:bg-emerald-600'
                        onClick={saveNewWork}
                    >
                        Add Work
                    </button>
                </section>
            </div>
        </ModalInputs>
    )
}

export default AddWork
