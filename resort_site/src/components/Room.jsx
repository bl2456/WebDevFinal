import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Room = ({room}) => {
    //this component takes in information about a specific room
    const {name, images, price, variable} = room;
    return (
        <div className="room-card">
            <div className="img-container">
                <img src={images[0]} alt="room pictures"/>
                <div className="price-tag">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link 
                    to={`/rooms/${variable}`}
                    className='room-link'>
                        <Button className='my-btn' variant="light" size="lg">View</Button>
                </Link>
            </div>
    <p className="room-title">{name}</p>
        </div>
    )
}

export default Room;