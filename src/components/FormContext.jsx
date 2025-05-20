import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCityTableVisible, setIsCityTableVisible] = useState(false);

  return (
    <FormContext.Provider value={{ isFormOpen, setIsFormOpen, isCityTableVisible, setIsCityTableVisible }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);