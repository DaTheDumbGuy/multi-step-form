// Utility types
export type CurrentStep = number;

export type NextStep = () => void;

export type UpdateFormValues = (newValues: Record<string, FormDataEntryValue>) => void;

export type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;

export type FormDataEntryValue = string | File;

// Props for a step form
export interface StepFormProps {
    currentStep: CurrentStep;
    nextStep: NextStep;
    updateFormValues: UpdateFormValues;
}

// Props for general form components
export interface FormsProps {
    nextStep: NextStep;
    updateFormValues: UpdateFormValues;
}

// JSX element or null type
export type RenderForm = JSX.Element | null;
// Assuming FormData represents a single step in the form process
export type PersonalInformation = {
    name: string;
    email: string;
    phoneNumber: string;
};

export type Plan = {
    plan: string;
    subscription: string;
};

export interface FormData {
    personalInformation: PersonalInformation;
    plan?: Plan; // Optional if not all steps include this
}

// Context type for managing form data
export interface FormDataContextType {
    formValues: FormData[]; // Array of FormData for each step
    setFormValues: React.Dispatch<React.SetStateAction<FormData[]>>;
}
