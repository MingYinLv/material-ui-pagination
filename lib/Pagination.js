'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('G:\\project\\material-ui-pagination\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('G:\\project\\material-ui-pagination\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('G:\\project\\material-ui-pagination\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chevronLeft = require('material-ui/svg-icons/navigation/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _firstPage = require('material-ui/svg-icons/navigation/first-page');

var _firstPage2 = _interopRequireDefault(_firstPage);

var _lastPage = require('material-ui/svg-icons/navigation/last-page');

var _lastPage2 = _interopRequireDefault(_lastPage);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _lightBaseTheme = require('material-ui/styles/baseThemes/lightBaseTheme');

var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _PageButton = require('./PageButton');

var _PageButton2 = _interopRequireDefault(_PageButton);

var _getPagination2 = require('./getPagination');

var _getPagination3 = _interopRequireDefault(_getPagination2);

var _materialUi = require('material-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Pagination: {
        displayName: 'Pagination'
    }
};

var _GProjectMaterialUiPaginationNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'src/Pagination.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _GProjectMaterialUiPaginationNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'src/Pagination.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _GProjectMaterialUiPaginationNode_modulesReactTransformHmrLibIndexJs2(_GProjectMaterialUiPaginationNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Pagination = _wrapComponent('Pagination')(function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pagination).call(this, props));

        _this.pageClick = _this.pageClick.bind(_this);
        var defaultState = {
            items: 0,
            next: false,
            prev: false,
            first: false,
            last: false,
            warpStyle: {},
            maxButton: 5,
            buttonStyle: { minWidth: '36px' },
            activePage: 1,
            activePageStyle: { color: '#2196f3' },
            onSelect: null,
            ellipsis: false
        };
        _this.state = Object.assign({}, defaultState, _this.props);
        return _this;
    }

    _createClass(Pagination, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(Object.assign({}, this.state, nextProps));
        }
    }, {
        key: 'pageClick',
        value: function pageClick(index) {
            this.props.onSelect ? this.props.onSelect(index) : 0;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var IconStyle = {
                verticalAlign: 'middle'
            };
            var style = this.state.buttonStyle;
            var _state = this.state;
            var first = _state.first;
            var prev = _state.prev;
            var next = _state.next;
            var last = _state.last;
            var activePage = _state.activePage;
            var activePageStyle = _state.activePageStyle;
            var warpStyle = _state.warpStyle;
            var items = _state.items;
            var maxButton = _state.maxButton;
            var ellipsis = _state.ellipsis;

            var _getPagination = (0, _getPagination3.default)({
                activePage: activePage,
                items: items,
                maxButton: maxButton,
                ellipsis: ellipsis
            });

            var begin = _getPagination.begin;
            var end = _getPagination.end;
            var leftEllipsis = _getPagination.leftEllipsis;
            var rightEllipsis = _getPagination.rightEllipsis;

            var itemPage = [];
            //第一页
            first ? itemPage.push(_react3.default.createElement(
                _materialUi.FlatButton,
                { key: 'first', style: style, onClick: function onClick() {
                        _this2.pageClick(1);
                    } },
                _react3.default.createElement(_firstPage2.default, { style: IconStyle })
            )) : 0;
            //上一页
            var prevPage = activePage > 1 ? activePage - 1 : 1;
            prev ? itemPage.push(_react3.default.createElement(
                _materialUi.FlatButton,
                { key: 'prev', style: style, onClick: function onClick() {
                        _this2.pageClick(prevPage);
                    } },
                _react3.default.createElement(_chevronLeft2.default, { style: IconStyle })
            )) : 0;
            if (leftEllipsis) {
                //itemPage.push(<FlatButton key={1} label='1' style={style} />);
                itemPage.push(_react3.default.createElement(_materialUi.FlatButton, { onClick: function onClick() {
                        _this2.pageClick(begin - 1);
                    }, key: 'leftEllipsis', label: '...', style: style }));
            }
            for (var i = begin, max = end; i <= max; i++) {
                var _style = style;
                if (i === activePage) {
                    _style = Object.assign({}, _style, activePageStyle);
                }
                itemPage.push(_react3.default.createElement(_PageButton2.default, { style: _style, pageNo: i, key: i, pageClick: this.pageClick }));
            }
            if (rightEllipsis) {
                itemPage.push(_react3.default.createElement(_materialUi.FlatButton, { onClick: function onClick() {
                        _this2.pageClick(end + 1);
                    }, key: 'rightEllipsis', label: '...', style: style }));
                //itemPage.push(<FlatButton key={items} label={items} style={style} />);
            }

            //下一页
            var nextPage = activePage < items ? activePage + 1 : items;
            next ? itemPage.push(_react3.default.createElement(
                _materialUi.FlatButton,
                { key: 'next', style: style, onClick: function onClick() {
                        _this2.pageClick(nextPage);
                    } },
                _react3.default.createElement(_chevronRight2.default, { style: IconStyle })
            )) : 0;
            //最后一页
            last ? itemPage.push(_react3.default.createElement(
                _materialUi.FlatButton,
                { key: 'last', style: style, onClick: function onClick() {
                        _this2.pageClick(items);
                    } },
                _react3.default.createElement(_lastPage2.default, { style: IconStyle })
            )) : 0;

            return _react3.default.createElement(
                _MuiThemeProvider2.default,
                { muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default) },
                _react3.default.createElement(
                    'div',
                    { style: warpStyle },
                    itemPage
                )
            );
        }
    }]);

    return Pagination;
}(_react3.default.Component));

exports.default = Pagination;