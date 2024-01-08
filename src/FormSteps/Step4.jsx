import PropTypes from "prop-types";
import { validateEmail } from "../functions";

const Step4 = ({ formData, handleChange, nextStep, prevStep }) => {
  const changeStep = (stepChange) => {
    if (validateEmail(formData.email)) {
      stepChange();
    } else {
      window.alert("Invalid e-mail address.");
    }
  };

  return (
    <div className="stepContainer">
      <h1>Step 4</h1>
      <label>e-mail: </label>
      <input
        type="email"
        name="email"
        placeholder="Ex: example@gmail.com"
        id="email"
        value={formData.email}
        onChange={(e) => handleChange(e)}
      />
      <div className="buttonContainer">
        <button onClick={() => changeStep(prevStep)}>Previous Step</button>
        <button onClick={() => changeStep(nextStep)}>Next Step</button>
      </div>
    </div>
  );
};

export default Step4;

Step4.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
