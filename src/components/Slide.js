import React from 'react';
import styled from 'styled-components'

const Slide = ({data}) => {
    return (
        <Wrapper color={data.color}>
            {data.color}
        </Wrapper>
    );
};

export default Slide;

const Wrapper = styled.div`
    height: 90%;
    padding: 25px;
    background: ${props => props.color};
    min-width: 100%;
    box-sizing: border-box;
    border: 100px solid darkgrey;  /* this is padding :) */
`
