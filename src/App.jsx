import React from 'react';
import { useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import WizardForm from './WizardForm';
import Step1 from './FormSteps/Step1';
import Step2 from './FormSteps/Step2';

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: 25,
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


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WizardForm />} />
          <Route path="/step1" element={<Step1  />} />
        </Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;