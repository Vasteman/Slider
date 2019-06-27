import React from 'react';
import styled from 'styled-components'

const Page = ({children}) => {
    
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default Page;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: darkgrey;
`

