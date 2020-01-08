import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';
import Person from 'material-ui/svg-icons/action/account-circle';

const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;
  return (
    <Drawer 
      docked={true}
      open={navDrawerOpen}>
        <div style={styles.logo}>
          CheckTime
        </div>
        <div style={styles.avatar.div}>
          <Avatar  icon={<Person />}
                  style={styles.avatar.icon}/>
          <span style={styles.avatar.span}>{props.username}</span>
         
        </div>
        <div>
          {props.menus.map((menu, index) =>
            <MenuItem
              key={index}
              style={styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              containerElement={<Link to={menu.link}/>}
            />
          )}
        </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};
const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 30,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: '#03BEC7',
    paddingLeft: 40,
    height: 56,
  },
  menuItem: {
    color: '#000000',
    fontSize: 18
  },
  avatar: {
    div: {
      padding: '15px 0 20px 15px',
      backgroundColor:'#03BEC7',
      height: 45,
    },
    icon: {
      float: 'left',
      display: 'block',
      marginRight: 15,
      boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
    },
    span: {
      paddingTop: 12,
      display: 'block',
      color: 'white',
      fontWeight: 500,
      textShadow: '1px 1px #444'
    }
  }
};


export default LeftDrawer;
