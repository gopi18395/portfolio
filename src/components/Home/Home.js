import React, { useContext } from "react";
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilDribbble } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';
import { UilMouseAlt } from '@iconscout/react-unicons';
import { UilArrowDown } from '@iconscout/react-unicons';
import backgroundBlob from "../../assets/img/Regular_blob.png";
import gopiImage from "../../assets/img/gopi_image2.png";
import { themeContext } from "../../context/index";
import './Home.css';

const Home = () => {

    const theme = useContext(themeContext);

    const darkMode = theme.state.darkMode;


    return (
        <section className="home section" id="home">
            <div className='home_container container grid'>
                <div className='home_content grid'>
                    <div className='home_social'>
                        <a href='https://www.linkedin.com/' target='_blank' rel="noreferrer" className='home_social_icon'>
                            <UilLinkedinAlt />
                        </a>
                        <a href='https://dribble.com/' target='_blank' rel="noreferrer" className='home_social_icon'>
                            <UilDribbble />
                        </a>
                        <a href='https://github.com/' target='_blank' rel="noreferrer" className='home_social_icon'>
                            <UilGithub />
                        </a>
                    </div>
                    <div className='home_img'>
                        <div className="home_blob_container">
                            <div className='home_blob_box'>
                                {/* <img src={backgroundBlob} alt="bg" /> */}
                                <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" >
                                    <path fill={darkMode?"hsl(19, 68%, 44%)":"hsl(340, 80%, 60%)"} d="M301,339Q126,438,127,242Q128,46,302,143Q476,240,301,339Z" />
                                </svg>
                            </div>
                            <div className="home_blob_img">
                                <img src={gopiImage} alt="gopi" />
                            </div>
                            <div className="blur" style={darkMode ? { background: "rgb(170 123 85 / 87%)" } : { background: "rgb(238 210 255)" }}></div>
                            <div
                                className="blur"
                                style={darkMode ? {
                                    background: "rgb(255 228 193 / 30%)",
                                    top: "11rem",
                                    width: "21rem",
                                    height: "11rem",
                                    left: "-9rem"
                                } : {
                                    background: "#C1F5FF",
                                    top: "11rem",
                                    width: "21rem",
                                    height: "11rem",
                                    left: "-9rem"
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className='home_data'>
                        <h1 className='home_title'>Hy! I Am</h1>
                        <h3 className='home_subtitle'>Gopinath</h3>
                        <p className='home_description'>React Developer with high level of experience in web design and development, producting the Quality work</p>
                        <span className='button button_flex'>
                            Contact Me<UilMessage className='button_icon' />
                        </span>
                    </div>
                </div>
                <div className='home_scroll'>
                    <a href='#about' className='home_scroll_button button_flex'>
                        <UilMouseAlt className='home_scroll_mouse' />
                        <span className='home_scroll_name'>Scroll down</span>
                        <UilArrowDown className='home_scroll_arrow' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home