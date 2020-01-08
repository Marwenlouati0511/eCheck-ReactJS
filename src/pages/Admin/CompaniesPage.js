import React from 'react';
//import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
//import ContentAdd from 'material-ui/svg-icons/content/add';
import {white } from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import {getAllCompanies} from '../../action/getCompanies';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { browserHistory } from 'react-router';

class CompaniesPage extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        showCheckboxes: false,
      };
    }
    componentDidMount(){
    this.props.getAllCompanies();
  }
 
    render(){
      console.log(this.props.companiesList)
      return (
        <PageBase title="Companies">
          <div>
            <FloatingActionButton 
                  style={styles.floatingActionButton} 
                  mini={true}
                  backgroundColor={"#546E7A"}
                  >
                  <ContentAdd /> 
                </FloatingActionButton>
            <Table >
              <TableHeader 
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}>
                <TableRow displayBorder={true} >
                  <TableHeaderColumn style={styles.columns.name}>Id</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.name}>Name</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.adress}>Address</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.email}>Phone</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.email}>Email</TableHeaderColumn>
                  <TableHeaderColumn style={styles.columns.delete}>Delete</TableHeaderColumn>
                </TableRow>
              </TableHeader>
                <TableBody 
                  displayRowCheckbox={this.state.showCheckboxes}
                  stripedRows={true}>
                  
                    {this.props.companiesList.map(company=>
                    <TableRow key={company.Id} selected={false}>
                    <TableHeaderColumn style={styles.columns.id}>{company.Id}</TableHeaderColumn>
                      <TableRowColumn style={styles.columns.name}>{company.CompanyName}</TableRowColumn>
                      <TableRowColumn style={styles.columns.adress}>{company.Address}</TableRowColumn>
                      <TableHeaderColumn style={styles.columns.number}>{company.Phonenumber}</TableHeaderColumn>
                      <TableRowColumn style={styles.columns.email}>{company.Email}</TableRowColumn>
                      <TableRowColumn style={styles.columns.delete}>
                        <FloatingActionButton 
                          zDepth={0}  
                          mini={true}
                          backgroundColor={"#546E7A"}
                          iconStyle={styles.editButton}
                         >
                         <Delete /> 
                        </FloatingActionButton>
                      </TableRowColumn>
                    </TableRow>)}
                  )}
                </TableBody>
            </Table>
          </div>
        </PageBase>
      );
}}

const styles = {
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  editButton: {
    fill: white,
   
  },
  columns: {
    id: {
      width: '10%',
      fontSize:19
    },
    number:{
      width: '15%',
      fontSize:19
    },
    name: {
      width: '20%',
      fontSize:19
    },
    email: {
      width: '30%',
      fontSize:19
    },
    adress: {
      width: '30%',
      fontSize:19
    },
    delete: {
      width: '10%',
      fontSize:19
    }
  },
};
const mapStateToProps = state => {
	return {
    companiesList: state.comp.companiesList,

	};
};
export default connect(mapStateToProps,{getAllCompanies})(CompaniesPage);