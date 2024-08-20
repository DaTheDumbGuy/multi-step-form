import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";

export default function SelectPlan() {
  return (
    <>
      <header>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number</p>
      </header>
      <form class="pricing-plan">
        <label class="plan">
          <input type="radio" name="plan" value="arcade" hidden />
          <div class="plan__content">
            <div class="plan__icon">
              <img src={ArcadeIcon} alt="" />
            </div>
            <div class="plan__title">Arcade</div>
            <div class="plan__price">$9/mo</div>
          </div>
        </label>
        <label class="plan">
          <input type="radio" name="plan" value="advanced" hidden />
          <div class="plan__content">
            <div class="plan__icon">
              <img src={AdvancedIcon} alt="" />
            </div>
            <div class="plan__title">Advanced</div>
            <div class="plan__price">$12/mo</div>
          </div>
        </label>
        <label class="plan">
          <input type="radio" name="plan" value="pro" hidden />
          <div class="plan__content">
            <div class="plan__icon">
              <img src={ProIcon} alt="" />
            </div>
            <div class="plan__title">Pro</div>
            <div class="plan__price">$15/mo</div>
          </div>
        </label>
        <div class="toggle">
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
