import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonFullListOfOurServices from '/pages/Components/buttons/button-full-list-of-our-services.js';
import { NavDropdown } from 'react-bootstrap';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';


export default function TabletNavBar() {
    return <>
        <Head>

        </Head>
        <div className="nav-bar">
            <div className="nav-bar-left">
                <div className=''>
                    <LogoNav />
                </div>
                <div className="component">
                    <a href="" className="nd">Revenue</a>
                </div>
                <div className="component">
                    <a href="" className="nd">Help</a>
                </div>
                <div className="component">
                    <a href="" className="nd">Shop</a>
                </div>
                <div className="component-2">
                    <a href="" className="nd-2">Buy Now</a>
                </div>
            </div>
            <div className="nav-bar-right">
                <div className="component">
                    Sign In
                </div>
            </div>
        </div>

        <style jsx>{`
            
        `}</style>
    </>;
}