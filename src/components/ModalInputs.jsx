import Modal from 'react-modal';
import CloseIcon from './CloseIcon';

Modal.setAppElement('#root');

const ModalInputs = ({ children, isOpen, onRequestClose, setModalName }) => {

    const handleCloseModal = () => {
        onRequestClose(setModalName);
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            className="modal-content flex flex-col items-center p-4 bg-white rounded-md w-full max-w-[90%] mx-auto"
            overlayClassName="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
        >
            <div className='w-full text-right -mt-3 -mr-6 mb-4'>
                <button className='hover:scale-110' onClick={handleCloseModal}>
                    <CloseIcon />
                </button>
            </div>

            {children}
        </Modal>
    )
}

export default ModalInputs
