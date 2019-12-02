import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemList: ''
        };
    }
    handleChanges = event => {
        this.setState ({
          itemList : event.target.value
        })
      }
      handleSubmit = event => {
        event.preventDefault();
        if(this.state.itemList !== ''){
          this.props.addItem(this.state.itemList);
          this.setState({
            itemList:''
          });
        }
    }
    render() {
        console.log('rendering form')
        return(
            <form onSubmit = {this.handleSubmit}>
                <input
                onChange = {this.handleChanges}
                type='text'
                value={this.state.itemList}
                />
                <button>Submit</button>
            </form>
        );
    }
}

export default TodoForm;
