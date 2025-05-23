import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCityTableVisible, setIsCityTableVisible] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(true); // Added sidebar state

  return (
    <FormContext.Provider
      value={{
        isFormOpen,
        setIsFormOpen,
        isCityTableVisible,
        setIsCityTableVisible,
        isSidebarVisible,
        setSidebarVisible,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Custom hook for using the form context
export const useFormContext = () => useContext(FormContext);
