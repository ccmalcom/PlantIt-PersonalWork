import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSeedling } from '@fortawesome/free-solid-svg-icons';
import GardenIndex from '../components/gardens/GardenIndex.js';

const H = styled.h1`
    color: white
`
const Nav = styled.nav`
list-style: none;
position: fixed;
z-index: 10;
display: flex;
justify-content: space-between;
width: 100vw;
height: 60px;
background-color: #0f0f0f;
padding: 0 8%;
`

const NavLinks = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    align-items: center
`

const LOButton = styled.button`
    color: rgb(65, 105, 65);
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
                <H><FontAwesomeIcon icon={faSeedling} color='rgb(65, 105, 65)'/>PlantIt</H>
                <NavLinks>
                    <li><Link to='/' style={{textDecoration: 'none', color: 'white'}}>Home</Link></li>
                    {localStorage.token ?
                    <li><Link to='/garden' style={{textDecoration: 'none', color: 'white'}}>MyGarden</Link></li>
                    : null}
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