import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Apps from "./components/pages/Apps";
import AppPrivacy from "./components/pages/AppPrivacy";
import FlappyOhioHome from "./components/pages/apps/FlappyOhioHome";
import FlappyOhioPrivacy from "./components/pages/privacy/FlappyOhioPrivacy";
import './styles/App.css';

const BG = require('./images/BG.jpg')
const divBGStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${BG})`,
    backgroundSize: 'cover'
};

function App() {
  return (
    <>
        <Navbar/>
        <div style={divBGStyle}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/apps" element={<Apps />}/>
                <Route path="/app-privacy" element={<AppPrivacy />}/>
                <Route path="/apps/flappy-ohio" element={<FlappyOhioHome />}/>
                <Route path="/apps/flappy-ohio/privacy" element={<FlappyOhioPrivacy />}/>
            </Routes>
        </div>
    </>
  );
}

export default App;
