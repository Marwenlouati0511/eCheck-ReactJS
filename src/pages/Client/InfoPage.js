import React from 'react';
import Paper from 'material-ui/Paper';
import PageBase from '../../components/PageBase';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import GlobalStyles from '../../styles';
import {connect } from 'react-redux';
import {indigo500} from 'material-ui/styles/colors';
//Icons:
import Address from 'material-ui/svg-icons/maps/place';
import Email from 'material-ui/svg-icons/communication/email';
import Departement from 'material-ui/svg-icons/social/location-city';
import Code from 'material-ui/svg-icons/editor/format-list-numbered';
import Person from 'material-ui/svg-icons/action/perm-identity';
import MobileTearSheet from '../../components/MobileTearSheet';
import Divider from 'material-ui/Divider';
// QRCode
import QRCode from 'qrcode.react';


    
    class InfoPage extends React.Component{ 
       
        


        render(){
          
           
            return (
                <PageBase>
                    <Paper>
                        <span style={GlobalStyles.title}>Employee Info</span>
                        <div style={GlobalStyles.clear}/>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <div style={styles.legend}>
                                <div style={styles.legend}>
                                    <List>
                                        <ListItem
                                            leftIcon={< Person color={indigo500} />}
                                            primaryText="Employee Name"
                                            secondaryText={this.props.employee.Name}
                                            disabled={true}/>
                                        <ListItem
                                            leftIcon={< Address color={indigo500} />}
                                            primaryText="Address"
                                            secondaryText={this.props.employee.Address}
                                            disabled={true}/>
                                        <ListItem
                                            leftIcon={< Email color={indigo500} />}
                                            primaryText="Email"
                                            secondaryText={this.props.employee.Email}
                                            disabled={true}
                                                    />
                                        <ListItem
                                            leftIcon={< Code color={indigo500} />}
                                            primaryText="Registration Code"
                                            secondaryText={this.props.employee.RegistrationCode}
                                            disabled={true}/>
                                        <ListItem
                                            leftIcon={< Departement color={indigo500} />}
                                            primaryText="Departement Id"
                                            secondaryText={this.props.employee.DepartementId}
                                            disabled={true}/>
                                    </List>
                                </div>
                            </div>
                        </div>
                               <MobileTearSheet>
                                    <List style={styles.list}>
                                        <ListItem 
                                        primaryText={this.props.username} 
                                        disabled={true}/>
                                        <ListItem 
                                        primaryText={this.props.employee.Name} 
                                        disabled={true}/>
                                    </List>
                                        <Divider inset={true} />
                                            <div style={{textAlign:'center'}} >
                                                <QRCode style={{height:150,width:150}} 
                                                    value={this.props.employee.hashcode} 
                                                    fgColor= {'#000000'}
                                                    bgColor= {'#ffffff'}/>
                                        </div> 
                               </MobileTearSheet>
                            </div>
                        
                            </Paper> 
                </PageBase>
    );}}

const styles = {
    list: {
        textAlign:'center', 
        lineheight:24, 
        fontSize:18, 
        paddingLeft:2,
        paddingRight:2,
    },
    paper: {
        minHeight: 344,
        padding: 40,
        overflow: 'auto',
    },
    legend: {
      paddingTop: 20,
    },
  };


const mapStateToProps = (state) => {
	return {
    employee: state.details.employee,
    username: state.auth.username,
	};
};

export default connect(mapStateToProps)(InfoPage);