import { useNavigate } from "react-router-dom"

const Step2 = ({handleChange, formData, setFormData }) => {
    const navigate = useNavigate()

    const changeStep = (stepChange) => {
        const checkedName = validateName(formData.lastName)

        //check to see if form is empty
        if (checkedName) {
            // remove spaces around name and set form data then move to the next step
            setFormData({
                ...formData,
                lastName: checkedName
            })
            navigate(stepChange)
        }
        else (
            window.alert("Name field cannot be empty.")
        )
    }

    const validateName = (inputName) => {
        const trimmedString = inputName.trim()
        if (trimmedString === "") return false
        else return trimmedString
    }

    return (
        <div className="stepContainer">
            <h1>Step 2</h1>
            <label>Last Name: </label>
            <input
                type="text"
                name="lastName"
                placeholder="enter last name"
                id="lastName"
                value={formData.lastName}
                onChange={e => handleChange(e)}
            />
            <button onClick={e => changeStep("/Step1")}>Previous Step</button>
            <button onClick={e => changeStep("/Step3")}>Next Step</button>
        </div>
    )
}
export default Step2