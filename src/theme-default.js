import getMuiTheme from 'material-ui/styles/getMuiTheme';


const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: '#03BEC7'
  },
  drawer: {
    width: 230
  },
  avatar:{
    backgroundColor:'#03BEC7'
  }
});

export default themeDefault;