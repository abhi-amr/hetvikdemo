import React, { Component } from 'react';
import {OverlayTrigger, Popover} from 'react-bootstrap';
export default class Attribution extends Component {
    render() {
        return (
            <div>
                <OverlayTrigger
                    trigger="hover"
                    key="top"
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                        <Popover id="">
                        <Popover.Title as="h3">Our Gratitude to them</Popover.Title>
                        <Popover.Content>
                        <span><strong>Online Vector Avatars Generator for Your Site</strong> <em>https://face.co/embed.html</em></span>
                        {/* <iframe sandbox="allow-scripts allow-forms allow-same-origin" src="https://face.co/embed.html" width="100%" height="auto" title="Online Vector Avatars Generator for Your Site" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes"></iframe> */}
                        {/* Photo by Tirachard Kumtanom from Pexels */}
                        </Popover.Content>
                        </Popover>
                    }
                    >
                    <p>Attribution</p>
                </OverlayTrigger>
            </div>
        )
    }
}
