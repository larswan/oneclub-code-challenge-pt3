import PropTypes from "prop-types";
import { validateName } from "../functions";

const Step1 = ({ handleChange, formData, setFormData, nextStep, prevStep }) => {
  const changeStep = (stepChange) => {
    // validate name will either return a capitalized name with spaces removed, or false if empty
    const checkedName = validateName(formData.firstName);

    //check to see if form is empty
    if (checkedName) {
      setFormData({
        ...formData,
        firstName: checkedName,
      });
      stepChange();
    }
    // Prevent changing steps if entry is invalid
    else window.alert("Name field cannot be empty.");
  };

  return (
    <div className="stepContainer">
      <h1>Step 1</h1>
      <label>First Name: </label>
      <input
        type="text"
        name="firstName"
        placeholder="Enter first name"
        id="firstName"
        value={formData.firstName}
        onChange={(e) => handleChange(e)}
      />
      <div className="buttonContainer">
        <button onClick={() => changeStep(prevStep)}>Previous Step</button>
        <button onClick={() => changeStep(nextStep)}>Next Step</button>
      </div>
    </div>
  );
};
export default Step1;

Step1.propTypes = {
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
