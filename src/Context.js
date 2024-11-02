import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const modalClose = () => {
        setIsModalOpen(false);
    }
    const modalOpen = () => {
        setIsModalOpen(true);
    }
    const sidebarClose = () => {
        setIsSidebarOpen(false);
    }
    const sidebarOpen = () => {
        setIsSidebarOpen(true);
    }

    return <AppContext.Provider value={{ modalClose, modalOpen, sidebarOpen, sidebarClose, isSidebarOpen, isModalOpen }}>
        {children}
    </AppContext.Provider >
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
