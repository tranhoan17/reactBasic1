import React from "react";
import "./demo.scss";
class ChildComponent extends React.Component {
  //extends React.Component : để React hiểu ChildComponent là 1 Component

  state = {
    showJob: false,
  };

  handleShow = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handelOnClickDelete = (job) => {
    this.props.deleteAJob(job);
  };

  render() {
    let { arrJob } = this.props;
    let { showJob } = this.state;
    return (
      <>
        {showJob === false ? (
          <div>
            <button className="btn__show" onClick={() => this.handleShow()}>
              Show Job
            </button>
          </div>
        ) : (
          <>
            <div className="job_lists">
              {arrJob.map((item, index) => {
                return (
                  <div key={item.id}>
                    {index + 1}: {item.id} - {item.tittle} - {item.salary} <></>
                    <></>
                    <span onClick={() => this.handelOnClickDelete(item)}>
                      X
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShow()}>Hide Job</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { arrJob } = props;
//   return (
//     <>
//       <div className="job_lists">
//         {arrJob.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {index + 10}: {item.id} - {item.tittle} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
export default ChildComponent;
