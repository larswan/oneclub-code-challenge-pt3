import { useNavigate } from "react-router-dom";

const Step4 = ({ formData, setFormData, handleChange }) => {
    const navigate = useNavigate();

    const changeStep = (stepChange) => {
        if (validateEmail(formData.email)) {
            navigate(stepChange);
        } else {
            window.alert("Invalid e-mail address.");
        }
    };
    
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const testChange = (e) => {
        console.log(validateEmail(e.target.value))
    }

    return (
        <div className="stepContainer">
            <h1>Step 4</h1>
            <label>e-mail: </label>
            <input
                type="email"
                name="email"
                placeholder="ex: example@gmail.com"
                id="email"
                value={formData.email}
                onChange={e => handleChange(e)}
            />
            <button onClick={() => changeStep("/Step3")}>Previous Step</button>
            <button onClick={() => changeStep("/Confirmation")}>Next Step</button>
        </div>
    );
};

export default Step4;
