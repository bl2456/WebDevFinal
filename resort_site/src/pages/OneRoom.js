import React, { Component } from 'react'
import HeroContent from '../components/HeroContent';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

export default class OneRoom extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state ={
            variable: this.props.match.params.RoomName,
        }
    }

    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const this_room = getRoom(this.state.variable);
        console.log(this_room)

        const {name, description, capacity, size, price, extras, breakfast, beds, bathrooms, pets, images} = this_room;

        return (
            <>
                <StyledHero img={images[0]}>
                    <HeroContent title={`${name} Room`}>
                        <Link to='/Rooms'>
                                <Button className='my-btn' variant="light" size="lg">Return to Rooms</Button>
                        </Link>
                    </HeroContent>
                </StyledHero>
                <Container>
                    <div className='carousel-container'>
                        <Carousel>
                            {images.map((image, index) => {
                                return(
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={image}
                                            alt={`${name} image ${index}`}
                                        />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                </Container>
                <Container className='room-container'>
                    <Row>
                        <Col sm={6}>
                            <div className="room-details">
                                <h3 className='room-section-header'>Description</h3>
                                <p className='room-description'>{description}</p>
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="room-info">
                                <h3 className='room-section-header'>Info</h3>
                                <h5>Price: ${price}</h5>
                                <h5>Size: {size} Squared Feet</h5>
                                <h5>Max Capacity: {(capacity > 1) ? `${capacity} People` : '1 Person'}</h5>
                                <h5>Beds: {beds}</h5>
                                <h5>Bathrooms: {bathrooms}</h5>
                                <h5>Pets: {pets ? "Allow" : "Not Allowed"}</h5>
                                <h5>Breakfast: {breakfast ? "Included" : "Not Included"}</h5>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="room-extras">
                                <h3 className='room-section-header'>Extras</h3>
                                <ul className="extras">
                                    <Container>
                                        <Row>
                                            {extras.map((item, index) => {
                                                return(
                                                    <Col md={4} sm={6}>
                                                        <li key={index}>{item}</li>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </Container>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
