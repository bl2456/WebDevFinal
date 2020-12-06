import React from 'react';
import HeroSection from '../components/HeroSection';
import HeroContent from '../components/HeroContent';
import Button from 'react-bootstrap/Button';

const Rooms = () => {
    return (
        <HeroSection hero='rooms-hero'>
            <HeroContent 
            title="Room Selection"
            subtext="Use our filters to find your pick">
                <Button class='my-btn'href='/'variant="light" size="lg">
                    Return Home
                </Button>
            </HeroContent>
        </HeroSection>
    )
}


export default Rooms;