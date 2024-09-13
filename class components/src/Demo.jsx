import { Component } from "react";

class Demo extends Component {
  constructor() {
    super();
    this.record = [
      {
        id: 1,
        name: "oberoy",
        age: 20,
        country: "U.S.A",
        occupation: "Software Engineer",
        hobbies: ["reading", "hiking", "coding"],
      },
      {
        id: 2,
        name: "john",
        age: 25,
        country: "U.K",
        occupation: "Doctor",
        hobbies: ["swimming", "travelling", "cooking"],
      },
      {
        id: 3,
        name: "jane",
        age: 30,
        country: "Australia",
        occupation: "Teacher",
        hobbies: ["painting", "dancing", "gardening"],
      },
    ];
  }

  render() {
    return (
      <div>
        <h1>view data</h1>
        <table border={1} width={600} align="center">
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Country</td>
            <td>Occupation</td>
            <td>Hobbies</td>
          </tr>

          <tbody>
            {this.record.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td>{record.country}</td>
                <td>{record.occupation}</td>
                <td>{record.hobbies.join(", ")}</td>
                {Data.meet((data)=>data.id )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Demo;
