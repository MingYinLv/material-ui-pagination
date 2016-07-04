import React from 'react';
import ReactDom from 'react-dom';
import Pagination from './src/Pagination';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const App = React.createClass({
    getInitialState: function () {
        return {
            items: 20,
            maxButton: 5
        }
    },

    onSelect: function (index) {
        this.setState({
            activePage: index
        });
    },

    render: function () {
        return (
            <div>
                <button onClick={()=>{this.setState({items:this.state.items+1});}}>+</button>
                <Pagination onSelect={this.onSelect} next first last prev {...this.state}/>
            </div>

        )
    }
});
ReactDom.render(<App />, document.getElementById("container"));
