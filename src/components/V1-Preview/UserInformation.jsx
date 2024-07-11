import React from 'react'

import placeholderUser from '/male.png';
import { useUserData } from '../../context/UserContext';

const UserInformation = () => {

    const userData = useUserData();

    const { fullName, job, email, countryCode, phone, LinkedIn, Github } = userData?.personalInformation;
    const { professionalResume } = userData;

    return (
        <header className="bg-muted/20 p-6">
            <div className="flex items-center gap-6">
                <div className="h-32 w-24 flex items-center">
                    <img src={placeholderUser} className='object-cover h-16' />
                </div>
                <div className="grid gap-1">
                    <h1 className="text-3xl font-bold">{fullName}</h1>
                    <p className="text-muted-foreground">{job}</p>
                    <p className="text-muted-foreground">{email} | ({countryCode}) {phone}</p>
                    <p className="text-muted-foreground">
                        {professionalResume}
                    </p>
                </div>
            </div>
        </header>
    )
}

export default UserInformation
