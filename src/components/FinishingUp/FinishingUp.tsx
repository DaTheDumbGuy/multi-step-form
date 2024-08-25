import { FormsProps } from "../../types/types";
import FormHeader from "../Ui/FormHeader/FormHeader";
import { handleSubmit } from "../../utils/handleSubmit";
import { useFormData } from "../../hooks/FormDataProvider";

export default function FinishingUp({nextStep, updateFormValues}: FormsProps){
    const {formValues, setFormValues} = useFormData();

    const submitHandler = handleSubmit({
        updateFormValues,
        onSuccess: () => {
            // Call nextStep after updating form values
            nextStep();
        }
    });
    console.log(formValues[1].plan);
    return(
        <>
            <FormHeader
                title="Finishing Up"
                description="Double-check everything looks OK before confirming."
            />

<form onSubmit={submitHandler}>
    <div>
        <h2>Plan: {formValues[1]?.plan || "No plan selected"}</h2>
        <p>Subscription: {formValues[1]?.subscription || "No subscription selected"}</p>
    </div>
</form>

        </>
    )
}