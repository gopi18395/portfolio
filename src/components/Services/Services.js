import React from 'react'
import './Services.css';
import { UilWebGrid } from '@iconscout/react-unicons';
import { UilArrowRight } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { UilCheckCircle } from '@iconscout/react-unicons';
import { UilArrow } from '@iconscout/react-unicons'

const Services = () => {

    const [active, setActive] = React.useState('');

    return (
        <section className='services section' id='services'>
            <h2 className='section_title'>Services</h2>
            <span className='section_subtitle'>What i offer</span>

            <div className='services_container container grid'>
                <div className='services_content'>
                    <div>
                        <UilWebGrid className='services_icon' />
                        <h3 className='services_title'>Ui/Ux <br /> Designer</h3>
                    </div>
                    <span className='button button_flex button_small button_link services_button' onClick={() => setActive("UX")}>
                        View More
                        <UilArrowRight className='button_icon' />
                    </span>

                    <div className={`services_modal ${active === "UX" ? "active_modal" : ""}`}>
                        <div className='services_modal_content'>
                            <h4 className='services_modal_title'>Ui/Ux <br /> Designer</h4>
                            <UilTimes className='services_modal_close' onClick={() => setActive("")} />
                            <ul className='services_modal_services grid'>
                                <li className='services_modal_service'>
                                    <UilCheckCircle className='services_modal_icon' />
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className='services_modal_service'>
                                    <UilCheckCircle className='services_modal_icon' />
                                    <p>Web page development.</p>
                                </li>

                                <li className='services_modal_service'>
                                    <UilCheckCircle className='services_modal_icon' />
                                    <p>I create ux element interactions.</p>
                                </li>

                                <li className='services_modal_service'>
                                    <UilCheckCircle className='services_modal_icon' />
                                    <p>I position your company brand</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services_content'>
                    <div>
                        <UilArrow className='services_icon' />
                        <h3 className='services_title'>Frontend <br /> Developer</h3>
                    </div>
                    <span className='button button_flex button_small button_link services_button' onClick={() => setActive("developer")}>
                        View More
                        <UilArrowRight className='button_icon' />
                    </span>

                    <div className={`services_modal ${active === "developer" ? "active_modal" : ""}`}>
                        <div className='services_modal_content'>
                            <h4 className='services_modal_title'>Frontend <br /> Developer</h4>
                            <UilTimes className='services_modal_close' onClick={() => setActive("")} />
                            <ul className='services_modal_services grid'>
                                <li className='services_modal_service'>
                                    <UilCheckCircle className='services_modal_icon' />
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className='services_modal_service'>
                                    <UilCheckCircle className='services_modal_icon' />
                                    <p>Web page development.</p>
                                </li>

                                <li className='services_modal_service'>
                                    <UilCheckCircle className='services_modal_icon' />
                                    <p>I create ux element interactions.</p>
                                </li>

                                <li className='services_modal_service'>
                                    <UilCheckCircle className='services_modal_icon' />
                                    <p>I position your company brand</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Services