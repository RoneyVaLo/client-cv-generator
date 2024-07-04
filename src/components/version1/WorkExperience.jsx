import React from 'react'
import CalendarIcon from '../CalendarIcon';

const WorkExperience = ({ workInformation }) => {

    const { job, companyName, startYear, endYear, responsabilities } = workInformation;

    const getTimeWorked = () => {
        let currentYear = new Date().getFullYear();
        let timeWorked;
        
        if (endYear.toLowerCase() === "present") {
            timeWorked = currentYear - (parseInt(startYear));
        } else {
            timeWorked = (parseInt(endYear)) - (parseInt(startYear));
        }

        if (timeWorked === 1) return timeWorked += " year";

        return timeWorked += " years";
    };


    return (
        <div className="grid gap-2">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold">{job}</h3>
                    <p className="text-muted-foreground">{companyName} | {startYear} - {endYear}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4 inline-block mr-1" />
                    {getTimeWorked()}
                </div>
            </div>
            <ul className="text-muted-foreground">
                {responsabilities.map((responsability, index) => (
                    <li key={index}>{responsability}</li>
                ))}
            </ul>
        </div>
    )
}

export default WorkExperience
