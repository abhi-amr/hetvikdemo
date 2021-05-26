import React from 'react';
import {Text} from "react-font";

function BlogTitle(props) {
    return (
        <>
          <h1><Text family="Ubuntu" weight="medium">{props.title}</Text></h1>
        </>
    )
}

export default BlogTitle
