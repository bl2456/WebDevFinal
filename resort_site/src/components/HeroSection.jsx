import React from 'react'

const HeroSection = ({hero, children}) => {
    return (
        <header className={`hero-section ${hero}`}>
            {children}
        </header>
    )
}

// .default props will use the following as defaults should nothing be passed into this component
HeroSection.defaultProps = {
    hero: "default-hero"
}
export default HeroSection;
