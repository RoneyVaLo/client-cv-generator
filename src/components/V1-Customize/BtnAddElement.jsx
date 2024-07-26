import React from 'react'
import AddIcon from '../AddIcon';

const BtnAddElement = ({ openModal, setModalName }) => {

    const handleOnClick = (e) => {
        e.preventDefault();
        openModal(setModalName);
    };


    return (
        <div className="relative flex items-center justify-center">
            <div className="border-t-4 rounded-full border-gray-300 flex-grow"></div>
            <button
                className="mx-2 py-2 px-4 rounded-full hover:scale-110 active:scale-95 transition-transform"
                onClick={handleOnClick}
            >
                <AddIcon />
            </button>
            <div className="border-t-4 rounded-full border-gray-300 flex-grow"></div>
        </div>
    )
}

export default BtnAddElement
