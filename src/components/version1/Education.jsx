import React, { useState } from 'react'

const Education = ({ educationInformation }) => {

    const { educationName, place, startYear, endYear } = educationInformation;
    const educationTime = (startYear) ? `${startYear} - ${endYear}` : endYear;
    const [isSelected, setIsSelected] = useState(true);

    const styleSelected = isSelected ? "scale-110 translate-x-2 transition-transform" : "-translate-x-8 transition-transform";

    return (
        <div className={`flex gap-4 translate-print ${styleSelected}`} >
            <input
                type="checkbox"
                name={educationName}
                className='w-4 cursor-pointer accent-emerald-600/50 no-print tran'
                defaultChecked
                onChange={(e) => setIsSelected(e.target.checked)}
            />
            <div>
                <h3 className="text-lg font-semibold">{educationName}</h3>
                <p className="text-muted-foreground">{`${place}, ${educationTime}`}</p>
            </div>
        </div>
    )
}

export default Education
