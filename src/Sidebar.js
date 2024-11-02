import React from 'react';
import { closeIcon } from './Icons';
import { useGlobalContext } from './Context';

export default function Sidebar() {
    const { sidebarClose, isSidebarOpen } = useGlobalContext()
    return (
        <div className={`${isSidebarOpen ? "sidebar sidebar-open" : "sidebar"}`}>
            <ul>
                <span className='close-btn' onClick={sidebarClose}>{closeIcon}</span>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Gallery</a></li>
            </ul>
        </div>
    )
}
