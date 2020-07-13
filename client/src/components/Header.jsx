import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import logo from './../img/icons/1602logo.svg'

const Header = () => {
  const history = useHistory();

  const toHome = () => {
    history.push('/');
  };

  return (
      <header className="page-header">
        <div className="page-header__wrapper">
          <img alt="logo" src={logo} className="page-header__logo"/>
          <a className="page-header__link" href="#">Наши футболки</a>
          <a className="page-header__link" href="#">О нас</a>
          <a className="page-header__link" href="#">Акции</a>
        </div>
        <div className="page-header__wrapper">
          <div className="social-links">
            <a href="#" className="social-links__icon social-links__icon--vk"></a>
            <a href="#" className="social-links__icon social-links__icon--telegram"></a>
            <a href="#" className="social-links__icon social-links__icon--instagram"></a>
          </div>
          <button className="cart-button" /> 
        </div>
        
      </header>
  )
};

const mapStateToProps = ({ }) => {
  
  return {
    
  };
};

const actionsToProps = {
};



export default connect(mapStateToProps, actionsToProps)(Header);
