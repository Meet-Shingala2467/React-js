import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Action/curdActions";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("All fields are required!");
      return false;
    }

    const user = {
      id: Math.floor(Math.random() * 1000000),
      name,
      phone,
    };

    dispatch(addUser(user));
    navigate("/");
  };

  return (
    <div className="add-container">
      <div className="add-form">
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="tel"
            className="input-field"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <div className="form-actions">
            <Link to={"/"} className="view-link">
              <button type="button" className="view-button">
                View Users
              </button>
            </Link>
            <button type="submit" className="submit-button">
              <span>+</span>
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .add-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 32px;
          height: 100vh;
          background: #e0f7fa; /* Changed background color */
        }

        .add-form {
          background: white;
          width: 100%;
          max-width: 400px;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        h2 {
          margin-bottom: 16px;
          font-size: 24px;
          color: #333;
        }

        .input-field {
          width: 100%;
          padding: 10px;
          margin-bottom: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
          color: #333;
          outline: none;
          transition: border-color 0.3s;
        }

        .input-field:focus {
          border-color: #007bff;
        }

        .form-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .view-link {
          text-decoration: none;
        }

        .view-button {
          background: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 8px 12px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .view-button:hover {
          background: #45a049;
        }

        .submit-button {
          background: #feefc3;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #666;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .submit-button:hover {
          background: #fee4a3;
        }

        @media (max-width: 480px) {
          .add-form {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default Add;
