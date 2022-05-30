import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Playing game" },
      { id: "todo3", title: "Coding React" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Bạn đã điền đúng thông tin");
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.info("Bạn đã xóa thành công!");
  };

  handleEditTodo = (todo) => {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    //Save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let lisTodosCopy = [...listTodos];
      let ObjIndex = lisTodosCopy.findIndex((item) => item.id === todo.id);

      lisTodosCopy[ObjIndex].title = editTodo.title;

      this.setState({
        listTodos: lisTodosCopy,
        editTodo: {},
      });

      toast.success("Bạn đã cập nhật TODO thành công");
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };

  handelOnChangeEditTodo = (e) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = e.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    // let lisTodos = this.state.listTodo;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list__todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list__todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <>
                  <p>Hello My React Simple TODO App</p>
                  <div className="todo__child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(e) => {
                                this.handelOnChangeEditTodo(e);
                              }}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}

                    <button
                      type="button"
                      className="edit"
                      onClick={() => {
                        this.handleEditTodo(item);
                      }}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => {
                        this.handleDeleteTodo(item);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
