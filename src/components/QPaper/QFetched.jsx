import React, { Component } from "react";



class QFetched extends Component {
  // state = {
  //   customizedPdf : ""
  // };

  constructor(props) {
    super(props);

    // this.setState({
    //   //link : this.props.link,
    // });
  }

  render() {
    //const customizedPdf = `${this.props.link}` + '#toolbar=0';
    return (
      <div>
        {/* <embed
          src={this.props.pdflink}
          type="application/pdf"
          height="610px"
          width="100%"
        /> */}

        <object 
          data={this.props.pdflink}
          type="application/pdf"
          width="100%"
          height="610px"
        />
      </div>
    );
  }
}

export default QFetched;
