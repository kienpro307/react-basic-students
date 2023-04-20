import React from "react";
import axios from "axios";
import "./ShowAll.scss";
import { AddComponentName, AddComponentID } from "../Component/AddComponent";

class Search extends React.Component {
  state = {
    byID: false,

    isSearch: false,
    students: [],
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
      students: resName.data && resName.data.data ? resName.data.data : [],
    });

    console.log(">>> Check res", resID.data);
  }

  handleSearch = () => {
    this.setState({ byID: !this.state.byID });
  };

  handleClick = () => {
    this.setState({ isSearch: !this.state.isSearch });
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
    let { byID, searchID, searchName, isSearch, students, studentByID } =
      this.state;
    return (
      <>
        <div className="search-title">
          <h1>Tra cứu học sinh</h1>
        </div>
        {byID === false ? (
          <>
            <AddComponentName />
            <button onClick={() => this.handleClick()}>Tra cứu</button>

            <div>
              <button onClick={() => this.handleSearch()}>
                Tra cứu theo Id
              </button>
            </div>

            {isSearch ? (
              students && students.length > 0 ? (
                <div>
                  {students.map((item, index) => (
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
            <AddComponentID />
            <button onClick={() => this.handleClick()}>Tra cứu</button>
            <div>
              <button onClick={() => this.handleSearch()}>
                Tra cứu theo tên
              </button>
            </div>

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
