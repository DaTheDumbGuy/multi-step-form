import { useState } from "react";
import StepList from "./StepList/StepList";
import StepForm from "./StepForm/StepForm";

export default function FormPage(){
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = ()=> {
        if(currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    }

    return(
        <main>
            <StepList currentStep={currentStep}/>
            <StepForm currentStep={currentStep} nextStep={nextStep}/>
        </main>
    )
}