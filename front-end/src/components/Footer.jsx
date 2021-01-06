
import React from  'react';

const Footer = (props) =>  {
    const {naam, studentNr} = props;
    return (
        <div className="Footer navbar fixed-bottom">
            <ul style={{listStyleType : "none"}}>
                <li>Naam: {naam} </li>
                <li>Studentennummer: {studentNr}</li>
            </ul>
        </div>
    );
}

export default Footer;