import React from "react";
import axios from "axios";
import "./ShowAll.scss";
import ShowStudents from "../Component/ShowStudents";

class ShowAll extends React.Component {
  state = {
    listStudents: [],
  };

  async componentDidMount() {
    let res = await axios.get("http://localhost:8080/api/v1/Students");
    console.log(">>> Check res", res.data);
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

  render() {
    // let { listStudents } = this.state;
    return (
      <>
        <div className="list-student-container">
          <div className="title">Hiển thị tất cả học sinh</div>
          <div className="list-student-content">
            <ShowStudents
              listStudents={this.state.listStudents}
              deleteAStudent={this.deleteAStudent}
            />
            {/* {listStudents &&
              listStudents.length > 0 &&
              listStudents.map((item, index) => {
                return (
                  <div className="child" key={item.id}>
                    {index + 1} - {item.name} - {item.dateYear} - {item.address != null ? item.address : "Chưa cập nhật"}
            
                  </div>
                );
              })} */}
          </div>
        </div>
      </>
    );
  }
}

export default ShowAll;
