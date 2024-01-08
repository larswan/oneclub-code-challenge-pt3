import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ConfirmationScreen from "./ConfirmationScreen";

const WizardForm = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthYear: "Select",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formContainer">
      <h1>Wizard Form</h1>
      {step === 0 && <button onClick={nextStep}>Start Form</button>}
      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      )}
      {step === 4 && (
        <Step4
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
        />
      )}
      {step === 5 && <ConfirmationScreen formData={formData} />}
    </div>
  );
};
export default WizardForm;
