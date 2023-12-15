import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Step1 from './FormSteps/Step1'



const WizardForm = () => {
    const [formData, setFormData] = useState({
        firstName: "Michael",
        lastName: "",
        age,
        email: "",
    })

    const onNext = (e, stepChange) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        // change step using stepChange
    }

    return(
        <div className="formContainer">
            <Step1 formData={formData} setFormData={setFormData} />
            
        </div>
    )
}