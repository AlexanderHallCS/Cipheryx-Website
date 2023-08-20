import React from 'react';
import { Link } from 'react-router-dom';

const StretchyOhioAppIcon = require("../../images/app_icons/StretchyOhioAppIcon.png")

export default function AppPrivacy() {
    return (
        <>  
            <h1 className="common-title">
                App Privacy
            </h1>
            <br/>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th><b>Name</b></th>
                        <th><b>App Icon</b></th>
                        <th><b>Privacy Policy</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: "1px solid black" }}>
                        <td>Stretchy Ohio</td>
                        <td><img className="app-icon" alt="stretchy ohio app icon" src={StretchyOhioAppIcon}/></td>
                        <td><Link to="/apps/stretchy-ohio/privacy">Link</Link></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}