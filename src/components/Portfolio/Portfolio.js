import React from 'react';
import './Portfolio.css'
import { UilArrowRight } from '@iconscout/react-unicons';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




import portfolioImg1 from '../../assets/img/portfolio1.jpg';
import portfolioImg2 from '../../assets/img/portfolio2.jpg';
import portfolioImg3 from '../../assets/img/portfolio3.jpg';

const Portfolio = () => {
    return (
        <section className='portfolio section' id='portfolio'>
            <h2 className='section_title'>Portfolio</h2>
            <span className='section_subtitle'>Most recent work</span>
            <div className='portfolio_container container'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}                   
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={portfolioImg1} alt='' className='portfolio_img' />
                        <div className='portfolio_data'>
                            <h3 className='portfolio_title'>
                                Modern Website
                            </h3>
                            <p className='portfolio_description'>Website adaptable to all devices, with and animated interactions.</p>
                            <a href='# ' className='button button_flex button_small portfolio_button'>
                                Demo
                                <UilArrowRight className='button_icon' />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  >
                        <img src={portfolioImg2} alt='' className='portfolio_img' />
                        <div className='portfolio_data'>
                            <h3 className='portfolio_title'>
                                Brand Design
                            </h3>
                            <p className='portfolio_description'>Website adaptable to all devices, with and animated interactions.</p>
                            <a href='# ' className='button button_flex button_small portfolio_button'>
                                Demo
                                <UilArrowRight className='button_icon' />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={portfolioImg3} alt='' className='portfolio_img' />
                        <div className='portfolio_data'>
                            <h3 className='portfolio_title'>
                                Online Services
                            </h3>
                            <p className='portfolio_description'>Website adaptable to all devices, with and animated interactions.</p>
                            <a href='# ' className='button button_flex button_small portfolio_button'>
                                Demo
                                <UilArrowRight className='button_icon' />
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Portfolio