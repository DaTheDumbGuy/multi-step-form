import { FormsProps } from "../../types/types";
import FormHeader from "../Ui/FormHeader/FormHeader";
import { handleSubmit } from "../../utils/handleSubmit";
import { useFormData } from "../../hooks/FormDataProvider";

export default function FinishingUp({nextStep, updateFormValues}: FormsProps){
    const {formValues} = useFormData();

    const submitHandler = handleSubmit({
        updateFormValues,
        onSuccess: () => {
            // Call nextStep after updating form values
            nextStep();
        }
    });
    // console.log(formValues[1].plan);
    return(
        <>
            <FormHeader
                title="Finishing Up"
                description="Double-check everything looks OK before confirming."
            />

        <form onSubmit={submitHandler}>
            <div>
                <h2>Personal Information:</h2>
                <p>Name: {formValues[0]?.name || "N/A"}</p>
                <p>Email: {formValues[0]?.email || "N/A"}</p>
                <p>Phone: {formValues[0]?.phone || "N/A"}</p>
            </div>
            <div>
                <h2>Plan Information:</h2>
                <p>Plan: {formValues[1]?.plan || "N/A"}</p>
                <p>Subscription: {formValues[1]?.subscription || "N/A"}</p>
            </div>
            <div>
                <h2>Add-Ons:</h2>
                <p>Online Service: {formValues[2]?.online_service || "N/A"}</p>
                <p>Larger Storage: {formValues[2]?.larger_storage || "N/A"}</p>
                <p>Customizable Profile: {formValues[2]?.customizable_profile || "N/A"}</p>
            </div>
            <button type="submit">Submit</button>
        </form>


        </>
    )
}