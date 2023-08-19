import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Apps from "./components/pages/Apps";
import AppPrivacy from "./components/pages/AppPrivacy";
import Attribution from "./components/Attribution";
import StretchyOhioPrivacy from "./components/pages/privacy/StretchyOhioPrivacy";
import StretchyOhioHome from "./components/pages/apps/StretchyOhioHome";
import './styles/App.css';

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
            <Route path="/apps/flappy-ohio" element={<div style={divBGStyle}><StretchyOhioHome /></div>}/>
            <Route path="/apps/flappy-ohio/privacy" element={<StretchyOhioPrivacy />}/>
        </Routes>
        <Attribution />
    </>
  );
}

export default App;
