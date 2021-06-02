import React from 'react';

function Tag(props) {
    const tagStyle = {
        backgroundColor: "#e4e6e8", 
        borderRadius:"2px", 
        padding:"5px", 
        color:"black",
        margin : "5px"
    }
    return (
        <>
            <span className="" style={tagStyle}>{props.tag}</span>
        </>
    )
}

export default Tag