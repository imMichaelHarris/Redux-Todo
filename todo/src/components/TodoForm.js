import React from "react";

class TodoForm extends React.Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input type="text" name="name" value={this.state.name} />
      </div>
    );
  }
}

export default TodoForm;
