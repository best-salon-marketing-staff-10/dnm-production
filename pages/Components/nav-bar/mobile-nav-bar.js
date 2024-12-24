import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonFullListOfOurServices from '/pages/Components/buttons/button-full-list-of-our-services.js';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';


export default function MobileNavBar() {
    return <>
        <Head>

        </Head>

        <div className="nav-bar">
            <div className="nav-bar-menu">
                <Navbar expand={false} fixed="top" className="navbar navbar-dark bg-dark">
                    <Container fluid>
                        <LogoNav />
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                            <Offcanvas.Header closeButton className="custom-close-button">
                                <Offcanvas.Title id="offcanvasNavbarLabel">
                                    <Link legacyBehavior href="/">
                                        <LogoNav />
                                    </Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="offcanvas-body">
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <div className="nav-bar-main-category">
                                        <a className="nav-bar-link-main-menu">
                                            Revenue
                                        </a>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <a className="nav-bar-link-main-menu">
                                            Help
                                        </a>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <a className="nav-bar-link-main-menu">
                                            Shop
                                        </a>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <a className="nav-bar-link-main-menu">
                                            Buy Now
                                        </a>
                                    </div>
                                    <div className="nav-bar-main-category">
                                        <a className="nav-bar-link-main-menu">
                                            Sign In
                                        </a>
                                    </div>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </div>

        <style jsx>{`
            
        `}</style>
    </>;
}