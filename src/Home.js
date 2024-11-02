import React from 'react';
import { navIcon } from './Icons';
import { useGlobalContext } from './Context';

export default function Home() {
    const { modalOpen, sidebarOpen } = useGlobalContext()
    return (
        <>
            <div className='header'>
                <span onClick={sidebarOpen}>{navIcon}</span>
            </div>
            <div className='page'>
                <button onClick={modalOpen}>Open Modal</button>
            </div>

        </>
    )
}
