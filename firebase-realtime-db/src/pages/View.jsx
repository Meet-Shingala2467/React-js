import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../firebase";
const View = () => {
  const [users, setUsers] = useState([]);
  const db = getDatabase(app);
  const viewUser = () => {
    const record = ref(db, "users");
    onValue(record, (u) => {
      const data = u.val();
      setUsers(data);
    });
  };
  useEffect(() => {
    viewUser();
  }, []);
  return (
    <div align="center">
      <h2>View User</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
           <tbody>
          {Object.entries(users).map(([key, value]) => {
            return (
              <tr>
                <td>{key}</td>
                <td>{value.name}</td>
                <td>{value.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to={`/add`}>Add</Link>
    </div>
  );
};

export default View;
