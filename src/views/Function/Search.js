import React from "react";
import axios from "axios";
import "./ShowAll.scss";
import { AddComponentName, AddComponentID } from "../Component/AddComponent";
import ShowStudents from "../Component/ShowStudents";

class Search extends React.Component {
  state = {
    byID: false,
    isSearch: false,
    searchID: "",
    searchName: "",
    listStudents: [],
    studentByID: [],
  };

  handleSearch = () => {
    this.setState({ byID: !this.state.byID });
  };

  handleClickID = () => {
    this.setState({ isSearch: !this.state.isSearch });

    let id = this.state.searchID;
    axios
      .get(`http://localhost:8080/api/v1/Students/findId/${id}`)
      .then((response) => {
        this.setState(
          (prevState) => ({
            studentByID: response.data.data || prevState.studentByID,
          }),
          () => {
            console.log(">>> studentByID:", this.state.studentByID);
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleClickName = () => {
    this.setState({ isSearch: !this.state.isSearch });
    let name = this.state.searchName;
    axios
      .get(`http://localhost:8080/api/v1/Students/findName/${name}`)
      .then((response) => {
        this.setState(
          (prevState) => ({
            listStudents: response.data || prevState.listStudents,
          }),
          () => {
            console.log(">>> listStudents:", this.state.listStudents.data);
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleTakeName = (name) => {
    this.setState({ searchName: name });
  };

  handleTakeID = (id) => {
    this.setState({ searchID: id });
    // console.log(">>> check id in search.js:", this.state.searchID);
  };

  deleteAStudent = (student) => {
    let currentStudents = this.state.listStudents;
    currentStudents = currentStudents.filter((item) => item.id !== student.id);
  };

  // async componentDidMount() {
  //   let res = await axios.get("http://localhost:8080/api/v1/Students/find/");
  //   console.log(">>> Check res", res.data);
  //   this.setState({
  //     listStudents: res && res.data ? res.data : [],
  //   });
  // }

  render() {
    // let {  } = this.state;
    let { byID, searchID, searchName, isSearch, listStudents, studentByID } =
      this.state;
    return (
      <>
        <div className="search-title">
          <h1>Tra cứu học sinh</h1>
        </div>
        {byID === false ? (
          <>
            <AddComponentName
              searchName={searchName}
              handleTakeName={this.handleTakeName}
            />

            <div>
              <button onClick={() => this.handleSearch()}>
                Tra cứu theo Id
              </button>
            </div>
            <button onClick={() => this.handleClickName()}>Tra cứu</button>

            {isSearch ? (
              listStudents.data && listStudents.data.length > 0 ? (
                listStudents.data.map((student, index) => (
                  <div key={student.id}>
                    <span>
                      {index + 1} -{student.id} - {student.name} -{" "}
                      {student.dateYear} -{" "}
                      {student.address != null
                        ? student.address
                        : "Chưa cập nhật"}
                    </span>
                  </div>
                ))
              ) : (
                <p>Không tìm thấy dữ liệu</p>
              )
            ) : (
              <>chưa click tra cứu</>
            )}
          </>
        ) : (
          <>
            <AddComponentID
              searchID={searchID}
              handleTakeID={this.handleTakeID}
            />

            <div>
              <button onClick={() => this.handleSearch()}>
                Tra cứu theo tên
              </button>
            </div>

            <button onClick={() => this.handleClickID()}>Tra cứu</button>
            {isSearch ? (
              studentByID !== null ? (
                <>
                  {studentByID.name} - {studentByID.dateYear} -{" "}
                  {studentByID.address != null
                    ? studentByID.address
                    : "Chưa cập nhật"}
                </>
              ) : (
                <p>Không tìm thấy dữ liệu</p>
              )
            ) : (
              <>chưa click</>
            )}
          </>
        )}
      </>
    );
  }
}

export default Search;
