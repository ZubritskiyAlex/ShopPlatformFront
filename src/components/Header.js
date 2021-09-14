import React from 'react'
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
        dispatch(logout)
    }


    return(
         <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                        <LinkContainer to='/'>
                                <Navbar.Brand>PlatformShop</Navbar.Brand>
                        </LinkContainer>

                        <LinkContainer to='/shops'>
                                <Navbar.Brand>SHOPS</Navbar.Brand>
                        </LinkContainer>

                        <LinkContainer to='/'>
                                <Navbar.Brand>PRODUCTS</Navbar.Brand>
                        </LinkContainer>

                        <LinkContainer to='/about'>
                                <Navbar.Brand>ABOUT</Navbar.Brand>
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

                            {userInfo && userInfo.isAdmin &&(
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to ='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to ='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to ='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </header>

    )


}

export default Header;