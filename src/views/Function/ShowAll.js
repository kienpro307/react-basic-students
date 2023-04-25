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
    let res = await axios.get(`http://localhost:8080/api/v1/Students`);
    this.setState({
      listStudents: res && res.data ? res.data : [],
    });
  }

  deleteAStudent = (student) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa dữ liệu không?");
    if (confirmDelete) {
      let currentStudents = this.state.listStudents;
      currentStudents = currentStudents.filter(
        (item) => item.id !== student.id
      );
      this.setState({
        listStudents: currentStudents,
      });
      console.log(">>> delete student has id:", student.id);
      axios
        .delete(`http://localhost:8080/api/v1/Students/delete/${student.id}`)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    }
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
        editStudent: {},
      });
      // call api ở đây để cập nhật thông tin student
      axios
        .put(
          `http://localhost:8080/api/v1/Students/update/${student.id}`,
          student
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
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
  };

  editStudentOnChangeDateYear = (value) => {
    let editStudentCopy = { ...this.state.editStudent };
    editStudentCopy.dateYear = value;
    this.setState({ editStudent: editStudentCopy });
  };

  editStudentOnChangeAddress = (value) => {
    let editStudentCopy = this.state.editStudent;
    editStudentCopy.address = value;
    this.setState({ editStudent: editStudentCopy });
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
