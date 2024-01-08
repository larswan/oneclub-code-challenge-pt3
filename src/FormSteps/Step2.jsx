import PropTypes from "prop-types";
import { validateName } from "../functions";

const Step2 = ({ handleChange, formData, setFormData, nextStep, prevStep }) => {
  const changeStep = (stepChange) => {
    const checkedName = validateName(formData.lastName);

    if (checkedName) {
      setFormData({
        ...formData,
        lastName: checkedName,
      });
      stepChange();
    } else window.alert("Name field cannot be empty.");
  };

  return (
    <div className="stepContainer">
      <h1>Step 2</h1>
      <label>Last Name: </label>
      <input
        type="text"
        name="lastName"
        placeholder="Enter last name"
        id="lastName"
        value={formData.lastName}
        onChange={(e) => handleChange(e)}
      />
      <div className="buttonContainer">
        <button onClick={() => changeStep(prevStep)}>Previous Step</button>
        <button onClick={() => changeStep(nextStep)}>Next Step</button>
      </div>
    </div>
  );
};
export default Step2;

Step2.propTypes = {
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
