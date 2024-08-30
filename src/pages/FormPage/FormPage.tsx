import { useState } from "react";
import StepList from "./StepList/StepList";
import StepForm from "./StepForm/StepForm";
import { FormDataEntryValue } from "../../types/types";
import { useFormData } from "../../hooks/FormDataProvider";
import { FormData } from "../../types/types";
import styles from './formPage.module.scss';

export default function FormPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const { formValues, setFormValues } = useFormData();

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const updateFormValues = (newValues: { [key: string]: FormDataEntryValue }) => {
        setFormValues((prevValues) => {
            // Create a copy of the previous values to avoid mutation
            const updatedValues = [...prevValues] as FormData;
    
            // Update only the part of the array corresponding to the current step
            updatedValues[currentStep - 1] = {
                ...updatedValues[currentStep - 1], // Preserve existing data
                ...newValues // Overwrite with new data
            };
    
            return updatedValues;
        });
    };
    

    console.log(formValues);

    return (
        <main className={styles['b-formPage']}>
            <StepList currentStep={currentStep} />
            <StepForm 
                currentStep={currentStep} 
                nextStep={nextStep} 
                updateFormValues={updateFormValues}
            />
        </main>
    );
}
