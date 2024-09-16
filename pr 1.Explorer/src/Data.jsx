import React, { Component } from "react";

class Person extends Component {
  constructor() {
    super();
    console.log(this.props);
  }
  render() {
    return (
      <div style={{ textAlign: "center", margin: "auto", width: "80%" }}>
        <h1
          style={{
            color: new Date().getMilliseconds() % 2 === 0 ? "blue" : "red",
            animation: "blink 0s infinite",
          }}
        >
          User Information
        </h1>
        <table
          style={{
            margin: "auto",
            border: "1px solid black",
            borderCollapse: "collapse",
          }}
          cellSpacing="5"
          cellPadding="5"
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "#FFF4A3",
                }}
              >
                Grid
              </th>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "#FFF4A3",
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "#FFF4A3",
                }}
              >
                Email
              </th>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "#FFF4A3",
                }}
              >
                Password
              </th>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "#FFF4A3",
                }}
              >
                Courses
              </th>
              <th
                style={{
                  border: "1px solid black",
                  backgroundColor: "#FFF4A3",
                }}
              >
                City
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.Meet.map((person, i) => (
              <tr key={i}>
                <td style={{ border: "1px solid black", fontWeight: "bold" }}>
                  {person.grid}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "bold" }}>
                  {person.name}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "bold" }}>
                  {person.email}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "bold" }}>
                  {person.password}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "bold" }}>
                  {person.course.join(", ")}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "bold" }}>
                  {person.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Person;
