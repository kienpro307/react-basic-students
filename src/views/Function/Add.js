import React from "react";
import { AddComponentStudent } from "../Component/AddComponent";

class Add extends React.Component {
  state = {
    arrStudents: [{ id: "", name: "", dateYear: "", address: "" }],
  };

  addNewStudent = (student) => {
    this.setState({
      arrStudents: [...this.state.arrStudents, student]
    });
  };

  render() {
    return (
      <>
        <AddComponentStudent addNewStudent={this.addNewStudent} />
      </>
    );
  }
}

export default Add;
