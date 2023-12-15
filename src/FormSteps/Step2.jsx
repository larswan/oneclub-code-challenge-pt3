const Step2 = ({ changeStep, formData, setFormData }) => {

    const validateName = (inputName) => {
        const trimmedString = inputName.trim()
        if (trimmedString === "") {
            window.alert("First name cannot be empty!")
            return false
        }
        else return trimmedString
    }


    return (
        <div className="stepContainer">
            <h1>Step 1</h1>
            <label>First Name: </label>
            <input
                type="text"
                name="Last Name"
                placeholder="enter last name"
                id="lastName"
            />
            <button onClick={e => changeStep(e, -1)}>Previous Step</button>
            <button onClick={e => changeStep(e, 1)}>Next Step</button>
        </div>
    )
}
export default Step2