import { useNavigate } from "react-router-dom";

const Step3 = ({formData, setFormData }) => {
    const navigate = useNavigate();

    const changeStep = (stepChange) => {
        if (formData.birthYear) {
            navigate(stepChange);
        } else {
            window.alert("Birth year cannot be empty.");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            birthYear: e.target.value
        })
    }

    const birthYearOptions = Array.from({ length: 114 }, (_, index) => 2023 - index);

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
            <button onClick={() => changeStep("/Step2")}>Previous Step</button>
            <button onClick={() => changeStep("/Step4")}>Next Step</button>
        </div>
    );
};

export default Step3;
