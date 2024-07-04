import React from 'react'

const TechnicalSkills = ({ skillsInformation }) => {

    const { category, skills } = skillsInformation;

    return (
        <div className="grid gap-1">
            <div className="text-sm font-medium">{category}</div>
            <div className="text-muted-foreground text-sm">{skills.join(", ")}</div>
        </div>
    )
}

export default TechnicalSkills
