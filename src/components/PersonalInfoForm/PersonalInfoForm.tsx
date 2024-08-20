import { handleSubmit } from "../../utils/handleSubmit";
import { FormsProps } from "../../types/types";

export default function PersonalInfoForm({ nextStep, updateFormValues }: FormsProps) {

  return (
    <>
      <header>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number</p>
      </header>

      <form onSubmit={handleSubmit(nextStep, updateFormValues)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="e.g Stephen King" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="e.g stephenking@lorem.com" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="e.g +1 234 567 890" />
        </div>
        <button type="submit">Next</button>
      </form>
    </>
  );
}
