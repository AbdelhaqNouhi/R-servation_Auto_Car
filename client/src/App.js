import Header from "./components/Header";
import HomePage from "./components/HomePage";
// import Login from "./components/Login"
import Footer from "./components/Footer";
// import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Header title= 'Travels' />
      {/* <Login />: */}
      {/* <Register /> */}
      <HomePage />
      <Footer />
    </div>
  )
}

export default App;
