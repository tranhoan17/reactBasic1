import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };

  handleCreatUser = () => {
    this.props.addUserRedux();
  };

  handleAddUser = () => {
    this.props.addUserRedux();
  };

  render() {
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>FROM PAGE HOME REACT</div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index} - {item.name}
                  &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>X</span>
                </div>
              );
            })}

          <button onClick={() => this.handleAddUser()}>Add New User</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREAT_USER" }),
  };
};
// export default withRouter(Color(Home));
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
