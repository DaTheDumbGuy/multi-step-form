import { FormsProps, PlanType, SubscriptionType } from "../../types/types";
import FormHeader from "../Ui/FormHeader/FormHeader";
import { handleSubmit } from "../../utils/handleSubmit";
import { useFormData } from "../../hooks/FormDataProvider";
import { getPlanPrice, getAddOnsPrice } from "../../utils/pricing"; // Assume these types are in `pricingTypes.ts`

export default function FinishingUp({ nextStep, updateFormValues }: FormsProps) {
    const { formValues } = useFormData();

    // Get plan and subscription values with explicit types
    const plan = formValues[1]?.plan as PlanType;
    const subscription = formValues[1]?.subscription as SubscriptionType;

    // Calculate the pricing
    const planPrice = getPlanPrice(plan, subscription);
    const addOnsPrice = getAddOnsPrice(formValues[2]);
    const totalPrice = planPrice + addOnsPrice;

    const submitHandler = handleSubmit({
        updateFormValues,
        onSuccess: () => {
            nextStep();
        }
    });

    return (
        <>
            <FormHeader
                title="Finishing Up"
                description="Double-check everything looks OK before confirming."
            />

            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <h2>{plan || "N/A"} ({subscription})</h2>
                        <a href="#">Change</a>
                    </div>
                    <p>${planPrice}/mo</p>
                </div>
                <div>
                    <h2>Plan Information:</h2>
                    <p>Plan: {plan || "N/A"}</p>
                    <p>Subscription: {subscription || "N/A"}</p>
                </div>
                <div>
                    <h2>Add-Ons:</h2>
                    <p>Online Service: {formValues[2]?.online_service || "N/A"} - +$1/mo</p>
                    <p>Larger Storage: {formValues[2]?.larger_storage || "N/A"} - +$2/mo</p>
                    <p>Customizable Profile: {formValues[2]?.customizable_profile || "N/A"} - +$2/mo</p>
                </div>
                <div>
                    <h2>Total:</h2>
                    <p>${totalPrice}/mo</p>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
