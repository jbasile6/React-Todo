import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        }
    };

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitItem = e => {
        this.setState({ item: ''});
        this.props.addItem(e, this.state.item);
    };




    render () {
        return (
            <form onSubmit={this.submitItem}>
                <input
                type= 'text'
                value={this.state.item}
                name= 'item'
                onChange={this.handleChanges}
                />
                <button>Add to List</button>
            </form>
        );
    }
}


export default TodoForm;