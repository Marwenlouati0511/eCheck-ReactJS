import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {updateToken} from '../../action/AuthAction';

export default function (ComposedComponent) {
  class Authentication extends Component {
    
    componentDidMount() {
      const user = localStorage.getItem('user')
      if ( user !== null) {
        this.props.updateToken(user);
        browserHistory.push("/");
      }else { browserHistory.push("/login")}
    }


    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  Authentication.propTypes = { loggingIn: PropTypes.bool };

  const mapStateToProps=(state) =>{
    return { 
      loggingIn: state.auth.loggingIn,
      token: state.auth.token,
     };};

  return connect(mapStateToProps,{updateToken})(Authentication);
}