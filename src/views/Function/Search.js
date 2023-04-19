import React from "react";
import axios from "axios";
import "./ShowAll.scss";

class Search extends React.Component {
  state = {
    byId: false,
    students: [],
  };

  handleSearch = () => {
    this.setState({ byId: !this.state.byId });
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
    let { byID, listStudents } = this.state;
    return (
      <>
        <div className="search-title">
          <h1>Tra cứu học sinh</h1>
          {this.state.byID === false ? (
            <>
              <div className="search-by-name">
                <label>Name:</label>
                <input type="text" id="fname" name="fname" />
                <button>Tra cứu</button>
              </div>
              <div>
                <button onclick={() => this.handleSearch()}>
                  Tra cứu theo Id
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="search-by-id">
                <label>Id:</label>
                <input type="text" id="fname" name="fname" />
                <button>Tra cứu</button>
              </div>
              <div>
                <button onclick={() => this.handleSearch()}>
                  Tra cứu theo tên
                </button>
              </div>
            </>
          )}

          <div>
            {listStudents &&
              listStudents.length > 0 &&
              listStudents.map((item, index) => {
                return (
                  <div className="child" key={item.id}>
                    {index + 1} - {item.name} - {item.dateYear} -{" "}
                    {item.address != null ? item.address : "Chưa cập nhật"}
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
