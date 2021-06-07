import React from 'react';
import {Card, Toast} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CategoryList.css';

function CategoryList() {
    return (
        <>
            <Card className="shadow ">
                <Card.Header as="h5">Hot Topics</Card.Header>
                <Card.Body>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <Link className="category-link"><h6>Announcements</h6></Link>
                            {/* <span class="badge badge-primary badge-pill">7</span> */}
                        </li>
                        <li class="list-group-item">
                            <Link className="category-link"><h6>Education</h6></Link>
                            {/* <span class="badge badge-primary badge-pill">8</span> */}
                        </li>
                        <li class="list-group-item">
                            <Link className="category-link"><h6>University</h6></Link>
                            {/* <span class="badge badge-primary badge-pill">5</span> */}
                        </li>
                        <li class="list-group-item">
                            <Link className="category-link"><h6>City</h6></Link>
                            {/* <span class="badge badge-primary badge-pill">11</span> */}
                        </li>
                        
                    </ul>
                </Card.Body>
            </Card>
        </>
    )
}

export default CategoryList