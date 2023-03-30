import React from "react"
import "../../styles/Home.css"

const YTButton = require('../../images/YTButton.png')
const TwitchButton = require('../../images/TwitchButton.png')

export default function Home() {
    return (
        <>
            <h1 className="home-title">
                CIPHERYX
            </h1>
            <h2 className="home-subtitle">
            - VTuber and iOS Developer :)
            </h2>
            <a href="https://www.youtube.com/@cipheryx" target="_blank" rel="noreferrer">
                <img className="yt-button" alt="youtube link" src={YTButton}/>
            </a>
            <a href="https://www.twitch.tv/cipheryx" target="_blank" rel="noreferrer">
                <img className="twitch-button" alt="twitch link" src={TwitchButton}/>
            </a>
        </>
    )
}