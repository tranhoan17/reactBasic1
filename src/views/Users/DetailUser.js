import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./ListUser.scss";

class DetailUser extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }

  handleBackListUser = () => {
    this.props.history.push(`/user`);
  };

  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>Infomation User Detail with ID : {this.props.match.params.id}</div>
        {isEmptyObj === false && (
          <>
            <div className="child">
              <div>
                {user.last_name} {user.first_name}
              </div>
              <div>Email : {user.email}</div>
              <img src={user.avatar}></img>
            </div>
            <button
              type="button"
              onClick={() => {
                this.handleBackListUser();
              }}
            >
              BACK TO LIST USER
            </button>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
