import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
const message1 = "Hey you";
const message2 = "What is going on";

  return (
    <>

      <h1>Hello World</h1>
      <h2>{message1}</h2>
      <p>{message2 + "??"}</p>
      <nav>
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Project</button>
        <button className="nav-btn">About us</button>
        <button className="nav-btn">Contact us</button>
      </nav>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}
export default App
