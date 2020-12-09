import React from 'react';
import HeroSection from '../components/HeroSection';
import HeroContent from '../components/HeroContent';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Button from 'react-bootstrap/Button';
import '../App.css';

const Home = () => {
    return (
        <>
            <HeroSection hero='default-hero'>
                <HeroContent 
                title="Welcome to Tokyo Night Resort!"
                subtext="Rooms as low as $80!">
                    <Link 
                    to='/rooms/'
                    className='links'>
                        <Button className='my-btn' href='/#/Rooms'variant="light" size="lg">
                            Browse Rooms
                        </Button>
                    </Link>
                </HeroContent>
            </HeroSection>
            <Services />
            <FeaturedRooms />
        </>
    )
}

export default Home;

