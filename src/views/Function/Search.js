import React from "react";
import axios from "axios";

class Search extends React.Component {
  state = {
    students: [],
  };
  async componentDidMount() {
    let res = await axios.get(
      "http://localhost:8080/api/v1/Students/find/"
    );
    this.setState({
      students: res.data,
    });
  }

  render() {
    let { student } = this.state;
    return (
      <>
        <div></div>
      </>
    );
  }
}

export default Search;
