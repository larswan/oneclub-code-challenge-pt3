import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const WizardForm = () => {
    const navigate = useNavigate()

    return(
        <div>
            <h1>Wizard Form</h1> 
            <button onClick={()=>navigate("/Step1")}>Start Form</button>
        </div>
    )
}
export default WizardForm