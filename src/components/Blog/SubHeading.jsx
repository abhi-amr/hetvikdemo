import React from 'react';
import {Text} from "react-font";

function SubHeading(props) {
    return (
        <>
          <h4><Text family="Lato" >{props.content}</Text></h4>
        </>
    )
}

export default SubHeading
