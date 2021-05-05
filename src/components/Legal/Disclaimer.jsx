import React, {Component} from 'react';
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import Heading from '../Utilities/Heading'



class PrivacyPolicy extends Component {
  render(){
    return (
        <Text family="Comfortaa" style={{textAlign: "justify"}}>
            <Container>
            <Heading content="Disclaimer for Hetvik" />

            <div id="disclaimer">
              <span>
              If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at hetvikcare@gmail.com. Our Disclaimer was generated with the help of the <a href="https://www.disclaimer-generator.com/">Disclaimer Generator website</a>.
              </span>
              <br /><br />
            </div>




            <div id="our-disclaimer">
              <h2>Disclaimer</h2>
              <span>
              All the information on this website - https://hetvik.in/ - is published in good faith and for general information purpose only. Hetvik does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Hetvik), is strictly at your own risk. Hetvik will not be liable for any losses and/or damages in connection with the use of our website.
              </span>
              <br /><br />
              <span>
              From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
              </span>
              <br /><br />
              <span>
              Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
              </span>
              <br /><br />
            </div>


            <div id="consent">
              <h2>Consent</h2>
              <span>
              By using our website, you hereby consent to our disclaimer and agree to its terms.
              </span>
              <br /><br />
            </div>

            <div id="update">
              <h2>Update</h2>
              <span>
              Should we update, amend or make any changes to this document, those changes will be prominently posted here. Our Privacy Policy was created by the <a href="https://www.generateprivacypolicy.com/">Privacy Policy Generator</a>.
              </span>
              <br /><br />
            </div>

            

            </Container>
            

        
        </Text>
        
    );
  }
}

export default PrivacyPolicy;

