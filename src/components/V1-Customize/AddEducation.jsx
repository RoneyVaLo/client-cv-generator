import React, { useState } from 'react'
import ModalInputs from '../ModalInputs';
import CloseIcon from '../CloseIcon';

const AddEducation = ({ append, isOpen, onRequestClose, setModalName }) => {

    const [education, setEducation] = useState({
        educationName: "",
        place: "",
        endYear: ""
    });

    const handleInputOnChange = (e) => {
        const { name, value } = e.target

        setEducation(prevEducation => ({
            ...prevEducation,
            [name]: value
        }));
    }

    const saveNewEducation = () => {
        const { educationName, place, endYear } = education;
        if ((educationName !== "") && (place !== "") && (endYear !== "")) {
            append(education);
            setEducation({
                educationName: "",
                place: "",
                endYear: ""
            });
            onRequestClose(setModalName);
        } else {
            alert("You should register all the fields!!");
        }
    };


    return (
        <ModalInputs
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            setModalName={setModalName}
        >
            <div className='flex flex-col gap-4 my-4 w-[80%]'>
                <section className='flex flex-col'>
                    <input
                        type="text"
                        name="educationName"
                        className="text-xl font-semibold max-h-6 my-4 grow border-b-2 rounded text-center capitalize"
                        placeholder='Education Name'
                        value={education.educationName}
                        required
                        onChange={handleInputOnChange}
                    />

                    <div className='flex justify-around my-4 py-2 flex-wrap'>
                        <input
                            type="text"
                            name="place"
                            className="max-h-6 flex-none border-b-2 rounded w-[40%] capitalize"
                            placeholder='Place'
                            value={education.place}
                            required
                            onChange={handleInputOnChange}
                        />

                        <input
                            type="text"
                            name="endYear"
                            className="max-h-6 flex-none border-b-2 rounded w-[40%] capitalize"
                            placeholder='End Year'
                            value={education.endYear}
                            required
                            onChange={handleInputOnChange}
                        />
                    </div>
                </section>

                <section className='flex justify-center'>
                    <button
                        className='py-2 px-4 bg-emerald-500 text-white rounded hover:bg-emerald-600'
                        onClick={saveNewEducation}
                    >
                        Add Education
                    </button>
                </section>
            </div>
        </ModalInputs>
    )
}

export default AddEducation
