import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

const Header = () => {
  const history = useHistory();

  const toHome = () => {
    history.push('/');
  };

  return (
      <div>header</div>
  )
};

const mapStateToProps = ({ }) => {
  
  return {
    
  };
};

const actionsToProps = {
};



export default connect(mapStateToProps, actionsToProps)(Header);
