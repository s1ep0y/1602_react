import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import ProductListItem from './ProductListItem';

const Home = (props) => {

    return (
    <div className="wrapper">
        body
    </div>
    );
};

const actionCreators = {
};

const mapStateToProps = ({}) => {
  return {}
};

export default connect(mapStateToProps, actionCreators)(Home);
