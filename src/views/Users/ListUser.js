import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  handelViewDetail = (user) => {
    this.props.history.push(`user/${user.id}`);
  };

  render() {
    let { listUser } = this.state;
    return (
      <div className="list__user-container">
        <div className="title">List User</div>
        <div className="list__user-content">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => {
                    this.handelViewDetail(item);
                  }}
                >
                  <div>
                    {index + 1}: {item.last_name} {item.first_name}
                  </div>
                  <div>Email : {item.email}</div>
                  <img src={item.avatar}></img>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
