import React from 'react';
import HeroSection from '../components/HeroSection';
import HeroContent from '../components/HeroContent';
import Button from 'react-bootstrap/Button';
import RoomSearch from '../components/RoomSearch';
import {Link} from 'react-router-dom';

const Rooms = () => {
    return (
        <>
            <HeroSection hero='rooms-hero'>
                <HeroContent 
                title="Room Selection"
                subtext="Use our filters to find your pick">
                    <Link 
                    to='/'
                    className='links'>
                        <Button className='my-btn'variant="light" size="lg">
                            Return Home
                        </Button>
                    </Link>
                </HeroContent>
            </HeroSection>
            <RoomSearch />
        </>
    )
}


export default Rooms;