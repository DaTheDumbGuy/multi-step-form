import { SubmitHandler, FormDataEntryValue } from "../types/types";

export const handleSubmit = (
  nextStep: () => void,
  updateFormValues: (newValues: { [key: string]: FormDataEntryValue }) => void
): SubmitHandler => {
  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues: { [key: string]: FormDataEntryValue } = {};

    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    updateFormValues(formValues);
    nextStep();
  };
};
