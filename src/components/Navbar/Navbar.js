import React, { useContext } from "react";
import { UilEstate } from '@iconscout/react-unicons';
import { UilUser } from '@iconscout/react-unicons';
import { UilFileShieldAlt } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilScenery } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { UilApps } from '@iconscout/react-unicons';
import { UilSun } from '@iconscout/react-unicons';
import { UilMoon } from '@iconscout/react-unicons'
import './Navbar.css';
import { themeContext } from "../../context/index";
const Navbar = () => {

    const [toggle, setToggle] = React.useState(false);
    const [active, setActive] = React.useState('home');
    const theme = useContext(themeContext);

    const darkMode = theme.state.darkMode;
    const [navbar, setNavbar] = React.useState(false);

    const changeBG = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    window.addEventListener("scroll", changeBG);

    const handleClick = () => {
        theme.dispatch({ type: "toggle" });
    }

    React.useEffect(() => {
        document.documentElement.style.setProperty('--body-color', darkMode ? "#333" : "hsl(340, 60%, 99%)");
        document.documentElement.style.setProperty('--title-color', darkMode ? "#FFF" : "hsl(340, 8%, 15%)");
        document.documentElement.style.setProperty('--text-color', darkMode ? "hsl(340, 11%, 82%)" : "hsl(340, 8%, 45%)");
        document.documentElement.style.setProperty('--first-color', darkMode ? "hsl(19, 68%, 44%)" : "hsl(340, 80%, 60%)");
        document.documentElement.style.setProperty('--first-color-second', darkMode ? "hsl(19, 68%, 44%)" : "hsl(340, 69%, 61%)");

    }, [darkMode])
    return (
        <header className={`header ${navbar ? "scroll_header" : ""}`} id='header'>
            <nav className='nav container'>
                <a href='# ' className={toggle ? "nav_logo nav_btn_visibility" : "nav_logo"} onClick={() => setActive("")}>Gopi</a>
                <div id='nav_menu' className={toggle ? "nav_menu show_menu" : "nav_menu"}>
                    <ul className='nav_list grid'>
                        <li className='nav_item' onClick={() => setActive("home")}>
                            <a href='#home' className={`nav_link ${active === "home" ? "active_link" : ""}`}>
                                <UilEstate className='nav_icon' />Home
                            </a>
                        </li>
                        <li className='nav_item' onClick={() => setActive("about")}>
                            <a href='#about' className={`nav_link ${active === "about" ? "active_link" : ""}`}>
                                <UilUser className='nav_icon' />About
                            </a>
                        </li>
                        <li className='nav_item' onClick={() => setActive("skills")}>
                            <a href='#skills' className={`nav_link ${active === "skills" ? "active_link" : ""}`}>
                                <UilFileShieldAlt className='nav_icon' />Skills
                            </a>
                        </li>
                        <li className='nav_item' onClick={() => setActive("services")}>
                            <a href='#services' className={`nav_link ${active === "services" ? "active_link" : ""}`}>
                                <UilBriefcaseAlt className='nav_icon' />Services
                            </a>
                        </li>
                        <li className='nav_item' onClick={() => setActive("portfolio")}>
                            <a href='#portfolio' className={`nav_link ${active === "portfolio" ? "active_link" : ""}`}>
                                <UilScenery className='nav_icon' />Portfolio
                            </a>
                        </li>
                        <li className='nav_item' onClick={() => setActive("contact")}>
                            <a href='#contact' className={`nav_link ${active === "contact" ? "active_link" : ""}`}>
                                <UilMessage className='nav_icon' />Contact
                            </a>
                        </li>
                    </ul>
                    <UilTimes id="nav_close" className="nav_close" onClick={() => setToggle(false)} />
                </div>
                <div className={toggle ? "nav_btns nav_btn_visibility" : "nav_btns"}>
                    <div className="toggleScroll" onClick={handleClick} >
                        <UilSun />
                        <UilMoon />
                        <div
                            className={"t-buttonScroll"}
                            style={darkMode ? { left: "2px" } : { right: "2px" }}
                        ></div>
                    </div>
                    <div className='nav_toggle' id='nav_toggle' onClick={() => setToggle(true)}>
                        <UilApps />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar