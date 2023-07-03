import React from 'react';
import './Contact.css';
import { UilPhone } from '@iconscout/react-unicons';
import { UilEnvelope } from '@iconscout/react-unicons';
import { UilMapMarker } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';

const Contact = () => {
    return (
        <section className='contact section' id='contact'>
            <h2 className='section_title'>Contact Me</h2>
            <span className='section_subtitle'>Get in touch</span>

            <div className='contact_container container grid'>
                <div>
                    <div className='contact_information'>
                        <UilPhone className='contact_icon' />
                        <div>
                            <h3 className='contact_title'>Call Me</h3>
                            <span className='contact_subtitle'>+91 893-9538-658</span>
                        </div>
                    </div>

                    <div className='contact_information'>
                        <UilEnvelope className='contact_icon' />
                        <div>
                            <h3 className='contact_title'>Email</h3>
                            <span className='contact_subtitle'>dgopi18395@gmail.com</span>
                        </div>
                    </div>
                    <div className='contact_information'>
                        <UilMapMarker className='contact_icon' />
                        <div>
                            <h3 className='contact_title'>Location</h3>
                            <span className='contact_subtitle'>TamilNadu - India</span>
                        </div>
                    </div>
                </div>
                <form action='' className='contact_form grid'>
                    <div className='contact_inputs grid'>
                        <div className='contact_content'>
                            <label htmlFor='' className='contact_label'>Name</label>
                            <input type='text' className='contact_input'></input>
                        </div>
                        <div className='contact_content'>
                            <label htmlFor='' className='contact_label'>Email</label>
                            <input type='email' className='contact_input'></input>
                        </div>
                    </div>
                    <div className='contact_content'>
                        <label htmlFor='' className='contact_label'>Project</label>
                        <input type='text' className='contact_input'></input>
                    </div>
                    <div className='contact_content'>
                        <label htmlFor='' className='contact_label'>Message</label>
                        <textarea name='' id='' cols='0' rows='7' className='contact_input'></textarea>
                    </div>

                    <div>
                        <a href='# ' className='button button_flex'>
                            Send Message <UilMessage className='button_icon' />
                        </a>
                    </div>
                </form>


            </div>
        </section>
    )
}

export default Contact