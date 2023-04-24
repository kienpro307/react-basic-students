import React from "react";

class AddComponentName extends React.Component {
  state = {
    searchID: "",
    searchName: "",
  };

  handleOnChangeName = (event) => {
    this.setState({ searchName: event.target.value });
  };

  handleOnChangeID = (event) => {
    this.setState({ searchID: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="search-by-name">
          <label>Name:</label>
          <input
            value={this.state.searchName}
            type="text"
            id="fname"
            name="fname"
            onChange={(event) => this.handleOnChangeName(event)}
          />
        </div>
      </div>
    );
  }
}

class AddComponentID extends React.Component {
  state = {
    searchID: "",
    searchName: "",
  };

  handleOnChangeName = (event) => {
    this.setState({ searchName: event.target.value });
  };

  handleOnChangeID = (event) => {
    this.setState({ searchID: event.target.value });
  };

  render() {
    return (
      <div className="search-by-id">
        <label>Id:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(event) => this.handleOnChangeID(event)}
        />
      </div>
    );
  }
}

class AddComponentStudent extends React.Component {
  state = {
    id: "",
    name: "",
    dateYear: "",
    address: "",
  };

  handleOnChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleOnChangedateYear = (event) => {
    this.setState({ dateYear: event.target.value });
  };

  handleOnChangeAddress = (event) => {
    this.setState({ address: event.target.value });
  };

  handleSubmit = (event) => {
    // console.log(">>> check student", this.state);
    event.preventDefault();
    this.props.addNewStudent({
      id: Math.floor(Math.random() * 100),
      name: this.state.name,
      dateYear: this.state.dateYear,
      address: this.state.address,
    });
  };

  render() {
    return (
      <div>
        Thêm học sinh:
        <div className="name">
          <label>Name:</label>
        </div>
        <input
          value={this.state.name}
          type="text"
          id="fname"
          name="fname"
          onChange={(event) => this.handleOnChangeName(event)}
        />
        <div className="dateYear">
          <label>Day of birth:</label>
        </div>
        <input
          value={this.state.dateYear}
          type="text"
          id="fname"
          name="fname"
          onChange={(event) => this.handleOnChangedateYear(event)}
        />
        <div className="address">
          <label>Address:</label>
        </div>
        <input
          value={this.state.address}
          type="text"
          id="fname"
          name="fname"
          onChange={(event) => this.handleOnChangeAddress(event)}
        />
        <div>
          <button onClick={(event) => this.handleSubmit(event)}>
            Thêm học sinh
          </button>
        </div>
      </div>
    );
  }
}

export { AddComponentName, AddComponentID, AddComponentStudent };
