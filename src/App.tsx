import FormPage from "./pages/FormPage/FormPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormDataProvider } from "./hooks/FormDataProvider";

function App() {

  return (
    <FormDataProvider>
      <Router basename="/multi-step-form">
        <Routes>
          <Route path="/" element={<FormPage />} />
        </Routes>
      </Router>
    </FormDataProvider>
  )
}

export default App
