import React from 'react';
import './Funds.css';

const Funds = (props) => {
    // console.log(props);
    const {fundedInfo} = props;
    // console.log(fundedInfo);

    let total = 0;
    for(const data of fundedInfo) {
        total = total + data.funded;
    }
    return (
        <div>
           <h2>Employers Added : {fundedInfo.length}</h2> 
           <h2>Total Funded Amount: ${total} </h2>
           <div>
               {
                   fundedInfo.map(emp => <h4 className="employee-name">{emp.name}</h4>)
               }
           </div>
        </div>
    );
};

export default Funds;