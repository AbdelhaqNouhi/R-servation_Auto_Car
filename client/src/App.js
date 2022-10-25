import Header from "./components/Header";
// import HomePage from "./components/HomePage";
import Login from "./components/Login"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header title= 'Travels' />
      <Login />
      {/* <HomePage /> */}
      <Footer />
    </div>
  )
}

export default App;
