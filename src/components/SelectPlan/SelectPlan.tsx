import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";
import { FormsProps } from "../../types/types";
import './test.scss';
import { useState } from "react";
import { handleSubmit } from "../../utils/handleSubmit";
import FormHeader from "../Ui/FormHeader/FormHeader";

export default function SelectPlan({nextStep, updateFormValues}: FormsProps) {

  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };
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
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <form className="pricing-plan" onSubmit={submitHandler}>
        <label className="plan">
          <input type="radio" name="plan" value="arcade" hidden />
          <div className="plan__content">
            <div className="plan__icon">
              <img src={ArcadeIcon} alt="" />
            </div>
            <div className="plan__title">Arcade</div>
            <div className="plan__price">$9/mo</div>
          </div>
        </label>
        <label className="plan">
          <input type="radio" name="plan" value="advanced" hidden />
          <div className="plan__content">
            <div className="plan__icon">
              <img src={AdvancedIcon} alt="" />
            </div>
            <div className="plan__title">Advanced</div>
            <div className="plan__price">$12/mo</div>
          </div>
        </label>
        <label className="plan">
          <input type="radio" name="plan" value="pro" hidden />
          <div className="plan__content">
            <div className="plan__icon">
              <img src={ProIcon} alt="" />
            </div>
            <div className="plan__title">Pro</div>
            <div className="plan__price">$15/mo</div>
          </div>
        </label>
        <div className="toggle">
      <span>Monthly</span>
      <button 
        type="button" 
        className="testButton" 
        onClick={handleToggle}
        aria-label={`Switch to ${isYearly ? "monthly" : "yearly"} plan`}
      >
        <div className={`circle ${isYearly ? "yearly" : "monthly"}`}></div>
      </button>
      <input 
        type="hidden" 
        name="subscription" 
        value={isYearly ? "yearly" : "monthly"} 
        readOnly 
      />
      <span>Yearly</span>
    </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
