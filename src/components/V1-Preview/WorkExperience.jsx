import React from 'react'
import WorkDescription from './WorkDescription'
import { useUserData } from '../../context/UserContext';

const WorkExperience = () => {

    const { professionalExperience } = useUserData();

    return (
        <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <div className="grid gap-6">

                {professionalExperience.map((jobInformation, index) => (
                    <WorkDescription key={index} jobInformation={jobInformation} />
                ))}

            </div>
        </div>
    )
}

export default WorkExperience
