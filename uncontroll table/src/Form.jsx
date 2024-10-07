import React, { useRef, useState } from 'react';
import './index.css';
import './animation.css'; // Assuming we create a new CSS file for animations

const Form = () => {
    const name = useRef("");
    const phone = useRef("");
    const [record, setRecord] = useState([]);

    const handleSubmite = (event) => {
        event.preventDefault();
        let username = name.current.value;
        let userphone = phone.current.value;
        if (username.trim() !== "" || userphone.trim() !== "") {
            let obj = {
                id: Math.floor(Math.random() * 10000), username, userphone
            };
            let old = [...record, obj];
            setRecord(old);
            name.current.value = "";
            phone.current.value = "";
        }
    };

    return (
        <div className='container'>
            <div className='box-1'>
                <form onSubmit={handleSubmite}>
                    <h1>Add Record</h1>
                    Name : <input type="text" ref={name} /><br /><br />
                    Phone : <input type="text" ref={phone} /><br /><br />
                    <input type="submit" className="button" />
                </form>
            </div>

            <div className='box-2'>
                <h2>View User</h2>
                <table border={1} align='center'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((a) => {
                            const { id, username, userphone } = a;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{username}</td>
                                    <td>{userphone}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Form;
