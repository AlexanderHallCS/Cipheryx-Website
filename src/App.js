import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Apps from "./components/pages/Apps";
import AppPrivacy from "./components/pages/AppPrivacy";
import FlappyOhioHome from "./components/pages/apps/FlappyOhioHome";
import FlappyOhioPrivacy from "./components/pages/privacy/FlappyOhioPrivacy";
import './styles/App.css';
import Attribution from "./components/Attribution";

const BG = require('./images/BG.jpg')
const divBGStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${BG})`,
    backgroundSize: 'cover',
};

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<div style={divBGStyle}><Home /></div>}/>
            <Route path="/apps" element={<div style={divBGStyle}><Apps /></div>}/>
            <Route path="/app-privacy" element={<div style={divBGStyle}><AppPrivacy /></div>}/>
            <Route path="/apps/flappy-ohio" element={<div style={divBGStyle}><FlappyOhioHome /></div>}/>
            <Route path="/apps/flappy-ohio/privacy" element={<FlappyOhioPrivacy />}/>
        </Routes>
        <Attribution />
    </>
  );
}

export default App;
