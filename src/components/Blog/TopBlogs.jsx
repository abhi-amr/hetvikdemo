import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './TopBlogs.css';

function TopBlogs(props) {
    return (
        <>
            {/* <Container fluid> */}
            <Link >
                <Carousel fade className="shadow">
                    <Carousel.Item interval={1500}>
                        <img
                        className="img-carousel w-100"
                        src="https://images.unsplash.com/photo-1552152974-19b9caf99137"
                        alt={props.title}
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                        className="img-carousel w-100"
                        src="https://images.unsplash.com/photo-1552152974-19b9caf99137"
                        alt={props.title}
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Link>
            {/* </Container>   */}
        </>
    )
}
;
export default TopBlogs