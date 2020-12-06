import React, { Component } from 'react';
import Title from './Title';
import {FaBusAlt, FaAccessibleIcon, FaShuttleVan, FaCocktail, FaCoffee, FaHotTub} from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaAccessibleIcon />,
                title: "Accessibility",
                description: 'Our compound is fully accessible for customers with physical needs. Be sure to contact us prior to your checkin time.'
            },
            {
                icon: <FaBusAlt />,
                title: "Airport Pickup",
                description: 'Free transportation straight form Narita or Haneda Airport to the main lobby.'
            },
            {
                icon: <FaShuttleVan />,
                title: "City Tours",
                description: 'Set up a tour around the city with one of our many tour agency partners for an incredible discount.',
            },
            {
                icon: <FaCoffee />,
                title: "Breakfast",
                description: 'Free breakfast starting at 6am in the dinning hall. Continental and Japanese styles included.',
            },
            {
                icon: <FaHotTub />,
                title: "Onsen",
                description: 'A must-try in Japan. Relax in tradition Japanese Onsen. Male, Female, and Mixed sections provided.',
            },
            {
                icon: <FaCocktail />,
                title: "Lounge Bar",
                description: 'Enjoy a drink in our spacious lounge bar, is a truly enjoyable experience. ' +
                'There is a full range of bar drinks including a wide selection of spirits, Whisky, Brandy and Liqueurs, soft drinks and beer.',
            },
        ]
    }
    render() {
        //Used bootstrap Container, Row, and Col for grid display and responsiveness instead of creating my own grid container.
        return (
            <div className='services'>
                <Title title='Services'></Title>

                <Container>
                    <Row>

                        {this.state.services.map((item, index) => {
                            return(
                                <Col md={4} sm={6} key={index}>
                                    <div className='service'>
                                        <span className='service-icon'>{item.icon}</span>
                                        <h5 className='service-title'>{item.title}</h5>
                                        <p className='service-description'>{item.description}</p>
                                    </div>
                                </Col>
                            );
                        })}

                    </Row>
                </Container>

            </div>
        )
    }
}
