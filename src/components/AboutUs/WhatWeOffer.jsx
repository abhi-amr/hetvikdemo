import React, {Component} from 'react';
import {CardGroup, CardDeck, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import { ImDatabase } from 'react-icons/im';
import { BsFillPeopleFill, BsExclude } from 'react-icons/bs';
import { GrAchievement } from 'react-icons/gr';
import Notes from '../../images/WhatWeOffer/notes.svg';
import MobileLearning from '../../images/WhatWeOffer/mobile_learning.svg';
import PreviousPaperImg from '../../images/WhatWeOffer/paper.svg';
import SaveTimeImg from '../../images/WhatWeOffer/work_time.svg';
import NoticesImg from '../../images/WhatWeOffer/post_re.svg';
import SupportImg from '../../images/WhatWeOffer/support2.svg';





class WhatWeOffer extends Component {
  render(){
    const imgStyle = {
        maxHeight: '14em'
    }
    return (
        <Container style={{padding:"1em"}}><Font family= "Londrina Solid">
            <Row>
                <Col className="text-center">
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={MobileLearning} style={imgStyle}/>
                        <Card.Body>
                        <Card.Title>E-Learning</Card.Title>
                        <Card.Text>
                            We know learning is crucial and we are progressing towards in providing ease of access to the contents.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={PreviousPaperImg} style={imgStyle}/>
                        <Card.Body>
                        <Card.Title>Previous Year Questions</Card.Title>
                        <Card.Text>
                            The previous questions guide what topics to focus on and we are here to help with all previous papers.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={Notes} style={imgStyle}/>
                        <Card.Body>
                        <Card.Title>Answers And Notes</Card.Title>
                        <Card.Text>
                            We are currently looking for reliable source from whom we can take answers and notes for the papers.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    </CardGroup>
                </Col>
            </Row>
            
            <Row>
                <Col className="text-center">
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={NoticesImg} style={imgStyle}/>
                        <Card.Body>
                        <Card.Title>News And Notices</Card.Title>
                        <Card.Text>
                            Be updated with all the news and notices in the university.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={SaveTimeImg} style={imgStyle}/>
                        <Card.Body>
                        <Card.Title>Save Your Time</Card.Title>
                        <Card.Text>
                            We do the hard work, so that you can enjoy and socialise with your friends.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={SupportImg} style={imgStyle}/>
                        <Card.Body>
                        <Card.Title>24x7 Query</Card.Title>
                        <Card.Text>
                            We feel delighted when you leave suggestions and also take pride in hearing your queries.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    </CardGroup>
                </Col>
            </Row>

            </Font>
        </Container>
    );
  }
}

export default WhatWeOffer;