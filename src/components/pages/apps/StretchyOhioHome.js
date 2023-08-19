import React from 'react';
import "../../../styles/Common.css"
import "../../../styles/Apps.css"

const screenshot1 = require("../../../images/app_screenshots/stretchy_ohio/screenshot1.png")
const screenshot2 = require("../../../images/app_screenshots/stretchy_ohio/screenshot2.png")
const screenshot3 = require("../../../images/app_screenshots/stretchy_ohio/screenshot3.png")
const screenshot4 = require("../../../images/app_screenshots/stretchy_ohio/screenshot4.png")
const screenshot5 = require("../../../images/app_screenshots/stretchy_ohio/screenshot5.png")

export default function StretchyOhioHome() {
    return (
        <>
            <h1 className="common-title">
                Stretchy Ohio
            </h1>
            <h5 className="app-description">Only in Ohio meme, but it's a mobile game! &#128128;
            Help Stretchy Ohio navigate the cursed landscape and rack up as many points as possible!</h5>
            <br/>
            <br/>
            <img className="app-screenshot" src={screenshot1} alt="app screenshot 1"/>
            <img className="app-screenshot" src={screenshot2} alt="app screenshot 2"/>
            <img className="app-screenshot" src={screenshot3} alt="app screenshot 3"/>
            <img className="app-screenshot" src={screenshot4} alt="app screenshot 4"/>
            <img className="app-screenshot" src={screenshot5} alt="app screenshot 5"/>
        </>
    )
}