import { useNavigate } from "react-router-dom"

const Step1 = ({handleChange, formData, setFormData }) => {
    const navigate = useNavigate()

    const changeStep = (stepChange) => {
        const checkedName = validateName(formData.firstName)

        //check to see if form is empty
        if (checkedName) {
            // remove spaces around name and set form data then move to the next step
            setFormData({
                ...formData,
                firstName: checkedName
            })
            navigate(stepChange)
        }
        // Prevent changing steps if entry is invalid
        else (
            window.alert("Name field cannot be empty.")
        )
    }

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const validateName = (inputName) => {
        const trimmedString = inputName.trim();

        if (trimmedString === "") {
            return false;
        } else {
            const capitalizedString = trimmedString
                .split(" ")
                .map((word) => capitalizeFirstLetter(word))
                .join(" ");

            return capitalizedString;
        }
    };

    return(
        <div className="stepContainer">
            <h1>Step 1</h1>
            <label>First Name: </label>
            <input 
            type="text" 
            name="firstName" 
            placeholder="Enter first name" 
            id="firstName" 
            value={formData.firstName}
            onChange={e=>handleChange(e)}
            />
            <div className="buttonContainer">
                <button onClick={()=>changeStep("/")}>Previous Step</button>
                <button onClick={() => changeStep("/Step2")}>Next Step</button>
            </div>
        </div>
    )
}
export default Step1