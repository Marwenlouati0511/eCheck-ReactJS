import React from 'react';
import {connect} from 'react-redux';
import PageBase from '../../components/PageBase';
//import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import globalStyles from '../../styles';
import {white} from 'material-ui/styles/colors';
import {getAllEmployee,getEmployeId,employeReport} from '../../action/getAllEmployee';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

class StaticPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Id:"",
            showCheckboxes: false,
            showTable:false,
            Name:""
        };
      }
      componentDidMount(){
        const user = localStorage.getItem('user')
        this.props.getAllEmployee(user);
      } 
      
    _handleSelect(event, index, Id)  {
        this.setState({Id});

        this.setState({showTable:false});
    }
    employeReport (){
        this.props.employeReport(this.state.Id);
        this.setState({showTable:true})
    }
    renderTable (){
        return(
            
        <Table >
            <TableHeader 
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}>
                 <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Report" style={{fontWeight: 'bold',textAlign: 'left',fontSize:25}}>
                Report
              </TableHeaderColumn>
            </TableRow>
                <TableRow displayBorder={true} >
                <TableHeaderColumn style={{fontSize:16}} >Date</TableHeaderColumn>
                <TableHeaderColumn style={{ fontSize:16}}>Punch In</TableHeaderColumn>
                <TableHeaderColumn style={{fontSize:16}}>Punch Out</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                    <TableBody 
                        displayRowCheckbox={this.state.showCheckboxes}
                        stripedRows={true}>
                    
                    {this.props.Activity.map(activity=>
                        <TableRow key={activity.Id} selected={false}>
                        <TableRowColumn style={{fontSize:16}}>{activity.Date}</TableRowColumn>
                        <TableRowColumn style={{fontSize:16}} >{activity.HourIN}</TableRowColumn>
                        <TableRowColumn style={{fontSize:16}}>{activity.HourOut}</TableRowColumn>
                    </TableRow>
                )}
                </TableBody>
            </Table>
            )
    }
    
    render(){
        return(
            <div>
                <h3 style={globalStyles.navigation}>Application / Reports</h3> 
                <PageBase title="Reports">
                    <div> 
                   < SelectField
                        floatingLabelText="-Please Select"
                        value={this.state.Id}
                        onChange={this._handleSelect.bind(this)}>
                        {this.props.employeeList.map(employe=>
                            <MenuItem key={employe.Id} value={employe.Id} primaryText={employe.Name} />)}
                    </SelectField>
                    <RaisedButton label="Run Report"
                        style={styles.Btn}
                        secondary={true}
                        onClick={()=>this.employeReport()}/>
                            
                           {this.props.reporting ? <CircularProgress style={styles.loginBtn} color={'#FE4181'}/>
                           :
                               this.state.showTable ? this.renderTable():null} 
                    </div>
                </PageBase>
            </div>
        )

    }
}

const styles={
    paper: {
        padding: 20,
        overflow: 'auto',
        borderRadius: 30,
        zDepth:3
        },
    editButton: {
        fill: white,
           
          },
        Btn: {
            float:'right',
            margin: 30,},
    };
const mapStateToProps = state => {
    return {
        user: state.auth.user,
        employeeList: state.GetEmploye.employeeList,
        Activity:state.report.Activity,
        reporting:state.report.reporting
    };
};
export default connect(mapStateToProps,{getAllEmployee,getEmployeId,employeReport})(StaticPage);