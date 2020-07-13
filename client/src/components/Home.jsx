import React, {useState} from 'react';
import {uniqueId} from 'lodash';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import ProductListItem from './ProductListItem';
// свайпер
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const Slider = () => {
    return (
        <Swiper
        className="main-slider"
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
            <SwiperSlide className="main-slider__slide"><img src="https://dummyimage.com/600x400/000/00ff2" alt="" srcset=""/></SwiperSlide>
            <SwiperSlide className="main-slider__slide"><img src="https://dummyimage.com/600x400/000/ff22" alt="" srcset=""/></SwiperSlide>
            <SwiperSlide className="main-slider__slide"><img src="https://dummyimage.com/600x400/000/f1f3" alt="" srcset=""/></SwiperSlide>
        </Swiper>
    )
}

const Home = (props) => {

    return (<div className="wrapper">
        <Slider/>
    </div>);
};

const actionCreators = {};

const mapStateToProps = ({}) => {
    return {}
};

export default connect(mapStateToProps, actionCreators)(Home);
