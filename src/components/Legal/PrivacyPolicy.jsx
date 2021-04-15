import React, {Component} from 'react';
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import Heading from '../Utilities/Heading'
import { Link } from "react-router-dom";


class PrivacyPolicy extends Component {
  render(){
    return (
        <Text family="Comfortaa" style={{textAlign: "justify"}}>
            <Container>
            <Heading content="Privacy Policy for Hetvik" />
            <div id="our-privacy-policy">
              <span>
              At Hetvik, accessible from https://zealous-river-0573aaf00.azurestaticapps.net/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Hetvik and how we use it.
              </span>
              <br /><br />
              <span>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </span>
              <br /><br />
            </div>




            <div id="log-files">
              <h2>Log Files</h2>
              <span>
              Hetvik follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the Privacy Policy Generator and the <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">Online Privacy Policy Generator</a>.
              </span>
              <br /><br />
            </div>



            <div id="cookies-and-web-beacons">
            <h2>Cookies and Web Beacons</h2>
              <span>
              Like any other website, Hetvik uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </span>
              <br /><br />
              <span>
              For more general information on cookies, please read <a href="https://www.privacypolicyonline.com/what-are-cookies/">"What Are Cookies"</a>.
              </span>
              <br /><br />
            </div>



            <div id="google-doubleClick-DART-cookie">
            <h2>Google DoubleClick DART Cookie</h2>
              <span>
              Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a>
              </span>
              <br /><br />
            </div>




            <div id="privacy-policies">
            <h2>Privacy Policies</h2>
              <span>
              You may consult this list to find the Privacy Policy for each of the advertising partners of Hetvik.
              </span>
              <br /><br />
              <span>
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Hetvik, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
              </span>
              <br /><br />
              <span>
              Note that Hetvik has no access to or control over these cookies that are used by third-party advertisers.
              </span>
              <br /><br />
            </div>



            <div id="third-party-privacy-policies">
            <h2>Third Party Privacy Policies</h2>
              <span>
              Hetvik's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
              </span>
              <br /><br />
              <span>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
              </span>
              <br /><br />
            </div>


            <div id ="children-information">
            <h2>Children's Information</h2>
              <span>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
              </span>
              <br /><br />
              <span>
              Hetvik does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
              </span>
              <br /><br />
            </div>




            <div id="online-privacy-policy-only">
            <h2>Online Privacy Policy Only</h2>
              <span>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Hetvik. This policy is not applicable to any information collected offline or via channels other than this website.
              </span>
              <br /><br />
            </div>



            <div id = "consent">
            <h2>Consent</h2>
              <span>
              By using our website, you hereby consent to our Privacy Policy and agree to its <Link to="/terms">Terms and Conditions</Link>.
              </span>
              <br /><br />
            </div>

            </Container>
            

        
        </Text>
        
    );
  }
}

export default PrivacyPolicy;

