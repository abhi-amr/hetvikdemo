import React from 'react';
import {Text} from "react-font";

function CategoryTitle(props) {
    return (
        <>
            <h5 style={{color:"#2b6180"}}><Text family="Roboto" weight="medium">{props.content}</Text></h5>
        </>
    )
}

export default CategoryTitle
