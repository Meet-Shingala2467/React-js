import React, { useState } from 'react';
import { app } from '../src/firebase'; // Correct Firebase import
import { getDatabase, set, ref } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

function Add() {
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');

  const fileHandling = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const id = Math.floor(Math.random()*1000)

    set(ref(db, `user/${id}`), {
      Name,
      Phone,
    })
      .then(() => {
        alert('Record added!');
        setName('');
        setPhone('');
      })
      .catch((error) => {
        console.error('Error adding record:', error);
        alert('Failed to add record.');
      });
  };

  return (
    <div align="center">
      <form onSubmit={fileHandling}>
        <table border={1}>
          <thead>
            <tr>
              <th>Name:</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={Name}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  value={Phone}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
}

export default Add;
