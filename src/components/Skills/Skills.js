import React from 'react'
import { UilBracketsCurly } from '@iconscout/react-unicons';
import { UilAngleDown } from '@iconscout/react-unicons';
import { UilServerNetwork } from '@iconscout/react-unicons';
import './Skills.css'
const Skills = () => {

    const [FEopen, setFEopen] = React.useState(true);
    const [BEopen, setBEopen] = React.useState(false);

    const expand = (e, data) => {
        e.preventDefault();
        if (data === "front") {
            setFEopen((prev) => !prev);
            setBEopen(false);
        } else {
            setBEopen((prev) => !prev);
            setFEopen(false);
        }
    }

    return (
        <section className='skills section' id='skills'>
            <h2 className='section_title'>
                Skills
            </h2>
            <span className='section_subtitle'>My Technical level</span>

            <div className='skills_container container grid'>
                <div>
                    <div className={FEopen ? 'skill_content skills_open' : 'skill_content skills_close'}>
                        <div className='skills_header'>
                            <UilBracketsCurly className='skills_icon' />
                            <div>
                                <h1 className='skills_titles'>Front end developer</h1>
                                <span className='skills_subtitle'>More than 7 years</span>
                            </div>
                            <UilAngleDown className='skills_arrow' onClick={(e) => expand(e, "front")} />
                        </div>
                        <div className='skills_list grid'>
                            <div className='skills_data'>
                                <div className='skills_titles'>
                                    <h3 className='skills_name'>HTML</h3>
                                    <span className='skills_number'>90%</span>
                                </div>
                                <div className='skills_bar'>
                                    <span className='skills_percentage skills_html'>
                                    </span>
                                </div>
                            </div>

                            <div className='skills_data'>
                                <div className='skills_titles'>
                                    <h3 className='skills_name'>CSS</h3>
                                    <span className='skills_number'>80%</span>
                                </div>
                                <div className='skills_bar'>
                                    <span className='skills_percentage skills_css'>
                                    </span>
                                </div>
                            </div>

                            <div className='skills_data'>
                                <div className='skills_titles'>
                                    <h3 className='skills_name'>Javascript</h3>
                                    <span className='skills_number'>85%</span>
                                </div>
                                <div className='skills_bar'>
                                    <span className='skills_percentage skills_js'>
                                    </span>
                                </div>
                            </div>
                            <div className='skills_data'>
                                <div className='skills_titles'>
                                    <h3 className='skills_name'>React</h3>
                                    <span className='skills_number'>90%</span>
                                </div>
                                <div className='skills_bar'>
                                    <span className='skills_percentage skills_react'>
                                    </span>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className={BEopen ? 'skill_content skills_open' : 'skill_content skills_close'}>
                        <div className='skills_header'>
                            <UilServerNetwork className='skills_icon' />
                            <div>
                                <h1 className='skills_titles'>Backend developer</h1>
                                <span className='skills_subtitle'>More than 1 years</span>
                            </div>
                            <UilAngleDown className='skills_arrow' onClick={(e) => expand(e, "back")} />
                        </div>
                        <div className='skills_list grid'>
                            <div className='skills_data'>
                                <div className='skills_titles'>
                                    <h3 className='skills_name'>Node Js</h3>
                                    <span className='skills_number'>70%</span>
                                </div>
                                <div className='skills_bar'>
                                    <span className='skills_percentage skills_node'>
                                    </span>
                                </div>
                            </div>
                            <div className='skills_data'>
                                <div className='skills_titles'>
                                    <h3 className='skills_name'>Firebase</h3>
                                    <span className='skills_number'>55%</span>
                                </div>
                                <div className='skills_bar'>
                                    <span className='skills_percentage skills_firebase'>
                                    </span>
                                </div>
                            </div>
                            <div className='skills_data'>
                                <div className='skills_titles'>
                                    <h3 className='skills_name'>MongoDB</h3>
                                    <span className='skills_number'>60%</span>
                                </div>
                                <div className='skills_bar'>
                                    <span className='skills_percentage skills_mongodb'>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills