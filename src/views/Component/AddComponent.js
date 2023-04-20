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

export { AddComponentName, AddComponentID };