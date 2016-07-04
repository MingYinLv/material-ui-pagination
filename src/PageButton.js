import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FlatButton} from 'material-ui';

export default class PageButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {style,pageClick,pageNo} = this.props;
        return <FlatButton style={style} label={pageNo} onClick={()=>{pageClick(pageNo)}}/>;
    }

}
