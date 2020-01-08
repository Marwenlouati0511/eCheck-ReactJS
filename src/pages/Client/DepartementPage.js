import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import {pink500,blue300,white} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import Edit from 'material-ui/svg-icons/content/create';
import {getAllDepartement,DepartementDetails} from '../../action/GetAllDepartment';
import '../../popup.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {deleteDepartement} from '../../action/DeleteAction';
import CircularProgress from 'material-ui/CircularProgress';

class DepartementPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showCheckboxes: false,
      open:false,
    };
  }
  componentDidMount(){
    
    this.props.getAllDepartement(this.props.user);}
    
    handleOpen(departement){
      this.setState({open: true,idDepartement:departement});
          console.log('i am openn yeyy')
    }
    
    handleClose () {
      this.setState({open: false});
      console.log('i am colse yeyy')
    }
    renderAction(){
      return(
       <div> 
      <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose.bind(this)}
          />
          <FlatButton
          label="Sure"
          secondary={true}
          onClick={()=>{
            this.setState({open: false}); this.props.deleteDepartement(this.state.idDepartement,this.props.user);
          }}
        />
        </div>
          );
    }

  render(){
    console.log(this.props.departementList);
  return (
    <PageBase >
      <div>
        <Link to="/add-department" >
          <FloatingActionButton 
            style={styles.floatingActionButton} 
            mini={true}
            backgroundColor={pink500}>
              <ContentAdd /> 
            </FloatingActionButton>
        </Link>
        { this.props.loadingListDepartement ?
        <CircularProgress style={{justifyContent:'center',}} color={'#FE4181'}/>
        :
          <Table >
                <TableHeader 
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}>
                       <TableRow>
              <TableHeaderColumn colSpan="4" tooltip="Departements List" style={{color:"#03BEC7",textAlign: 'center',fontSize:25}}>
                Departements List
              </TableHeaderColumn>
            </TableRow>
                  <TableRow displayBorder={true} >
                    <TableHeaderColumn style={{fontSize:16}}>Name</TableHeaderColumn>
                    <TableHeaderColumn style={{fontSize:16}}>Description</TableHeaderColumn>
                    <TableHeaderColumn style={{fontSize:16}}>Edit</TableHeaderColumn>
                    <TableHeaderColumn style={{fontSize:16}}>Delete</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                  <TableBody 
                    displayRowCheckbox={this.state.showCheckboxes}
                    stripedRows={true}>
                    {this.props.departementList.map(departement=>
                      <TableRow key={departement.Id} selected={false}>
                        <TableHeaderColumn style={{fontSize:16}}>
                        {departement.Name}
                        </TableHeaderColumn>
                        <TableHeaderColumn style={{fontSize:16}}>{departement.Description}</TableHeaderColumn>
                        <TableRowColumn style={{fontSize:16}} >
                          <Link to="/edit-departement" onClick={()=>{this.props.DepartementDetails(departement)}} >
                            <FloatingActionButton 
                              zDepth={0}  
                              mini={true}
                              backgroundColor={blue300}
                              iconStyle={styles.editButton}
                              >
                                <Edit /> 
                            </FloatingActionButton>
                          </Link>
                        </TableRowColumn>
                        <TableRowColumn style={{fontSize:16}}>
                        <div> 
                            <FloatingActionButton 
                              zDepth={0}  
                              mini={true}
                              backgroundColor={blue300}
                              iconStyle={styles.editButton}
                              onClick={this.handleOpen.bind(this,departement.Id)}
                              >
                                <DeleteIcon /> 
                            </FloatingActionButton>
                            <Dialog
                              actions={this.renderAction()}
                              modal={false}
                              open={this.state.open}
                              onRequestClose={this.handleClose}
                            >
                              Are you sure you want to delete this Departmenet
                            </Dialog>
                      </div> 
                        </TableRowColumn>
                      </TableRow>
                    )}
                  </TableBody>
              </Table>}
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
    fill: white
  },
  columns: {
    id: {
      width: '10%',
      fontSize:19
    },
    name: {
      width: '20%',
      fontSize:19
    },
    description: {
      width: '30%',
      fontSize:19
    },
    entrepriseId: {
      width: '20%',
      fontSize:19
    },
    delete: {
      width: '10%',
      fontSize:19
    }
  }};

const mapStateToProps = state => {
	return {
    user: state.auth.user,
    departementList: state.GetDepartement.departementList,
    loadingListDepartement:state.GetDepartement.loadingListDepartement
	};
};
export default connect(mapStateToProps,{getAllDepartement,DepartementDetails,deleteDepartement})(DepartementPage);