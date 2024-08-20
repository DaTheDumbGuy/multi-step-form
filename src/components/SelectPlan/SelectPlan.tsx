import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";
import { FormsProps } from "../../types/types";

export default function SelectPlan({nextStep, updateFormValues}: FormsProps) {
  console.log(nextStep, updateFormValues);
  return (
    <>
      <header>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number</p>
      </header>
      <form className="pricing-plan">
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
          <label>
            <span>Monthly</span>
            <input type="checkbox" />
            <span>Yearly</span>
          </label>
        </div>
      </form>
    </>
  );
}
