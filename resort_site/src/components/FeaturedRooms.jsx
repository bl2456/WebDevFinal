import React, { Component } from 'react';
import {RoomContext} from '../context';
import Title from './Title';
import Room from './Room';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    //getting room context from context.js
    render() {
        let {featured_rooms, loading} = this.context;
        //console.log(featured_rooms);
        return (
            <div className="featured-rooms">
                <Title title="Featured Rooms" />
                <Container>
                    <Row>

                        {featured_rooms.map(room => {
                            return (
                                <Col md={12} lg={4} key={room.item_id}>
                                    <Room room={room} />
                                </Col>
                            )
                        })}

                    </Row>
                </Container>
            </div>
        )
    }
}
