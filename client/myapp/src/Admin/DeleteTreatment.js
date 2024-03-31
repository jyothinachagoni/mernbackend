import axios from 'axios';
import React, { useEffect, useState } from 'react';
import adminStyles from './admin.module.css';
import { NavLink } from 'react-router-dom';

const DeleteTreatment = () => {
    const [treatment, setTreatment] = useState([]);

    const [error, setError] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:4000/treatment')
            .then((res) => {
                console.log(res.data);
                setTreatment(res.data);
            })
            .catch((err) => {
                console.error('Error fetching treatment:', err);
                setError('Error fetching treatment. Please try again later.');
            });
    }, []); // empty dependency array to run once when component mounts

    const deleteData = (batchId) => {
        axios.delete(`http://localhost:4000/treatment/${batchId}`)
            .then((res) => {
                // Filter out the deleted treatment from the state
                setTreatment(treatment.filter(treat => treat.id !== batchId));
                alert('Treatment deleted successfully.');
                
            })
            .catch((err) => {
                console.error('Error deleting treatment:', err);
                alert('Error deleting treatment. Please try again later.');
            });
    };
    const editData=(id)=>{

    }

    return (
        <div className={adminStyles.table}>
            {error && <div className="error">{error}</div>}
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>tname</th>
                        <th>tdesc</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {treatment.map((treat) => (
                        <tr key={treat.id}>
                            <td>{treat.tname}</td>
                            <td>{treat.tdesc}</td>
                            <td>
                                <button  className="btn btn-danger" onClick={() => deleteData(treat._id)}>Delete</button>
                            </td>
                            <td>
                             <NavLink to={`/edittreatment/${treat._id}`}><button className='btn btn-primary'>Edit</button></NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeleteTreatment;
