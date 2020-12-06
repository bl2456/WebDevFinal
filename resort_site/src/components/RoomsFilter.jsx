import React from 'react';
import {useContext} from "react";
import {RoomContext} from '../context';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Title from './Title';

const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    console.log(context);
    const {handleChange, type, capacity, price, size, minPrice, maxPrice, minSize, maxSize, breakfast, bathrooms, beds, pets} = context;

    const getOptions = (rooms, value) => {
        return [...new Set(rooms.map(room => room[value]))]
    };

    let types = getOptions(rooms, 'type');
    types = ["all", ...types];
    types = types.map((option, index) => {
        return(
            <option key={index} value={option}>{option}</option>
        )
    })

    let people = getOptions(rooms, 'capacity');
    people = people.map((option, index) => {
        return(
            <option key={index} value={option}>{option}</option>
        )
    })

    let bedOptions = getOptions(rooms, 'beds');
    bedOptions = bedOptions.map((option, index) => {
        return(
            <option key={index} value={option}>{option}</option>
        )
    })

    let bathroomOptions = getOptions(rooms, 'bathrooms');
    bathroomOptions = bathroomOptions.map((option, index) => {
        return(
            <option key={index} value={option}>{option}</option>
        )
    })

    //console.log(context);
    return (
        <div className="filter-container">
            <Title title="Browse our rooms"></Title>
            <Form>
                <Form.Row>
                    <Col sm={3}>
                        <Form.Group>
                            <Form.Label htmlFor="typeSelect">Room Type</Form.Label>
                            <Form.Control size="sm" as="select" id="typeSelect" name='type' value={type} onChange={handleChange}>
                                {types}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group>
                            <Form.Label htmlFor="peopleSelect">People</Form.Label>
                            <Form.Control size="sm" as="select" id="peopleSelect" name='capacity'value={capacity} onChange={handleChange}>
                                {people}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group>
                            <Form.Label htmlFor="bedSelect">Beds</Form.Label>
                            <Form.Control size="sm" as="select" id="bedSelect" name='beds'value={beds} onChange={handleChange}>
                                {bedOptions}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group>
                            <Form.Label htmlFor="bathroomSelect">Bathrooms</Form.Label>
                            <Form.Control size="sm" as="select" id="bathroomSelect" name='bathrooms' value={bathrooms} onChange={handleChange} >
                                {bathroomOptions}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <div className="form-group">
                            <label htmlFor="price">Room Price ${price}</label>
                            <input
                                type="range"
                                name="price"
                                min={minPrice}
                                max={maxPrice}
                                id="price"
                                value={price}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="form-group">
                            <label htmlFor="size">Room Size {size} sq.ft </label>
                                <input
                                    type="range"
                                    name="size"
                                    min={minSize}
                                    max={maxSize}
                                    id="size"
                                    value={size}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                        </div>
                    </Col>

                    <Col sm={3}>
                        <Form.Group>
                            <Form.Check type='checkbox' id='breakfastCheck' label='Breakfast Included' onChange={handleChange} name='breakfast'/>
                            <Form.Check type='checkbox' id='petsCheck' label='Pets Allowed' onChange={handleChange} name='pets'/>
                        </Form.Group>
                    </Col>

                </Form.Row>
            </Form>
        </div>
    )
}

export default RoomsFilter;