import React, {Component} from 'react';
import {Container, Col, Row, Carousel} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/fa';
import slide1 from '../../images/Corousel/demo3.jpg';
import slide2 from '../../images/Corousel/demo2.jpg';



class WhoWeAre extends Component {
  render(){
    return (
        <div style={{padding:"1em"}}>
            {/* <Container fluid>
                <Row>
                    <Col>
                            
                    <Text><strong><h1>How we can be useful</h1></strong></Text>
                                
                    </Col>
                </Row>
            </Container> */}
                      
            <Container>
                
                <Row>
                    <Col sm style={{padding:"1em", fontSize:"1.5em"}}>
                        <Text family= "RocknRoll One">
                        <ul>
                            <li>Mobile Learning</li>
                            <li>Access previous year questions.</li>
                            <li>Save your time in accomodating questions.</li>
                            <li>Answers to the questions </li>
                            <li>Be updated to all the news and notices</li>
                        </ul>
                        </Text>
                    {/* <p>Access previous year questions<br/>Save your time in accomodating questions.
                    <br/>Answers to the questions <br/>Be updated to all the news and notices</p> */}
                    </Col>
                    <Col sm>
                    <img
                         className="d-block w-100"
                         src={slide1}
                         alt="True Friend"
                     />
                    </Col>
                </Row>
                
            </Container>
                   



        </div>
      
    
    );
  }
}

export default WhoWeAre;




// <Row>
//               <Col sm = {5}>

//               </Col>
//               <Col sm = {7}>
//               <Carousel>
//                     <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={slide1}
//                         alt="True Friend"
//                     />
//                     <Carousel.Caption>
//                         {/* <h3>First slide label</h3> */}
//                         {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//                     </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={slide2}
//                         alt="1000+ questions"
//                     />
                
//                     <Carousel.Caption>
//                         {/* <h3>Second slide label</h3> */}
//                         {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//                     </Carousel.Caption>
//                     </Carousel.Item>
//                 </Carousel>

//               </Col>
//           </Row>