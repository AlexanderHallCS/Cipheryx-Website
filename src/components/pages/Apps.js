import React from 'react';
import { Link } from 'react-router-dom';
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
                        <th><b>Name</b></th>
                        <th><b>App Icon</b></th>
                        <th><b>App Store Link</b></th>
                        <th><b>More Information</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: "1px solid black" }}>
                        <td>Flappy Ohio</td>
                        <td><img className="app-icon" alt="flappy ohio app icon" src={FlappyOhioAppIcon}/></td>
                        {/* TODO: Update link */}
                        <td><Link to="/apps">Link</Link></td>
                        <td><Link to="/apps/flappy-ohio">Link</Link></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}