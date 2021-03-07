import React, {Component} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/fa';
import Error404 from '../../images/404.jpg'


class PageNotFound extends Component {
  render(){
    return (
      <div>
        <img className="d-block w-100"
          src = {Error404}              
        />
      </div>
    
    );
  }
}

export default PageNotFound;