import React from "react";

class ShowStudents extends React.Component {
  handleOnClickDelete = (student) => {
    this.props.deleteAStudent(student);
  };

  render() {
    let { listStudents } = this.props;
    return (
      <>
        <div>
          {listStudents &&
            listStudents.length > 0 &&
            listStudents.map((item, index) => {
              return (
                <div className="child" key={item.id}>
                  {index + 1} - {item.name} - {item.dateYear} -{" "}
                  {item.address != null ? item.address : "Chưa cập nhật"}
                  <></>{" "}
                  <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default ShowStudents;
