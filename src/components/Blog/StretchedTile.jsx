import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";

function StretchedTile(props) {
    const imgStyle = {
        borderRadius : "4px"
    }
    return (
        <>
            <div class="shadow p-3 mb-5 bg-white rounded">
                <Container fluid>
                    <Row>
                        <div className="col-3">
                            <img src="https://images.unsplash.com/photo-1552152974-19b9caf99137?" style={imgStyle} height="125px" width="100%"/>
                        </div>
                        <div className="col-9">
                            <h4 >Hetvik - Platform designed for the students by the students</h4>
                            <span className="text-muted">As the dates of Patna University exams are announced, the commotion among students begin. Students rush to toppers and seniors for their help. Some get both...</span>
                            <span className="d-flex justify-content-end"><Link>Read more &gt;&gt;</Link></span>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default StretchedTile
