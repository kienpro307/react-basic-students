import React from "react";
import axios from "axios";
import { AddComponentStudent } from "../Component/AddComponent";

class Add extends React.Component {
  // addNewStudent = (newStudent) => {
  //   axios
  //     .post(`http://localhost:8080/api/v1/Students/insert`, newStudent)
  //     .then((res) => {
  //       console.log(">>> check newStudent", newStudent);
  //     });
  // };
  async addNewStudent(newStudent) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    };

    fetch("http://localhost:8080/api/v1/Students/insert", options)
      .then((res) => res.json())
      .then((data) => console.log(">>> check newStudent", newStudent));
  }

  render() {
    return (
      <>
        <AddComponentStudent addNewStudent={this.addNewStudent} />
      </>
    );
  }
}

export default Add;
