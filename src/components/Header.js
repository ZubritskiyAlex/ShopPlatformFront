import React, {useState} from 'react'
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/userActions";


function Header(){

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
    }


    return(
         <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                        <LinkContainer to='/'>
                                <Navbar.Brand>PlatformShop</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link>Cart<ShoppingCartIcon/></Nav.Link>
                            </LinkContainer>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item onClick>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ): (
                                    <LinkContainer to='/login'>
                                <Nav.Link>&nbsp;Login<PersonIcon/></Nav.Link>
                            </LinkContainer>

                            )}




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )


}

export default Header;