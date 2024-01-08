import PropTypes from "prop-types";

const Step3 = ({ formData, handleChange, nextStep, prevStep }) => {
  const changeStep = (stepChange) => {
    if (formData.birthYear) {
      stepChange();
    } else {
      window.alert("Birth year cannot be empty.");
    }
  };

  const birthYearOptions = Array.from(
    { length: 114 },
    (_, index) => 2023 - index
  );

  return (
    <div className="stepContainer">
      <h1>Step 3</h1>
      <label>Birth Year: </label>
      <select
        name="birthYear"
        id="birthYear"
        value={formData.birthYear}
        onChange={(e) => handleChange(e)}
      >
        <option value="">Select</option>
        {birthYearOptions.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <div className="buttonContainer">
        <button onClick={() => changeStep(prevStep)}>Previous Step</button>
        <button onClick={() => changeStep(nextStep)}>Next Step</button>
      </div>
    </div>
  );
};

export default Step3;

Step3.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
