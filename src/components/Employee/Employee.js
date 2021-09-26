import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Employee.css';

const Employee = (props) => {
    // console.log(props);
    const {name,email,designation,salary,img,funded} = props.employee;

    const element = <FontAwesomeIcon icon={faPlus} />

    return (
        <div className="employee">
            <div className="employee-img">
                <img src={img} alt="" />
            </div>
            <div>
                <p><strong>Name: </strong>{name}</p>
                <p><strong>email: </strong>{email}</p>
                <p><strong>designation: </strong>{designation}</p>
                <p><strong>salary: </strong>${salary}</p>
                <p><strong>Funded: </strong>${funded}</p>
                <button onClick={() => props.handleAddAmount(props.employee)} className="btn-regular">{element}  Add amount</button>
            </div>
        </div>
    );
};

export default Employee;