import React from 'react';
import "../../../styles/Common.css"
import "../../../styles/Apps.css"

const startImg = require("../../../images/app_screenshots/start.png")
const gameplay1Img = require("../../../images/app_screenshots/gameplay1.png")
const gameplay2Img = require("../../../images/app_screenshots/gameplay2.png")
const gameplay3Img = require("../../../images/app_screenshots/gameplay3.png")
const gameplay4Img = require("../../../images/app_screenshots/gameplay4.png")

export default function FlappyOhioHome() {
    return (
        <>
            <h1 className="common-title">
                Flappy Ohio
            </h1>
            <h5 className="app-description">Flappy Bird but it's in Ohio! &#128128;
            Help Flappy Ohio navigate the cursed landscape and rack up as many points as possible!</h5>
            <br/>
            <br/>
            <img className="app-screenshot" src={startImg} alt="app screenshot 1"/>
            <img className="app-screenshot" src={gameplay1Img} alt="app screenshot 2"/>
            <img className="app-screenshot" src={gameplay2Img} alt="app screenshot 3"/>
            <img className="app-screenshot" src={gameplay3Img} alt="app screenshot 4"/>
            <img className="app-screenshot" src={gameplay4Img} alt="app screenshot 5"/>
        </>
    )
}