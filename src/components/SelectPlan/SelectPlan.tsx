import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";
import { FormsProps } from "../../types/types";
import { useState } from "react";
import { handleSubmit } from "../../utils/handleSubmit";
import FormHeader from "../Ui/FormHeader/FormHeader";
import SubmitButton from "../Ui/SubmitButton/SubmitButton";
import styles from './selectPlan.module.scss';

export default function SelectPlan({nextStep, updateFormValues}: FormsProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };
  const handlePlan = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const radioInput = target.previousElementSibling as HTMLInputElement;
  
    if (!radioInput.checked) {
      // Uncheck all radio inputs first
      const allPlans = document.querySelectorAll(`input[name="plan"]`);
      allPlans.forEach((input) => {
        const planContent = input.nextElementSibling as HTMLElement;
        if (planContent.classList.contains(styles['active'])) {
          planContent.classList.remove(styles['active']);
        }
      });
  
      // Set the clicked plan as checked and add the active class
      radioInput.checked = true;
      target.classList.add(styles['active']);
    }
  };
  
  const submitHandler = handleSubmit({
    updateFormValues,
    onSuccess: () => {
        // Call nextStep after updating form values
        nextStep();
    }
});
console.log(styles);
  return (
    <>
      <FormHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <form className={styles['b-pricePlan']} onSubmit={submitHandler}>
        <label className={styles['b-pricePlan__plan']}>
          <input type="radio" name="plan" value="arcade" hidden checked/>
          <div className={`${styles['b-pricePlan__plan__content']} ${styles.active}`} onClick={handlePlan}>
            <div className="plan__icon">
              <img src={ArcadeIcon} alt="" />
            </div>
            <div className={styles['b-pricePlan__plan__content__description']}>
              <h2 className="plan__title">Arcade</h2>
              <p className="plan__price">$9/mo</p>
            </div>
          </div>
        </label>

        <label className={styles['b-pricePlan__plan']}>
          <input type="radio" name="plan" value="advanced" hidden />
          <div className={styles['b-pricePlan__plan__content']}  onClick={handlePlan}>
            <div className="plan__icon">
              <img src={AdvancedIcon} alt="" />
            </div>
            <div className={styles['b-pricePlan__plan__content__description']}>
              <h2 className="plan__title">Advanced</h2>
              <p className="plan__price">$12/mo</p>
            </div>
          </div>
        </label>

        <label className={styles['b-pricePlan__plan']}>
          <input type="radio" name="plan" value="pro" hidden />
          <div className={styles['b-pricePlan__plan__content']} onClick={handlePlan}>
            <div className="plan__icon">
              <img src={ProIcon} alt="" />
            </div>
            <div className={styles['b-pricePlan__plan__content__description']}>
              <h2 className="plan__title">Pro</h2>
              <p className="plan__price">$15/mo</p>
            </div>
          </div>
        </label>

        <div className={styles['b-pricePlan__subscription']}>
          <span>Monthly</span>
          <button 
            type="button" 
            className={styles['b-pricePlan__subscription__button']}
            onClick={handleToggle}
            aria-label={`Switch to ${isYearly ? "monthly" : "yearly"} plan`}
          >
            <div className={`${styles['b-pricePlan__subscription__button__circle']} ${isYearly ? styles.yearly: styles.monthly}`}></div>
          </button>
          <input 
            type="hidden" 
            name="subscription" 
            value={isYearly ? "yearly" : "monthly"} 
            readOnly 
          />
          <span>Yearly</span>
        </div>

        <SubmitButton />
      </form>

    </>
  );
}
