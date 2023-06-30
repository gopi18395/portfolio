import React from 'react'
import './About.css';
import gopiImage from '../../assets/img/gopi_image1.png';
import resume from '../../assets/pdf/Resume-Gopi.pdf';
import { UilDownloadAlt } from '@iconscout/react-unicons'

const About = () => {
    return (
        <section className='about section' id='about'>
            <h2 className='section_title'>About Me</h2>
            <span className='section_subtitle'>My introduction</span>

            <div className='about_container container grid'>
                <img src={gopiImage} alt='gopi' className='about_img' />
                <div className='about_data'>
                    <p className='about_description'>
                        7+ years experienced React Developer with hands-on experience in identifying web-based user interactions along with designing & implementing highly responsive user interface components by deploying React concepts.
                        Proficient in translating designs & wireframes into high-qualiy code, and writing applications interface code via Javascript and ReactJs workflows. Adept at monitoring & maintaining frontend performace and trouble shooting & debugging the same to bolster over all performace.
                    </p>

                    <div className='about_info'>
                        <div>
                            <span className='about_info_title'>07+</span>
                            <span className='about_info_name'>Years <br />experience</span>
                        </div>
                        <div>
                            <span className='about_info_title'>5+</span>
                            <span className='about_info_name'>Completed <br />project</span>
                        </div>
                        <div>
                            <span className='about_info_title'>02</span>
                            <span className='about_info_name'>Companies <br />worked</span>
                        </div>
                    </div>
                    <div className='about_buttons'>
                        <a href={resume} download className='button button-flex'>
                            Download CV <UilDownloadAlt />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About