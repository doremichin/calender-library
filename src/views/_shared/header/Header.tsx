import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Header () {
    return(
        <Container>
            <Logo>
                Logo
            </Logo>
            <Nav>
                <NavItem to={'/'}>Main</NavItem>
                <NavItem to={'/images'}>Images</NavItem>
            </Nav>
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow:  1px 1px 7px #ddd;
`;
const Logo = styled.div`
  
`;
const Nav = styled.div`
  height: 60px;
`;
const NavItem = styled(Link)`
  display: inline-block;
  padding: 10px;
`;

export default Header;
