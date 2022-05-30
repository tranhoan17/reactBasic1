import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  //extends React.Component : để React hiểu MyComponent là 1 Component

  state = {
    arrJob: [
      { id: "Intern", tittle: "Dev", salary: "500$" },
      { id: "Fresher", tittle: "Test", salary: "400$" },
      { id: "Junior", tittle: "BA", salary: "5000$" },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJob: [...this.state.arrJob, job],
    });
  };

  deleteAJob = (job) => {
    let currentArrJob = this.state.arrJob;
    currentArrJob = currentArrJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJob: currentArrJob,
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJob={this.state.arrJob}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
