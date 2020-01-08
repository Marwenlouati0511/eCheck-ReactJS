import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Address from 'material-ui/svg-icons/action/store';
import Email from 'material-ui/svg-icons/communication/email';
import Departement from 'material-ui/svg-icons/social/location-city';
import Code from 'material-ui/svg-icons/editor/format-list-numbered';
import Person from 'material-ui/svg-icons/action/perm-identity';
import { white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import {connect} from 'react-redux';

const styles = {
  subheader: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    backgroundColor: '#42D9E9',
    color: white
  }
};




class RecentlyProducts extends React.Component  {
  render(){

  return (
    <Paper>
      <List>
        <Subheader style={styles.subheader}>Employee Info</Subheader>
        {this.props.employeeList.map(Id=>
          <div key={Id.Name}>
          <ListItem
              leftAvatar={<Avatar icon={<Person />} />}
              primaryText={Id.Name}
              disabled={true}
            />
          <ListItem
              leftAvatar={<Avatar icon={<Address />} />}
              primaryText={Id.Address}
              disabled={true}
            />
          <ListItem
              leftAvatar={<Avatar icon={<Email />} />}
              primaryText={Id.Email}
              disabled={true}
            />
          <ListItem
              leftAvatar={<Avatar icon={<Departement />} />}
              primaryText={Id.DepartementId}
              disabled={true}
            />
          <ListItem
              leftAvatar={<Avatar icon={<Code />} />}
              primaryText={Id.RegistrationCode}
              disabled={true}
            />
          </div>
        )}
      </List>
    </Paper>
  );
}}
const mapStateToProps = state => {
	return {
    
    employeeList: state.GetEmploye.employeeList
	};
};

export default connect(mapStateToProps) (RecentlyProducts);
