import React from 'react';
import {connect} from 'react-redux'

class TodoList extends React.Component  {
    
    render(){
        return (
            <div>
            {this.props.todos.map(todo => <h2>{todo.value}</h2>)}

            </div>

        ) 
    }
}
const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };

export default connect(mapStateToProps)(TodoList);