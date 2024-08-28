import { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { FormData, FormDataContextType } from "../types/types";

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export function FormDataProvider({ children }: { children: ReactNode }) {
    const [formValues, setFormValues] = useState<FormData>([
        { name: '', email: '', phoneNumber: '' },
        { plan: '', subscription: '' },
        { online_service: '', larger_storage: '', customizable_profile: '' }
    ]);

    // Memoize the context value
    const value = useMemo(() => ({
        formValues,
        setFormValues
    }), [formValues, setFormValues]);

    return (
        <FormDataContext.Provider value={value}>
            {children}
        </FormDataContext.Provider>
    );
}

// Custom hook to use the FormDataContext
export function useFormData() {
    const context = useContext(FormDataContext);
    if (context === undefined) {
        throw new Error("useFormData must be used within a FormDataProvider");
    }
    return context;
}
