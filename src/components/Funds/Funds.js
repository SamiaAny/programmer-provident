import React from 'react';
import './Funds.css';

const Funds = (props) => {
    const { fundedInfo } = props;

    let total = 0;
    for (const data of fundedInfo) {
        total = total + data.funded;
    }
    return (
        <div>
            <h2>Funds Info</h2>
            <div className="funds-detail">
                <h3>Employers Added : {fundedInfo.length}</h3>
                <h3>Total Funded Amount: ${total} </h3>
            </div>
            <div>
                {
                    fundedInfo.map(emp => <h4 className="employee-name">{emp.name}</h4>)
                }
            </div>
        </div>
    );
};

export default Funds;