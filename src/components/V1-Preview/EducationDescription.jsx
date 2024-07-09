import React, { useState } from 'react'

const EducationDescription = ({ studyInformation }) => {
    const [include, setInclude] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const { educationName, place, endYear } = studyInformation;

    const styleSelected = isSelected ? "scale-110 translate-x-2 transition-transform" : "-translate-x-8 transition-transform";

    const handleIncludeEducation = (e) => {
        setIsSelected(e.target.checked);
        setInclude(e.target.checked);
    };

    return (
        <div className={`flex gap-4 translate-print ${styleSelected} ${(!include) ? "no-print" : ""}`} >
            <input
                type="checkbox"
                name={educationName}
                className='w-4 cursor-pointer accent-emerald-600/50 translate-print no-print'
                onChange={handleIncludeEducation}
            />
            <div>
                <h3 className="text-lg font-semibold">{educationName}</h3>
                <p className="text-muted-foreground">{`${place}, ${endYear}`}</p>
            </div>
        </div>
    )
}

export default EducationDescription
