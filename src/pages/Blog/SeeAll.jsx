import React from 'react';
import { Container } from 'react-bootstrap';
import StretchedTile from '../../components/Blog/StretchedTile';
import Heading from "../../components/Utilities/Heading";

function SeeAll(props) {
    return (
        <>
            <Container>
                <Heading content="Category name here"/>
                <br/>
                {/* <StretchedTile blog={props.blog}/> */}
                
            </Container>
        </>
    )
}

export default SeeAll