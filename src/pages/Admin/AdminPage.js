import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../../components/Header';
import LeftDrawer from '.././../components/LeftDrawer';
import  {LARGE, SMALL} from 'material-ui/utils/withWidth';
import newTheme from '../../theme-admin';
import Data from '../../data';
import {connect} from 'react-redux';

class AdminPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: true,
      username:"administration"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
   
      <MuiThemeProvider muiTheme={newTheme}>
        <div>
          <Header styles={styles.header}
              handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

            <LeftDrawer navDrawerOpen={navDrawerOpen}
                menus={Data.new}
                username={this.state.username}/>

            <div style={styles.container}>
              {this.props.children}
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

AdminPage.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};
/*const mapStateToProps = (state) => {
	return {
    username: state.auth.username,
	};
};*/
export default  connect()(AdminPage);