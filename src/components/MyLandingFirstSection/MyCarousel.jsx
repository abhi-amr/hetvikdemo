import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';
import Font, { Text } from 'react-font';
import { } from 'react-icons/fa';
import slide1 from '../../images/Corousel/demo3.jpg';
import slide2 from '../../images/Corousel/demo2.jpg';
import slide3 from '../../images/Corousel/demo1.jpg';


class MyCarousel extends Component {
  render(){
    return (
        <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={slide1}
                alt="True Friend"
            />
            <Carousel.Caption>
                {/* <h3>First slide label</h3> */}
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={slide2}
                alt="1000+ questions"
            />
        
            <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={slide3}
                alt="Motivational"
            />
        
            <Carousel.Caption>
                {/* <h3>Third slide label</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    
    );
  }
}

export default MyCarousel;