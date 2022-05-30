import React from "react";

class AddComponent extends React.Component {
  state = {
    tittle: "",
    salary: "",
  };
  handleChangeTittleJob = (e) => {
    this.setState({
      tittle: e.target.value,
    });
  };

  handleChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    if (!this.state.tittle || !this.state.salary) {
      alert("Missing required params");
      return;
    }

    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      tittle: this.state.tittle,
      salary: this.state.salary,
    });

    this.setState({
      tittle: "",
      salary: "",
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="fname">Job's tittle:</label>
        <br />
        <input
          type="text"
          value={this.state.tittle}
          onChange={(e) => this.handleChangeTittleJob(e)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(e) => this.handleChangeSalary(e)}
        />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={(e) => this.handleSubmitForm(e)}
        />
      </form>
    );
  }
}

export default AddComponent;
