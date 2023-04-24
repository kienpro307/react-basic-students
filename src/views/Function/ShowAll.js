import React from "react";
import axios from "axios";
import "./ShowAll.scss";
import ShowStudents from "../Component/ShowStudents";

class ShowAll extends React.Component {
  state = {
    listStudents: [],
    editStudent: {},
  };

  async componentDidMount() {
    let res = await axios.get("http://localhost:8080/api/v1/Students");
    this.setState({
      listStudents: res && res.data ? res.data : [],
    });
  }

  deleteAStudent = (student) => {
    let currentStudents = this.state.listStudents;
    currentStudents = currentStudents.filter((item) => item.id !== student.id);
    this.setState({
      listStudents: currentStudents,
    });
  };

  editAStudent = (student) => {
    let { editStudent, listStudents } = this.state;

    let isEmptyObj = Object.keys(editStudent).length === 0;

    //save
    if (isEmptyObj === false && editStudent.id === student.id) {
      let listStudentsCopy = [...listStudents];
      let objIndex = listStudentsCopy.findIndex(
        (item) => item.id === student.id
      );
      listStudentsCopy[objIndex] = editStudent;
      this.setState({
        listStudents: listStudentsCopy,
        // editStudent: {},
      });
      return;
    }

    this.setState({
      editStudent: student,
    });
  };

  editStudentOnChangeName = (value) => {
    let editStudentCopy = { ...this.state.editStudent };
    editStudentCopy.name = value;
    this.setState({ editStudent: editStudentCopy });
    console.log(">>> check edit student copyname: ", this.editStudent);
  };

  editStudentOnChangeDateYear = (value) => {
    let editStudentCopy = { ...this.state.editStudent };
    editStudentCopy.dateYear = value;
    this.setState({ editStudent: editStudentCopy });
    console.log(">>> check edit student date year: ", value);
  };

  editStudentOnChangeAddress = (value) => {
    let editStudentCopy = this.state.editStudent;
    editStudentCopy.address = value;
    this.setState({ editStudent: editStudentCopy });
    console.log(">>> check edit student address: ", value);
  };

  render() {
    // let { listStudents } = this.state;
    return (
      <>
        <div className="list-student-container">
          <div className="title">Hiển thị tất cả học sinh</div>
          <div className="list-student-content">
            <ShowStudents
              editStudent={this.state.editStudent}
              listStudents={this.state.listStudents}
              deleteAStudent={this.deleteAStudent}
              editAStudent={this.editAStudent}
              editStudentOnChangeName={this.editStudentOnChangeName}
              editStudentOnChangeDateYear={this.editStudentOnChangeDateYear}
              editStudentOnChangeAddress={this.editStudentOnChangeAddress}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ShowAll;
