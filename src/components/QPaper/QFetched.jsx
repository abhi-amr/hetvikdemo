import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import MyPdf from '../../images/pag19.pdf';



class QFetched extends Component{
  // state = {
  //   customizedPdf : ""
  // };

  constructor(props){
    super(props);
    
    // this.setState({
    //   //link : this.props.link,      
    // });
  }



  render(){
    //const customizedPdf = `${this.props.link}` + '#toolbar=0';
    return (
        <div>
        <embed src={`${this.props.pdflink}#toolbar=0&view=Fit`} type="application/pdf"  height="610px" width="100%" />
        </div>
    );
  }
  
}

export default QFetched;
