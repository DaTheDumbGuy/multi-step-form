import FormPage from "./pages/FormPage/FormPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
     <main>
     <Router basename="/multi-step-form">
      <Routes>
        <Route path="/" element={<FormPage />} />
      </Routes>
    </Router>
     </main>
    </>
  )
}

export default App
