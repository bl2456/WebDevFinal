import React from 'react'
import Room from "./Room";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const RoomList = ({rooms}) => {
    if (rooms.length === 0){
        return(
            <div className="empty-search">
                <h2>No rooms matched your search parameters</h2>
            </div>
        )
    }
    else{
        return (
            <div className="roomlist">
                <Container>
                    <Row>
                        {rooms.map(room => {
                            return (
                                <Col xs={12} sm={6} lg={4} key={room.item_id}>
                                    <Room room={room}/>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
        }
}

export default RoomList;