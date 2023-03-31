import React from 'react';

const FlappyOhioAppIcon = require("../../images/app_icons/FlappyOhioAppIcon.png")

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
                        <td>Flappy Ohio</td>
                        <td><img className="app-icon" alt="flappy ohio app icon" src={FlappyOhioAppIcon}/></td>
                        <td><a href="/apps/flappy-ohio/privacy">Link</a></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}