import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react";
import Login from "./components/pages/Login"
import HomePage from "./components/pages/HomePage";
import Register from "./components/pages/Register";
import ErrorPage from "./components/pages/ErrorPage";
import Admin from "./components/pages/Admin";


function App() {

  return (

    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element = {<Login />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Admin" element={<Admin />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </Router>

      <Router>
        <Routes>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
