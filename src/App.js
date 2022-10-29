import './App.css';
import Header from "./components/Header/Header";
import CryptoTrading from "./components/CryptoTrading/CryptoTrading";
import Union from "./components/Union/Union";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="wrapper">
      <div className="main">
          <Header />
          <CryptoTrading />
          <Union />
          <AboutUs />
      </div>
    </div>
  );
}

export default App;
