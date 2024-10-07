import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React, { useState } from 'react';
import './Crud.css'

const Crud = () => {
    // Initialize data from localStorage or set to an empty array if not found
    let data = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    // State to manage the record data
    const [record, setRecord] = useState(data);
    // State to manage the input name
    const [name, setName] = useState('');
    // State to manage the edit mode
    const [editid, setEditid] = useState(false);
    // State to manage the edit id
    const [edit, setEdit] = useState(null);
    // State to manage the selected items
    const [selected, setselected] = useState([]);


    // Function to handle form submission
    const submit = (e) => {
        e.preventDefault();
        if (name.trim() === '') return; // Check if the input is blank and return if true
        if (editid) {
            // Update existing record
            const update = record.map((v) => v.id == edit ? { ...v, name } : v);
            localStorage.setItem('users', JSON.stringify(update));
            setRecord(update);
            setEditid(false);
            setEdit(null);

        } else {
            // Add new record
            let obj = {
                id: Math.floor(Math.random() * 1000),
                name,
                status: true
            };

            let newfile = [...record, obj];
            localStorage.setItem('users', JSON.stringify(newfile));
            setRecord(newfile);
        }
        setName('');
    };


    // Function to handle delete
    const Delete = (id) => {
        // Filter out the record to be deleted
        const Alldelete = record.filter((v) => v.id != id);
        setRecord(Alldelete);
        localStorage.setItem("users", JSON.stringify(Alldelete));
    }


    // Function to handle edit
    const Edit = (id) => {
        // Find the record to be edited
        const allUpdate = record.find((v) => v.id == id);
        setName(allUpdate.name);
        setEditid(true);
        setEdit(id);
    }


    // Function to handle toggle status
    const Toggle = (id) => {
        // Update the status of the record
        const active = record.map((v) => v.id === id ? { ...v, status: !v.status } : v);
        setRecord(active);
        localStorage.getItem('users', JSON.stringify(active));
    }


    // Function to handle multiple delete
    const DeleteSelected = () => {
        // Filter out the selected records to be deleted
        const Alldelete = record.filter((v) => !selected.includes(v.id));
        setRecord(Alldelete);
        localStorage.setItem("users", JSON.stringify(Alldelete));
        setselected([]);
    };

    // Function to handle selection
    const handleSelect = (id) => {
        if (selected.includes(id)) {
            setselected(selected.filter(recordId => recordId !== id));
        } else {
            setselected([...selected, id]);
        }
    };




    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="card-1 p-3">
                        <form onSubmit={submit}>
                            <h2 className="text-center">{editid ? "Todo Input Update" : "Todo Input Add"}</h2>
                            <div className='text'>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='New Todo Add'
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div><br></br>
                            <button type="submit" className="btn btn-info" >
                                {editid ? "Add Update Task" : "Add New Task"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="row">
                    <div className="card-2 ">
                        <h2 className="text-center">Todo List</h2>
                        {record.map((v, index) => {
                            const { id, name, status } = v;
                            return (
                                <div className="main-box d-flex align-items-center justify-content-center" key={index}>
                                    <div className="col-8">
                                        <div className="text-box">
                                            {name}
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="button-box">
                                            <input
                                                type="checkbox"
                                                checked={selected.includes(id)}
                                                onChange={() => handleSelect(id)}
                                            />
                                            <button className={`toggle btn ${status ? 'btn-danger' : 'btn-success'}`} onClick={() => Toggle(id)}>
                                                {status ? "Deactivate" : "Activate"}
                                            </button>
                                            <button className='btn btn-info' onClick={() => Edit(id)}><i className="fa-regular fa-pen-to-square" /></button>
                                            <button className='btn btn-danger' onClick={() => Delete(id)}><i className="fa-solid fa-trash-can" /></button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div>
                            <button className='btn btn-danger' onClick={DeleteSelected} disabled={selected.length === 0}> Delete Selected</button>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Crud;
