import React from 'react';
import PrevPage from 'material-ui/svg-icons/navigation/chevron-left';
import NextPage from 'material-ui/svg-icons/navigation/chevron-right';
import FirstPage from 'material-ui/svg-icons/navigation/first-page';
import LastPage from 'material-ui/svg-icons/navigation/last-page';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {FlatButton} from 'material-ui';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.pageClick = this.pageClick.bind(this);
        const {items,last,first} = props;
        this.state = {
            items: items ? items : 0,
            first: first ? first : false,
            last: last ? last : false
        };
    }

    componentWillReceiveProps(nextProps) {
        const {items,last,first} = nextProps;
        this.setState({
            items: items ? items : 0,
            first: first ? first : false,
            last: last ? last : false
        });
    }

    pageClick(index) {
        console.log(index);
    }

    render() {
        const style = {
            minWidth: '36px'
        };
        const IconStyle = {
            verticalAlign: 'middle'
        };
        const itemPage = [];
        for (let i = 1, max = this.props.items; i <= max; i++) {
            itemPage.push(<FlatButton style={style} label={i} key={i} onTouchTap={()=>{this.pageClick(i)}}/>);
        }
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
                <div>
                    <FlatButton style={style} onTouchTap={()=>{this.pageClick(1)}}>
                        <FirstPage style={IconStyle}/>
                    </FlatButton>
                    <FlatButton style={style}>
                        <PrevPage style={IconStyle}/>
                    </FlatButton>
                    {itemPage}
                    <FlatButton style={style}>
                        <NextPage style={IconStyle}/>
                    </FlatButton>
                    <FlatButton style={style}>
                        <LastPage style={IconStyle}/>
                    </FlatButton>
                </div>
            </MuiThemeProvider>
        )
    }
}
