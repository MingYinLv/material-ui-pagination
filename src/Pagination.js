import React from 'react';
import PrevPage from 'material-ui/svg-icons/navigation/chevron-left';
import NextPage from 'material-ui/svg-icons/navigation/chevron-right';
import FirstPage from 'material-ui/svg-icons/navigation/first-page';
import LastPage from 'material-ui/svg-icons/navigation/last-page';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PageButton from './PageButton';
import getPagination from './getPagination';
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
            buttonStyle: {minWidth: '36px'},
            activePage: 1,
            activePageStyle: {color: '#2196f3'},
            onSelect: null,
            ellipsis: false
        };
        this.state = Object.assign({}, defaultState, this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.setState(Object.assign({}, this.state, nextProps));
    }

    pageClick(index) {
        this.props.onSelect ? this.props.onSelect(index) : 0;
    }
    render() {
        const IconStyle = {
            verticalAlign: 'middle'
        };
        const style = this.state.buttonStyle;
        const {first,prev,next,last,activePage,activePageStyle,warpStyle,items,maxButton,ellipsis} = this.state;

        let {begin,end,leftEllipsis,rightEllipsis} = getPagination({
            activePage,
            items,
            maxButton,
            ellipsis
        });
        const itemPage = [];
        //第一页
        first ? itemPage.push(
            <FlatButton key='first' style={style} onClick={()=>{this.pageClick(1)}}>
                <FirstPage style={IconStyle}/>
            </FlatButton>
        ) : 0;
        //上一页
        let prevPage = activePage > 1 ? activePage - 1 : 1;
        prev ? itemPage.push(
            <FlatButton key='prev' style={style} onClick={()=>{this.pageClick(prevPage)}}>
                <PrevPage style={IconStyle}/>
            </FlatButton>
        ) : 0;
        if (leftEllipsis) {
            //itemPage.push(<FlatButton key={1} label='1' style={style} />);
            itemPage.push(<FlatButton onClick={()=>{this.pageClick(begin-1)}} key='leftEllipsis' label='...' style={style}/>);
        }
        for (let i = begin, max = end; i <= max; i++) {
            let _style = style;
            if (i === activePage) {
                _style = Object.assign({}, _style, activePageStyle);
            }
            itemPage.push(<PageButton style={_style} pageNo={i} key={i} pageClick={this.pageClick}/>);
        }
        if (rightEllipsis) {
            itemPage.push(<FlatButton onClick={()=>{this.pageClick(end+1)}} key='rightEllipsis' label='...' style={style}/>);
            //itemPage.push(<FlatButton key={items} label={items} style={style} />);
        }

        //下一页
        let nextPage = activePage < items ? activePage + 1 : items;
        next ? itemPage.push(
            <FlatButton key='next' style={style} onClick={()=>{this.pageClick(nextPage)}}>
                <NextPage style={IconStyle}/>
            </FlatButton>
        ) : 0;
        //最后一页
        last ? itemPage.push(
            <FlatButton key='last' style={style} onClick={()=>{this.pageClick(items)}}>
                <LastPage style={IconStyle}/>
            </FlatButton>
        ) : 0;


        return (
            <MuiThemeProvider>
                <div style={warpStyle}>
                    {itemPage}
                </div>
            </MuiThemeProvider>
        )
    }
}
