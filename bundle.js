import React from 'react';
import ReactDom from 'react-dom';
import Pagination from './src/Pagination';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const App = React.createClass({
    getInitialState: function () {
        return {
            items: 5
        }
    },
    render: function () {
        return (
            <div>
                <button onClick={()=>{this.setState({items:this.state.items+1});}}>+</button>
                <Pagination items={this.state.items}/>
            </div>
        )
    }
});
ReactDom.render(<App />, document.getElementById("container"));
