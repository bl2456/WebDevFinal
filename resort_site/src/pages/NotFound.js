import React from 'react';
import HeroSection from '../components/HeroSection';
import HeroContent from '../components/HeroContent';
import Button from 'react-bootstrap/Button';
const NotFound = () => {
    return (
        <HeroSection>
            <HeroContent 
            title="Page not found!"
            subtext="The page you are looking for isn't available.">
                <Button class='my-btn'href='/'variant="light" size="lg">
                    Return Home
                </Button>
            </HeroContent>
        </HeroSection>
    )
}

export default NotFound;
