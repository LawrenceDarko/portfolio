'use client'

import React, { useState, createContext, useContext } from 'react';

interface GeneralContextType {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
}

export const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

interface GeneralContextProviderProps {
    children: React.ReactNode;
}

export const GeneralContextProvider: React.FC<GeneralContextProviderProps> = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <GeneralContext.Provider value={{
        showModal,
        setShowModal,
        }}>
        {children}
        </GeneralContext.Provider>
    );
    }

    export const useGeneralContext = (): GeneralContextType => {
    const context = useContext(GeneralContext);
    
    if (!context) {
        throw new Error('useGeneralContext must be used within a GeneralContextProvider');
    }
    
    return context;
};
