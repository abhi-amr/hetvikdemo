import React from 'react';
import {Text} from "react-font";
import parse from 'html-react-parser';

function Paragraph(props) {
    return (
        <>
            <h5 style={{textAlign:"justify", paddingBottom:"1em"}}><Text family="Newsreader">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{parse(props.content)}</Text></h5>
        </>
    )
}

export default Paragraph
