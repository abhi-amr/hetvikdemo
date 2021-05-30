import React from 'react';
//import { } from "react-bootstrap";
import {Text} from "react-font";

function Paragraph(props) {
    return (
        <>
            <h5 style={{textAlign:"justify", paddingBottom:"1em"}}><Text family="Newsreader">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.content}</Text></h5>
        </>
    )
}

export default Paragraph
