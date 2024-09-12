import React, { Component } from "react";
class User extends Component {
  render() {
    return (
      <div>
         
        {this.props.meet.map((user) => (
          <h2 key={user.id}>{user.name}</h2>
        ))}

        <div>
          {this.props.color.map((c) => {
            return <h3 style={{ color: c.color }}>{c.color}</h3>;
          })}
        </div>
      </div>
    );
  }
}

export default User;
