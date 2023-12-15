import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const WizardForm = () => {
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(`/Step1`)
    }

    return(
        <div className="stepContainer">
            <h1>Wizard Form</h1> 
            <button onClick={handleClick}>Start Form</button>
        </div>
    )
}
export default WizardForm