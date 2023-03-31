import React from 'react';
import "../../styles/Common.css"
import "../../styles/Apps.css"

const FlappyOhioAppIcon = require("../../images/app_icons/FlappyOhioAppIcon.png")

export default function Apps() {
    return (
        <>  
            <h1 className="common-title">
                Apps
            </h1>
            <br/>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th><b>Flappy Ohio</b></th>
                        <th><b>App Store Link</b></th>
                        <th><b>More Information</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: "1px solid black" }}>
                        <td><img className="app-icon" alt="flappy ohio app icon" src={FlappyOhioAppIcon}/></td>
                        {/* TODO: Update link */}
                        <td><a href="/apps">Link</a></td>
                        <td><a href="/apps/flappy-ohio">Link</a></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}