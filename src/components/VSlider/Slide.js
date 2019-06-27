import React from 'react';
import styled from 'styled-components'

const Slide = props => {
    const { data, color } = props
    return (
        <Wrapper color={color}>
            Slide
        </Wrapper>
    );
};

export default Slide;


const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.color};
`