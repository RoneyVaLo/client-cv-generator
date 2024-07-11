import React from 'react'
import EducationDescription from './EducationDescription'
import { useUserData } from '../../context/UserContext'

const Education = () => {

    const { education } = useUserData();

    return (
        <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="grid gap-4">

                {education.map((studyInformation, index) => (
                    <EducationDescription key={index} studyInformation={studyInformation} />
                ))}

            </div>
        </div>
    )
}

export default Education
