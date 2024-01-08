import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import WizardForm from "./FormSteps/WizardForm";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WizardForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
