import React from 'react';
import grandchild from './grandchild.jsx';

class Component1 extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'raja',
            data: 'money lover',
            msg: "welcome to WIPRO Technologies"

        }

    };
    updateValue(b) {
        b.preventDefault();
        this.setState({data: this.refs.name.value});
    }
    updateState() {
        this.setState({name: 'kumar'})
    }

    render() {
        return (
            <div>
                <h1>Hello from child 1 {this.props.name}</h1>
                <h4>{this.state.name}</h4>
                <button onClick={this.updateState.bind(this)}>CLICK</button>

                <form onSubmit={this.updateValue.bind(this)}>
                    <h3>
                        {this.state.data}</h3>
                    Name:
                    <input type="text" ref="name"/>
                    <input type="submit" value="Child Submit"/>
                </form>

            </div>
        );
    }
}

//If your functional module have multiple components and more than one of them have to be exported, follow the object notation to export them
module.exports = {
    Component1,
    grandchild
};
