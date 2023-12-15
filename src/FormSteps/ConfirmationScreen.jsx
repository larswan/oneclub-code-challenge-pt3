const ConfirmationScreen = ({formData}) => {
    
    return(

        <div className="stepContainer">
            <h1>Confirmation:</h1>
            <h2>First Name: {formData.firstName}</h2>
            <h2>Last Name: {formData.lastName}</h2>
            <h2>Birth Year: {formData.birthYear}</h2>
            <h2>e-mail: {formData.email}</h2>
        </div>
    )
}
export default ConfirmationScreen