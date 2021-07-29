import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import GardenIndex from '../components/gardens/GardenIndex.js';

const Div = styled.div `
    align-content: left;
`
const Nav = styled.nav`
list-style: none;
display: flex;
justify-content: space-between;
width: 100vw;
height: 60px;
background-color: #0f0f0f;
padding: 0 8%;
`

const Logo = styled.img`
height: 50px;
width: 200px;
`

const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    align-items: center
`

const LOButton = styled.button`
    color: #FF9F1C;
    background-color: transparent;
    border: none;
    width: auto;
    &:hover {
        color: #891A1C
    }
`


const Sitebar = (props) => {
    return(
        <div>
            <Nav>
                <h1>PlantIt!</h1>
                <NavLinks>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/garden'>MyGarden</Link></li>
                    <LOButton onClick={props.clearSession}><FontAwesomeIcon icon={faSignOutAlt} size='2x' /></LOButton>
                </NavLinks>
                {/* <Navbar className='sitebar'>
                    <Div>
                        <NavLink href="/" style={{color: 'white', textDecoration: 'none'}}>Home</NavLink>
                    </Div>
                    <Div>
                        <NavbarBrand href='/'>
                        </NavbarBrand>
                    </Div>
                </Navbar> */}
            </Nav>
            <Switch>
                <Route exact path='/'><Home updateToken={props.updateToken} token={props.token}/></Route>
                <Route exact path='/garden'><GardenIndex token={props.token}/></Route>
            </Switch>
        </div>    
    );
};

export default Sitebar;