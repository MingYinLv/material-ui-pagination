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
        var defaultState = {
            items: 0,
            next: false,
            prev: false,
            first: false,
            last: false,
            warpStyle: {},
            maxButton: 5,
            buttonStyle: {minWidth: 'auto', width: '36px'},
            activePage: 1,
            activePageStyle: {color:'#2196f3'},
            onSelect: null,
            ellipsis: ''
        };
        this.state = Object.assign({}, defaultState, this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(Object.assign({}, this.state, nextProps));
    }

    pageClick(index) {
        this.setState({
            activePage : index
        });
        this.props.onSelect ? this.props.onSelect(index) : 0;
    }

    render() {
        const IconStyle = {
            verticalAlign: 'middle'
        };
        const style = this.state.buttonStyle;
        const {first,prev,next,last,activePage,activePageStyle} = this.state;
        const itemPage = [];

        first ? itemPage.push(
            <FlatButton key='first' style={style} onTouchTap={()=>{this.pageClick(1)}}>
                <FirstPage style={IconStyle}/>
            </FlatButton>
        ) : 0;
        prev ? itemPage.push(
            <FlatButton key='prev' style={style}>
                <PrevPage style={IconStyle}/>
            </FlatButton>
        ) : 0;
        for (let i = 1, max = this.state.items; i <= max; i++) {
            let _style = style;
            if(i===activePage){
                _style = Object.assign({},_style,activePageStyle);
            }
            itemPage.push(<FlatButton style={_style} label={i} key={i} onTouchTap={()=>{this.pageClick(i)}}/>);
        }

        next ? itemPage.push(
            <FlatButton key='next' style={style}>
                <NextPage style={IconStyle}/>
            </FlatButton>
        ):0;

        last ? itemPage.push(
            <FlatButton key='last' style={style}>
                <LastPage style={IconStyle}/>
            </FlatButton>
        ):0;


        return (
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
                <div>

                    {itemPage}


                </div>
            </MuiThemeProvider>
        )
    }
}
