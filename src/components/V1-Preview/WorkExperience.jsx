import React from 'react'
import WorkDescription from './WorkDescription'

const WorkExperience = ({ jobData }) => {

    return (
        <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <div className="grid gap-6">

                {jobData.map((jobInformation, index) => (
                    <WorkDescription key={index} jobInformation={jobInformation} />
                ))}

            </div>
        </div>
    )
}

export default WorkExperience
