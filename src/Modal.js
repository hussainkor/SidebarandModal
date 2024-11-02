import React from 'react';
import { useGlobalContext } from './Context';
import { closeIcon } from './Icons';

export default function Modal() {
    const { isModalOpen, modalClose } = useGlobalContext()
    return (
        <div className={`${isModalOpen ? 'modal modal-open' : "modal"}`}>
            <div className='modal-box'>
                <span className='close-btn' onClick={modalClose}>{closeIcon}</span>
                <h2>Modal</h2>
            </div>
        </div>
    )
}
