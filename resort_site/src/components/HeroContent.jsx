import React from 'react'


const HeroContent = ({children, title, subtext}) => {
    return (
        <div className='hero-content'>
            <h1 className='hero-title'>{title}</h1>
            <div className='line'></div>
            <p className='hero-subtext'>{subtext}</p>
            {children}
        </div>
    )
}

export default HeroContent;