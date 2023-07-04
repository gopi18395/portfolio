import React from 'react';
import './Qualification.css'
import { UilGraduationCap } from '@iconscout/react-unicons';
import { UilBriefcase } from '@iconscout/react-unicons';
import { UilCalendarAlt } from '@iconscout/react-unicons'

const Qualification = () => {

  const [active,setActive] = React.useState('work');


  return (
    <section className='qualification section'>
      <h2 className='section_title'>Qualification</h2>
      <span className='section_subtitle'>My personal journey</span>

      <div className='qualification_container container'>
        <div className='qualification_tabs'>
          <div  className={active==='education'?"qualification_button button_flex qualification_active":"qualification_button button_flex"}  onClick={()=>setActive("education")}>
            <UilGraduationCap className="qualification_icon" />
            Education
          </div>
          <div className={active==='work'?"qualification_button button_flex qualification_active":"qualification_button button_flex"} onClick={()=>setActive("work")}>
            <UilBriefcase className="qualification_icon" />
            Work
          </div>
        </div>

        <div className='qualification_sections'>
          <div className={active==='education'?"qualification_content qualification_active":"qualification_content"} data-content='' id='education'>
            <div className='qualification_data'>
              <div>
                <h3 className='qualificatin_title'>Computer Science Engineering</h3>
                <span className='qualification_subtitle'>MNM Jain Engineering College</span>
                <div className='qualification_calender'>
                  <UilCalendarAlt className='qualification_icon' />2012 -2016
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>
          </div>

          <div className={active==='work'?"qualification_content qualification_active":"qualification_content"} data-content='' id='work'>
            <div className='qualification_data'>
              <div>
                <h3 className='qualificatin_title'>Associate Software Engineer</h3>
                <span className='qualification_subtitle'>Prodapt solutions</span>
                <div className='qualification_calender'>
                  <UilCalendarAlt className='qualification_icon' />2016 -2018
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>


            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>

              <div>
                <h3 className='qualificatin_title'>Senior Software Engineer</h3>
                <span className='qualification_subtitle'>Prodapt solutions</span>
                <div className='qualification_calender'>
                  <UilCalendarAlt className='qualification_icon' />2018 -2020
                </div>
              </div>
            </div>

            <div className='qualification_data'>


              <div>
                <h3 className='qualificatin_title'>Senior Developer</h3>
                <span className='qualification_subtitle'>Hubino</span>
                <div className='qualification_calender'>
                  <UilCalendarAlt className='qualification_icon' />2020 -2023
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                {/* <span className='qualification_line'></span> */}
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>

  )
}

export default Qualification