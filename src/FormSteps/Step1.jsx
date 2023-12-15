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
        else (
            window.alert("Name field cannot be empty.")
        )
    }

    const validateName = (inputName) => {
        const trimmedString = inputName.trim()
        if (trimmedString ==="") return false
        else return trimmedString 
    }

    return(
        <div className="stepContainer">
            <h1>Step 1</h1>
            <label>First Name: </label>
            <input 
            type="text" 
            name="firstName" 
            placeholder="enter first name" 
            id="firstName" 
            value={formData.firstName}
            onChange={e=>handleChange(e)}
            onSubmit={e => changeStep("/Step2")}
            />
            <button onClick={e=>changeStep("/")}>Previous Step</button>
            <button onClick={e => changeStep("/Step2")}>Next Step</button>
        </div>
    )
}
export default Step1