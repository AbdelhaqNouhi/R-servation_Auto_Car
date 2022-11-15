import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/pages/Login"
import HomePage from "./components/pages/HomePage";
import Register from "./components/pages/Register";
import ErrorPage from "./components/pages/ErrorPage";
import Admin from "./components/Admin/Admin";
import TravelTable from "./components/Admin/TravelDashbord";
import UsersTable from "./components/Admin/UserDashbord";
import LoginAdmin from "./components/Admin/LoginAdmin";


function App() {

  return (

    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element = {<Login />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Register" element={<Register/>} />

            <Route path="/Admin" element={<Admin />} />
            <Route path="/TravelDashbord" element={<TravelTable />} />
            <Route path="/UserDashbord" element={<UsersTable />} />
            <Route path="/LoginAdmin" element={<LoginAdmin />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </Router>
    </div>
  )
}
export default App;
