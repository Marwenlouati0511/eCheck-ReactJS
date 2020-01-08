import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.auth) {
        browserHistory.push("/account");
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.auth) {
        browserHistory.push("/account");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  NotAuthentication.propTypes = { auth: PropTypes.bool };

  const mapStateToProps=(state)=>{
    return { auth: state.auth.auth };
  };

  return connect(mapStateToProps)(NotAuthentication);}