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

type PersonalInformation = {
    name: string;
    email: string;
    phoneNumber: string;
};

type Plan = {
    plan: string;
    subscription: string;
};
type AddOns = {
    online_service:string;
    larger_storage:string;
    customizable_profile:string;
} 
export type FormData = [
    PersonalInformation,
    Plan, 
    AddOns
]

// Context type for managing form data
export interface FormDataContextType {
    formValues: FormData[]; // Array of FormData for each step
    setFormValues: React.Dispatch<React.SetStateAction<FormData[]>>;
}
