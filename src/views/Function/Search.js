import React from "react";
import axios from "axios";
import "./ShowAll.scss";
import { AddComponentName, AddComponentID } from "../Component/AddComponent";

class Search extends React.Component {
  state = {
    byID: false,
    isSearch: false,
    searchID: "",
    searchName: "",
    listStudents: [],
    studentByID: {},
  };

  async componentDidMount() {
    let id = this.state.searchID;
    let name = this.state.searchName;

    let resID = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://localhost:8080/api/v1/Students/findId/${id}`
    );

    let resName = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://localhost:8080/api/v1/Students/findName/${name}`
    );

    this.setState({
      studentByID: resID.data && resID.data.data ? resID.data.data : {},
    });

    this.setState({
      listStudents: resName.data && resName.data.data ? resName.data.data : [],
    });

    console.log(">>> Check res", resID.data);
  }

  handleSearch = () => {
    this.setState({ byID: !this.state.byID });
  };

  handleClick = () => {
    this.setState({ isSearch: !this.state.isSearch });
    console.log(">>> Check studentById:", this.state.studentByID);
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleTakeName = (name) => {
    this.setState({ searchName: name });
  };

  handleTakeID = (id) => {
    this.setState({ searchID: id });
    console.log(">>> check id in search.js:", this.state.searchID);
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
            <button onClick={() => this.handleClick()}>Tra cứu</button>

            {isSearch ? (
              listStudents && listStudents.length > 0 ? (
                <div>
                  {listStudents.map((item, index) => (
                    <div className="child" key={item.id}>
                      {index + 1} - {item.data.name} - {item.data.dateYear} -{" "}
                      {item.data.address != null
                        ? item.data.address
                        : "Chưa cập nhật"}
                    </div>
                  ))}
                </div>
              ) : (
                <p>Không tìm thấy dữ liệu</p>
              )
            ) : (
              <>chưa click</>
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

            <button onClick={() => this.handleClick()}>Tra cứu</button>
            {isSearch ? (
              studentByID && studentByID.length > 0 ? (
                <div>
                  {studentByID.map((item, index) => (
                    <div className="child" key={item.id}>
                      {index + 1} - {item.data.name} - {item.data.dateYear} -{" "}
                      {item.data.address != null
                        ? item.data.address
                        : "Chưa cập nhật"}
                    </div>
                  ))}
                </div>
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
