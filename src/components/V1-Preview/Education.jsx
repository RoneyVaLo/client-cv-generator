import React from 'react'
import EducationDescription from './EducationDescription'

const Education = ({ studies }) => {

    return (
        <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="grid gap-4">

                {studies.map((studyInformation, index) => (
                    <EducationDescription key={index} studyInformation={studyInformation} />
                ))}

            </div>
        </div>
    )
}

export default Education
