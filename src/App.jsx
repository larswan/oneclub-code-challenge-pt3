import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import WizardForm from './FormSteps/WizardForm';
import Step1 from './FormSteps/Step1';
import Step2 from './FormSteps/Step2';
import Step3 from './FormSteps/Step3';
import Step4 from './FormSteps/Step4';
import ConfirmationScreen from './FormSteps/ConfirmationScreen';

function App() {
  
  // Initialize the data to pass to form steps
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthYear: "Select",
    email: "",
  })

  // Generic update form state function
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  // I was tripping up setting up a more efficient routing system so I handled routing explicitly in each component
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WizardForm />} />
          <Route path="/step1" element={<Step1 formData={formData} setFormData={setFormData} handleChange={handleChange}/>} />
          <Route path="/step2" element={<Step2 formData={formData} setFormData={setFormData} handleChange={handleChange} />} />
          <Route path="/step3" element={<Step3 formData={formData} setFormData={setFormData} handleChange={handleChange} />} />
          <Route path="/step4" element={<Step4 formData={formData} setFormData={setFormData} handleChange={handleChange}/>} />
          <Route path="/confirmation" element={<ConfirmationScreen formData={formData} />} />
        </Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;