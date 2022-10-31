import './App.css';
import Header from "./components/Header/Header";
import CryptoTrading from "./components/CryptoTrading/CryptoTrading";
import Union from "./components/Union/Union";
import AboutUs from "./components/AboutUs/AboutUs";
import LevelOne from "./components/LevelOne/LevelOne";
import Future from "./components/Future/Future";
import SpotMargin from "./components/SpotMargin/SpotMargin";
import Derivatives from "./components/Derivatives/Derivatives";
import TradingArena from "./components/TradingArena/TraidingArena";
import MobileApp from "./components/MobileApp/MobileApp";
import DescTopTitle from "./components/shared/DesctopTitle/DescTopTitle";

function App() {
    return (
        <div className="wrapper">
            <div className="main">
                <div className="bgContainer">
                    <Header/>
                    <div className="descTopContainer">
                        <CryptoTrading/>
                        <Union/>
                    </div>
                </div>
                <div className="descTopTitle">
                    <DescTopTitle />
                </div>
                <div className="descTopWrapper">
                    <AboutUs/>
                    <LevelOne/>
                </div>
                <Future/>
                <SpotMargin/>
                <Derivatives/>
                <TradingArena/>
                <MobileApp/>
            </div>
        </div>
    );
}

export default App;
