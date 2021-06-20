import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";

function StretchedTile(props) {
    const imgStyle = {
        borderRadius : "4px",
        height : "auto",
        width : "85%",
        display: "inline-block",
        // marginLeft: "auto",
        // marginRight: "auto",
        // horizontalAlign: "middle"
        alignSelf: "center"
        // width: "50%"
    }

    const tileStyle = {
        backgroundImage: `url("https://images.unsplash.com/photo-1552152974-19b9caf99137?")`,
        // backgroundImage: `url("${Background}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // margin : "10px",
        minHeight: '6rem',
        color: 'white'
    }

    return (
        <>
            <Container className="shadow p-3 mb-5 bg-white rounded">
                <Row>
                    <div className="col-3" style={{display:"grid"}}>
                        <img src="https://images.unsplash.com/photo-1552152974-19b9caf99137?" style={imgStyle} />
                    </div>
                    <div className="col-9">
                        <h4>{props.blog.title}</h4>
                        <span className="text-muted d-block text-truncate">{props.blog.paragraph[0]}</span>
                        <span className="d-flex justify-content-end"><Link to={`/blog/${props.blog.id}`}>Read more &gt;&gt;</Link></span>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default StretchedTile
