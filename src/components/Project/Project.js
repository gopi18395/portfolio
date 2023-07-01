import React from 'react';
import './Project.css';
import { UilMessage } from '@iconscout/react-unicons';

const Project = () => {
  return (
    <section className='project section'>
        <div className='project_bg'>
            <div className='project_container container grid'>
                <div className='project_data'>
                    <h2 className='project_title'>You have a new project</h2>
                    <p className='project_description'>Contact me now and get a 30% discount on your project</p>
                    <a href='#contact' className='button button_flex button_white'>
                        Contact me <UilMessage/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project