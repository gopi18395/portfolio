import React from 'react';
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilDribbble } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';
import { UilMouseAlt } from '@iconscout/react-unicons';
import { UilArrowDown } from '@iconscout/react-unicons';
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
                        <svg className='home_blob' viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            </mask>
                            <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                <image className='home_blob_img' x='12' y='18' href="../../assets/img/gopi_image2.png" />
                            </g>
                        </svg>
                    </div>
                    <div className='home_data'>
                        <h1 className='home_title'>Hy! I Am</h1>
                        <h3 className='home_subtitle'>Gopinath</h3>
                        <p className='home_description'>High level experience in web design and knowledge,
                            producing quality work.</p>
                        <a href='' className='button button_flex'>
                            Contact Me<UilMessage className='button_icon' />
                        </a>
                    </div>
                </div>
                <div className='home_scroll'>
                    <a href='#about' className='home_scroll_button button_flex'>
                        <UilMouseAlt className='home_scroll_mouse' />
                        <span className='home_scroll_name'>Scroll down</span>
                        <UilArrowDown className='home_scroll_arrow'/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home