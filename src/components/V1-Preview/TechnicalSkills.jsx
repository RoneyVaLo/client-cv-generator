import React from 'react'
import SkillDescription from './SkillDescription';

const TechnicalSkills = ({ technicalSkills }) => {

    return (
        <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {technicalSkills.map((skillsInformation, index) => (
                    <SkillDescription key={index} skillsInformation={skillsInformation} />
                ))}

            </div>
        </div>
    )
}

export default TechnicalSkills
