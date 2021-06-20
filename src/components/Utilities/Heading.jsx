import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import './Heading.css';



class Heading extends Component {
    constructor(props){
        super(props);
    }


  render(){
    const h1 = {
        width: '100%',
        textAlign: 'center',
        borderBottom: '1px solid #efefef',
        lineHeight: '0.1em',
        margin: '10px 0 20px' 
     } 
     
    const h1Span = { 
         background:'#fff',
         padding:'0 10px' 
     }
    return (
        <Font family="Rubik">
            <Container fluid>
            <Row>

              <Col>
                <br /> <br />
                {/* <h1 style={h1}><span style={h1Span}><strong><center>THIS IS A TEST</center></strong></span></h1> */}
                <h1 className="separator"><strong>{this.props.content}</strong></h1>
                <br /><br />
              </Col>

            </Row>
            </Container>
        
        </Font>
        
    );
  }
}

export default Heading;

