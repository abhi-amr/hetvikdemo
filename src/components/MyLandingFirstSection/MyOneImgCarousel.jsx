import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';
import Font, { Text } from 'react-font';
import { } from 'react-icons/fa';
import slide3 from '../../images/Corousel/demo1.jpg';
import "../bootstrap.min.css";
import {Link} from 'react-router-dom';


class MyCarousel extends Component {
  render(){
    return (
        // controls and indicators arent working i guess
        <Carousel controls='false' indicators='false'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="True Friend"
                />
                <Carousel.Caption>
                <Link className="btn btn-success" to="/questions"><h3>Get Started</h3></Link>
                <p>Search your papers or use our quick links below</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            </Carousel>
    
    );
  }
}

export default MyCarousel;