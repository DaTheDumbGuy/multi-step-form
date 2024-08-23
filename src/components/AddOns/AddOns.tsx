import { FormsProps } from "../../types/types";
import { handleSubmit } from "../../utils/handleSubmit";
import FormHeader from "../Ui/FormHeader/FormHeader";

export default function AddOns({nextStep, updateFormValues}: FormsProps){
    const submitHandler = handleSubmit({
        updateFormValues,
        onSuccess: () => {
            // Call nextStep after updating form values
            nextStep();
        }
    });
    const addOns = [
        {name:"online_service", value:"Online service", title:"Online service", description:"Access to multiplayer games", price:"+$10/yr"},
        {name:"larger_storage", value:"Larger storage", title:"Larger storage", description:"Extra 1TB of cloud save", price:"+$20/yr"},
        {name:"customizable_profile", value:"Customizable profile", title:"Customizable profile", description:"Custom theme on your profile", price:"+$20/yr"},
    ]
    return(
<>
    <FormHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
    />
    <form onSubmit={submitHandler}>
        <fieldset>
            <legend>Choose your add-ons:</legend>
            {addOns.map((addOn) => (
                <div key={addOn.value}>
                    <input
                        type="radio"
                        id={addOn.value}
                        name={addOn.name}
                        value={addOn.value}
                    />
                    <label htmlFor={addOn.value}>
                        <div>
                            <h2>{addOn.title}</h2>
                            <p>{addOn.description}</p>
                        </div>
                        <span>{addOn.price}</span>
                    </label>
                </div>
            ))}
        </fieldset>
        <button type="submit">Next</button>
    </form>
</>

    )
}