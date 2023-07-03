import React from 'react';
import { UilFacebookF } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilTwitterAlt } from '@iconscout/react-unicons';
import { UilArrowUp } from '@iconscout/react-unicons';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className='footer'>
                <div className='footer_bg'>
                    <div className='footer_container container grid'>
                        <div>
                            <h1 className='footer_title'>Gopi</h1>
                            <span className='footer_subtitle'>Frontend developer</span>
                        </div>
                        <ul className='footer_links'>
                            <li>
                                <a href='#services' className='footer_link'>Services</a>
                            </li>
                            <li>
                                <a href='#portfolio' className='footer_link'>Portfolio</a>
                            </li>
                            <li>
                                <a href='#contact' className='footer_link'>Contact</a>
                            </li>
                        </ul>

                        <div className='footer_socials'>
                            <a href='https://www.facebook.com/' target='_blank' rel="noreferrer" className='footer_social'>
                                <UilFacebookF />
                            </a>
                            <a href='https://www.instagram.com/' target='_blank' rel="noreferrer" className='footer_social'>
                                <UilInstagram />
                            </a>
                            <a href='https://www.twitter.com/' target='_blank' rel="noreferrer" className='footer_social'>
                                <UilTwitterAlt />
                            </a>
                        </div>
                    </div>

                    <p className='footer_copy'>Copyright &copy; {year} Gopinath-All right reserved</p>
                </div>

            </footer>
            <a href="# " className='scrollup' id='scrool_up'>
                <UilArrowUp  className='scrollup_icon'/>
            </a>
        </>
    )
}

export default Footer