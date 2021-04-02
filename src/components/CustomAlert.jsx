import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'



class CustomToaster extends Component{
  state = {
    variant : "",
    display : "none"
  };

  constructor(props){
    super(props);
    const {success} = props;
    const variantColor = success?"success":"danger";
    console.log(variantColor);
    this.state = {
      variant : variantColor,
      display : "block"
    }
  }



  render(){
    let style ={
      display : this.state.display
    }
    return (
        <Alert style={style} variant={this.state.variant} >
            {this.props.message}
        </Alert>
    );
  }
  
}

export default CustomToaster;
