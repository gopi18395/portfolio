import React from 'react';
import './Project.css';
import { UilMessage } from '@iconscout/react-unicons';
import gopiImg from '../../assets/img/gopi_image2.png'

const Project = () => {
    return (
        <section className='project'>
            <div className='project_bg'>
                <div className='project_container container grid'>
                    <div className='project_data'>
                        <h2 className='project_title'>You have a new project</h2>
                        {/* <p className='project_description'>Contact me now and get a 30% discount on your project</p> */}
                        <a href='#contact' className='button button_flex button_white'>
                            Contact Me  <UilMessage />
                        </a>
                    </div>
                    <img src={gopiImg} alt="" className='project_img' />
                </div>
            </div>
        </section>
    )
}

export default Project