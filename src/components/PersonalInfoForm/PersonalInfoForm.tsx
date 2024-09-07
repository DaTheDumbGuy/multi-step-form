import { handleSubmit } from "../../utils/handleSubmit";
import { FormsProps } from "../../types/types";
import FormHeader from "../Ui/FormHeader/FormHeader";
import styles from './personalInformation.module.scss';
import SubmitButton from "../Ui/SubmitButton/SubmitButton";

export default function PersonalInfoForm({ nextStep, updateFormValues }: FormsProps) {
    // Define the submit handler
    const submitHandler = handleSubmit({
        updateFormValues,
        onSuccess: () => {
            // Call nextStep after updating form values
            nextStep();
        }
    });

    return (
        <>
            <FormHeader
                title="Personal info"
                description="Please provide your name, email address, and phone number."
            />

            <form onSubmit={submitHandler} className={styles['b-personalInfoForm']}>
                <div className={styles['b-personalInfoForm__inputContainer']}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="e.g Stephen King" />
                </div>
                <div className={styles['b-personalInfoForm__inputContainer']}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="e.g stephenking@lorem.com" />
                </div>
                <div className={styles['b-personalInfoForm__inputContainer']}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="e.g +1 234 567 890" />
                </div>
                <SubmitButton/> 
            </form>
        </>
    );
}
