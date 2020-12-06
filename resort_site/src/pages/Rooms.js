import React from 'react';
import HeroSection from '../components/HeroSection';
import HeroContent from '../components/HeroContent';
import Button from 'react-bootstrap/Button';
import RoomSearch from '../components/RoomSearch';

const Rooms = () => {
    return (
        <>
            <HeroSection hero='rooms-hero'>
                <HeroContent 
                title="Room Selection"
                subtext="Use our filters to find your pick">
                    <Button className='my-btn'href='/'variant="light" size="lg">
                        Return Home
                    </Button>
                </HeroContent>
            </HeroSection>
            <RoomSearch />
        </>
    )
}


export default Rooms;