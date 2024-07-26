import React, { useState } from 'react'
import ModalInputs from '../ModalInputs'
import AddIcon from '../AddIcon';

const AddTechnicalSkill = ({ append, isOpen, onRequestClose, setModalName }) => {

    const [skillInformation, setSkillInformation] = useState({
        category: "",
        skills: []
    });

    const [inputs, setInputs] = useState([]);


    const handleAddInput = () => {
        setInputs([...inputs, ""]);
    };

    const handleInputSkillChange = (index, event) => {
        const inputsUpdated = [...inputs];
        inputsUpdated[index] = event.target.value;

        setInputs(inputsUpdated);
        setSkillInformation(prevSkill => ({
            ...prevSkill,
            skills: inputs
        }))
    };


    const handleInputCategoryChange = (e) => {
        const { value } = e.target;

        setSkillInformation(prevSkill => ({
            ...prevSkill,
            category: value
        }));
    }

    const saveNewSkill = () => {
        if ((skillInformation.category !== "") && (skillInformation.skills.length > 0) && (skillInformation.skills[0] !== "")) {
            append(skillInformation);

            setInputs([]);
            setSkillInformation({
                category: "",
                skills: []
            })
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
                        name="category"
                        className="text-muted-foreground max-h-8 border-b-2 text-center font-medium capitalize"
                        placeholder='Skill Category'
                        value={skillInformation.category}
                        required
                        onChange={handleInputCategoryChange}
                    />
                </section>

                <div className='w-full flex justify-center my-4'>
                    <h2 className='text-xl font-bold'>Skills</h2>
                </div>

                <section className='flex justify-around gap-4 flex-wrap my-4'>
                    {inputs.map((input, index) => (
                        <input
                            key={index}
                            type="text"
                            className="text-muted-foreground max-h-8 border-b-2 capitalize"
                            value={input}
                            placeholder={`Skill ${index + 1}`}
                            autoFocus
                            onChange={(event) => handleInputSkillChange(index, event)}
                            onBlur={(event) => handleInputSkillChange(index, event)}
                        />
                    ))}

                </section>

                <section className='w-full flex justify-center my-4'>
                    <button onClick={handleAddInput}>
                        <AddIcon />
                    </button>
                </section>

                <section className='flex justify-center'>
                    <button
                        className='py-2 px-4 bg-emerald-500 text-white rounded hover:bg-emerald-600'
                        onClick={saveNewSkill}
                    >
                        Add Skill
                    </button>
                </section>
            </div>
        </ModalInputs>
    )
}

export default AddTechnicalSkill
