import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import Funds from '../Funds/Funds';
import './Main.css';

const Main = () => {
    const [employees,setEmployees] = useState([]);
    const [fundsInfo,setFundsInfo] = useState([]);
    useEffect(() => {
        fetch('./output.JSON')
            .then(res => res.json())
            .then(data => setEmployees(data));
    },[]);

    const handleAddAmount = (result) => {
        // console.log(result);
        const addNew = [...fundsInfo,result];
        setFundsInfo(addNew);
    }
    return (
        <div className="main-container">
            <div className="employers-container">
                {
                    employees.map(employee => <Employee 
                        key={employee.key}
                        employee={employee}
                        handleAddAmount={handleAddAmount}
                        ></Employee>)
                }
            </div>
            <div className="funds-container">
                <Funds fundedInfo={fundsInfo}></Funds>
            </div>
        </div>
    );
};

export default Main;