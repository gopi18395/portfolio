import React from 'react';
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilDribbble } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';
import { UilMouseAlt } from '@iconscout/react-unicons';
import { UilArrowDown } from '@iconscout/react-unicons';
import backgroundBlob from "../../assets/img/backgroundBlob.png";
import gopiImage from "../../assets/img/gopi_image2.png";
import './Home.css';
const Home = () => {
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
                                <img src={backgroundBlob} alt="bg" />
                            </div>
                            <div className="home_blob_img">
                                <img src={gopiImage} alt="gopi" />
                            </div>
                            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                            <div
                                className="blur"
                                style={{
                                    background: "#C1F5FF",
                                    top: "11rem",
                                    width: "21rem",
                                    height: "11rem",
                                    left: "-9rem",
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className='home_data'>
                        <h1 className='home_title'>Hy! I Am</h1>
                        <h3 className='home_subtitle'>Gopinath</h3>.
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