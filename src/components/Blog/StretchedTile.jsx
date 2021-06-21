import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './StretchedTile.css';
// import DefaultBlogImg from '../../images/Blog/DefaultBlogImg.jpg'

function StretchedTile(props) {
    // const imgStyle = {
    //     borderRadius: "4px",
    //     height: "auto",
    //     width: "85%",
    //     display: "inline-block",
    //     // marginLeft: "auto",
    //     // marginRight: "auto",
    //     // horizontalAlign: "middle"
    //     alignSelf: "center",
    //     // width: "50%"
    // }

    return (
        <>
            <Container className="shadow p-3 mb-5 bg-white rounded toCheck">
                <Row>
                    <div className="col-3" style={{ display: "grid" }}>
                        <img src={props.blog.imageUrl} id="tileImg" />
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
