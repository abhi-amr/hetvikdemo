import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import BlogTitle from '../../components/Blog/BlogTitle';
import SubHeading from '../../components/Blog/SubHeading';
import Paragraph from '../../components/Blog/Paragraph';
import BlogAuthor from '../../components/Blog/BlogAuthor';
import Tag from '../../components/Blog/Tag';

export default function ActualBlog(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <br/>
                        <BlogTitle title="How to make most use of our website - Hetvik"/>
                        <SubHeading content="" />
                        <img src="https://images.unsplash.com/photo-1552152974-19b9caf99137" alt={props.title} width="100%" style={{maxHeight:"310px", overflow:"hidden", borderRadius: "6px"}}/>
                        <br/>
                        <BlogAuthor firstName="Hetvik" lastName="Team" date="18 May 2021"/>
                        <br/>
                        <Paragraph content="As the dates of <strong>Patna University</strong> exams are announced, the commotion among students begin. Students rush to toppers and seniors for their help. Some get both guidance and resources while some get either. It also happens that students are lost as to what and how to prepare for the exams. The third situation is most commonly seen with the first year students. As the first year students are less exposed to the preparation needed for the exams, they don't know where to start. But the second and third year students know how and what to prepare for the exams. They know that Patna University previous year papers and notes along with some guidance can help them score good marks in the university exams. And that is where we come in. " />
                        <Paragraph content="<a href='https://hetvik.in'>Hetvik</a> is a platform designed for the students by the students. We provide the ease to the commotion that students find themselves in after the exams dates are announced. We provide structured Patna University previous year papers with their respective course and subjects. We are also in touch with the students and professors of Patna University to provide notes on requested topics." />
                        <Paragraph content="When you land on our homepage of Hetvik, you can find the ‘Get Started’ button that directly takes you to the page where you can filter your request for Patna University previous year papers on the basis of Programme name, subject name and year. You can search for academic previous year papers and also papers for entrance too. This same page can also be accessed through navigation on the top of our website by clicking on ‘Questions’. There is also a ‘Quick Links’ section where you can find most requested papers which are a few clicks away. The question paper can be zoom in or zoom out when you are accessing our website via phones or mobiles. If somehow you can not find the papers that you want, which is very unlikely, you can always send a request for the paper by filling the request form. You can find the link for the same on the Question page itself or you can click on Contact from the navigation link. We will notify you when your requested paper will be uploaded. You can leave us feedback on how we can improve with your insightful suggestions. We are always listening." />
                        <span>Tagged with 
                            <Tag tag="education" />
                            <Tag tag="patna university" />
                            <Tag tag="trending" />
                            <Tag tag="featured" />
                        </span>
                    </Col>
                </Row>
            </Container>
            <br/><br/>
        </>
    )
}
