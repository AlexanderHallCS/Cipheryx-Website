import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Common.css"
import "../../styles/Apps.css"

const StretchyOhioAppIcon = require("../../images/app_icons/StretchyOhioAppIcon.png")

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
                        <td>Stretchy Ohio</td>
                        <td><img className="app-icon" alt="stretchy ohio app icon" src={StretchyOhioAppIcon}/></td>
                        <td><Link to="https://apps.apple.com/us/app/stretchy-ohio/id6446421780?platform=iphone" target="_blank">Link</Link></td>
                        <td><Link to="/apps/stretchy-ohio">Link</Link></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}