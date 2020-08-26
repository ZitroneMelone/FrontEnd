import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            output: "",
        }
    }


    handleadd = () => {
        this.setState({list: [...this.state.list, this.state.output]})

    };

    handlechange = e => {
        this.setState({output: e.target.value})
    };

    handleoutput = () => {
        console.log(this.state.list);
    };

    handledelete = () => {
        const test = [];
        for (var i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i] !== this.state.output) {
                test.push(this.state.list[i]);
            }
        }
        this.setState({list: test})
    }

    render() {
        var keyone = 0
        const listmap = this.state.list.map((text) =>
            <p key={keyone++}>{`key = ${keyone} und name = ${text}`}</p>
        )

        return (
            <div className="App">
                <input type='text' onChange={this.handlechange}></input>
                <button onClick={this.handleadd}>add</button>
                <button onClick={this.handleoutput}>output</button>
                <button onClick={this.handledelete}>delete</button>
                <div>{listmap}</div>
            </div>
        );
    }

}

export default App;
