import React, { useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const db = getDatabase(app);
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 1000000);
    set(ref(db, `users/${id}`), {
      name: name,
      phone: phone,
    });
    alert("record add");
    navigate("/");
  };

  return (
    <div align="center">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tr>
            <td>Name :- </td>
            <td>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </td>
          </tr>
          <tr>
            <td>Phone :- </td>
            <td>
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" />
            </td>
          </tr>
        </table>
      </form>
      <Link to={`/`}>View</Link>
    </div>
  );
};

export default Add;
