import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleAddTodo = (e) => {
    if (!this.state.title) {
      toast.error("Bạn chưa nhập title !!!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };

    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  handleOnChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  render() {
    let { title } = this.state.title;
    return (
      <div className="add__todo">
        <input
          type="text"
          value={title}
          onChange={(e) => this.handleOnChangeTitle(e)}
        />
        <button
          type="button"
          className="add"
          onClick={(e) => this.handleAddTodo(e)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
