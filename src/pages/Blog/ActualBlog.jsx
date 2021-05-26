import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import BlogTitle from '../../components/Blog/BlogTitle';
import SubHeading from '../../components/Blog/SubHeading';
import Paragraph from '../../components/Blog/Paragraph';
import BlogAuthor from '../../components/Blog/BlogAuthor';

export default function ActualBlog(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <br/>
                        <BlogTitle title="This is some heading regarding something"/>
                        <SubHeading content="This is sub heading" />
                        <img src="https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80" alt={props.title} width="100%" style={{maxHeight:"300px", overflow:"hidden", borderRadius: "6px"}}/>
                        <br/>
                        <BlogAuthor firstName="Tony" lastName="Riddle" date="24 May 2021"/>
                        <br/>
                        <Paragraph content="Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India. The state capital, it’s home to Bihar Museum, a contemporary landmark exhibiting bronze sculptures and old coins from the region. Nearby, Indo-Saracenic–style Patna Museum displays a casket believed to contain the Buddha’s ashes. Close to the river, the Golghar is a domed colonial granary overlooking the city.Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India. The state capital, it’s home to Bihar Museum, a contemporary landmark exhibiting bronze sculptures and old coins from the region. Nearby, Indo-Saracenic–style Patna Museum displays a casket believed to contain the Buddha’s ashes. Close to the river, the Golghar is a domed colonial granary overlooking the city." />
                        <Paragraph content="Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India. The state capital, it’s home to Bihar Museum, a contemporary landmark exhibiting bronze sculptures and old coins from the region. Nearby, Indo-Saracenic–style Patna Museum displays a casket believed to contain the Buddha’s ashes. Close to the river, the Golghar is a domed colonial granary overlooking the city.Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India. The state capital, it’s home to Bihar Museum, a contemporary landmark exhibiting bronze sculptures and old coins from the region. Nearby, Indo-Saracenic–style Patna Museum displays a casket believed to contain the Buddha’s ashes. Close to the river, the Golghar is a domed colonial granary overlooking the city." />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
