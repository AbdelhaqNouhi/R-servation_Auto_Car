
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login"
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Header title= 'Travels' />
          <Routes>
            <Route path="/" element = {<HomePage/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Login" element={<Login />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}
export default App;
