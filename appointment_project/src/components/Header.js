import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
width: 100%;
height: 100px;
display: flex;
align-items: center;
padding: 0 2%;
background-color: var(--blue);
color: var(--white);
`;

function Header() {
    return (
        <HeaderContainer>
            <h1>:: MY PET :: Appointment System</h1>            
        </HeaderContainer>
    )
}

export default Header;
