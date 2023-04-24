import React from "react";

class ShowStudents extends React.Component {
  handleOnClickDelete = (student) => {
    this.props.deleteAStudent(student);
  };
  handleOnClickEdit = (student) => {
    //edit
    this.props.editAStudent(student);
  };
  handleOnChangeEditName = (event) => {
    let value = event.target.value;
    this.props.editStudentOnChangeName(value);
  };
  handleOnChangeEditDateYear = (event) => {
    let value = event.target.value;
    this.props.editStudentOnChangeDateYear(value);
  };

  handleOnChangeEditAddress = (event) => {
    let value = event.target.value;
    this.props.editStudentOnChangeAddress(value);
  };

  render() {
    let { listStudents, editStudent } = this.props;
    let isEmptyObj = Object.keys(editStudent).length === 0;

    return (
      <>
        <div>
          {listStudents &&
            listStudents.length > 0 &&
            listStudents.map((item, index) => {
              return (
                <div className="child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.name} - {item.dateYear} -{" "}
                      {item.address != null ? item.address : "Chưa cập nhật"}
                    </span>
                  ) : (
                    <>
                      {editStudent.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editStudent.name}
                            onChange={(event) =>
                              this.handleOnChangeEditName(event)
                            }
                          />{" "}
                          -{" "}
                          <input
                            value={editStudent.dateYear}
                            onChange={(event) =>
                              this.handleOnChangeEditDateYear(event)
                            }
                          />{" "}
                          -{" "}
                          <input
                            value={editStudent.address}
                            onChange={(event) =>
                              this.handleOnChangeEditAddress(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.name} - {item.dateYear} -{" "}
                          {item.address != null
                            ? item.address
                            : "Chưa cập nhật"}
                        </span>
                      )}
                    </>
                  )}

                  <button
                    className="edit"
                    onClick={() => this.handleOnClickEdit(item)}
                  >
                    {isEmptyObj === false && editStudent.id === item.id
                      ? "save"
                      : "edit"}
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleOnClickDelete(item)}
                  >
                    delete
                  </button>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default ShowStudents;
