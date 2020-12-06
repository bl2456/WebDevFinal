import styled from 'styled-components';

const StyledHero = styled.header`
    min-height: 70vh;
    background: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default StyledHero;