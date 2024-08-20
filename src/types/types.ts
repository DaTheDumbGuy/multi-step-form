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
