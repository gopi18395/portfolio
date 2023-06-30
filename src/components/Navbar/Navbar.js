import React from 'react';
import { UilEstate } from '@iconscout/react-unicons';
import { UilUser } from '@iconscout/react-unicons';
import { UilFileShieldAlt } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilScenery } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { UilApps } from '@iconscout/react-unicons';
import './Navbar.css';
const Navbar = () => {

    const [toggle, setToggle] = React.useState(false);

    return (
        <header className='header' id='header'>
            <nav className='nav container'>
                <a href='# ' className={toggle ? "nav_logo nav_btn_visibility" : "nav_logo"}>Gopi</a>
                <div id='nav_menu' className={toggle ? "nav_menu show_menu" : "nav_menu"}>
                    <ul className='nav_list grid'>
                        <li className='nav_item'>
                            <a href='#home' className='nav_link'>
                                <UilEstate className='nav_icon' />Home
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#about' className='nav_link'>
                                <UilUser className='nav_icon' />About
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#skills' className='nav_link'>
                                <UilFileShieldAlt className='nav_icon' />Skills
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#services' className='nav_link'>
                                <UilBriefcaseAlt className='nav_icon' />Services
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#portfolio' className='nav_link'>
                                <UilScenery className='nav_icon' />Portfolio
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#contact' className='nav_link'>
                                <UilMessage className='nav_icon' />Contact
                            </a>
                        </li>
                    </ul>
                    <UilTimes id="nav_close" className="nav_close" onClick={() => setToggle(false)} />
                </div>
                <div className={toggle ? "nav_btns nav_btn_visibility" : "nav_btns"}>
                    <div className='nav_toggle' id='nav_toggle' onClick={() => setToggle(true)}>
                        <UilApps />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar