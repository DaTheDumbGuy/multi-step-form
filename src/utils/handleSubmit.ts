import { SubmitHandler, FormDataEntryValue } from "../types/types";

type HandleSubmitOptions = {
    updateFormValues: (newValues: { [key: string]: FormDataEntryValue }) => void;
    onSuccess: () => void;
};

export const handleSubmit = (
    options: HandleSubmitOptions
): SubmitHandler => {
    return (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formValues: { [key: string]: FormDataEntryValue } = {};

        formData.forEach((value, key) => {
            formValues[key] = value;
        });

        options.updateFormValues(formValues);
        options.onSuccess();
    };
};
