import React, {PropTypes} from 'react';
//import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/arrow-back';
import Out from 'material-ui/svg-icons/action/lock';
import {white} from 'material-ui/styles/colors';
import {logoutUser} from '../action/AuthAction';
import {connect} from 'react-redux';

class Header extends React.Component {
  _handleClick(){
    this.props.logoutUser();
  }
  render() {
    return (
        <div>
            <AppBar
              style={{...this.props.styles, ...style.appBar}}
              iconElementLeft={
                  <IconButton style={style.menuButton} onClick={this.props.handleChangeRequestNavDrawer}>
                    <Menu color={white} />
                  </IconButton>
              }
              iconElementRight={
                <IconButton style={style.menuButton} onClick={()=>this._handleClick()}>
                    <Out color={white} />
                  </IconButton>
              }
            />
          </div>
      );
  }
}

const style = {
  appBar: {
    position: 'fixed',
    top: 0,
    overflow: 'hidden',
    maxHeight: 57
  },
  menuButton: {
    marginLeft: 10
  },
  iconsRightContainer: {
    marginLeft: 20
  }
};

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func,
  logoutUser: PropTypes.func
};

const mapStateToProps = state => {
	return {
    error: state.auth.error,
    loggingOut: state.auth.loggingOut,
	};
};

export default connect(mapStateToProps,{logoutUser})(Header);