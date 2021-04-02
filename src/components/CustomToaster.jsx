import React, { Component } from 'react'
import Toast from 'react-bootstrap/Toast'



class CustomToaster extends Component{
    constructor(props){
      super(props);
     
    }
  render(){
    //const {alertVariant, responseMessage} = this.state;
    return (
        <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{this.props.heading}</strong>
          <small>{this.props.small}</small>
        </Toast.Header>
        <Toast.Body>{this.props.body}</Toast.Body>
      </Toast>
    );
  }
  
}

export default CustomToaster;
