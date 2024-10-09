import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfitLossDate() {
    const [data, setData] = useState({});
    const { date } = useParams();

    useEffect(() => {
        fetch("http://localhost:5001/transactions/profit-loss/date/" + date)
            .then(res => res.json())
            .then(res => {
                console.log(res); // Log the API response
                setData(res);
            })
            .catch(error => console.error("Error fetching data:", error)); // Catch any errors
    }, [date]);

    const profitOrLoss = Number(data.sale) - Number(data.expense);

    return (
        <>
            <h1>This date: {data.date?.value}</h1>
            <h2>Profit or Loss: {isNaN(profitOrLoss) ? 'N/A' : profitOrLoss}</h2>
        </>
    );
}


export default ProfitLossDate;

// const ProfitLossdDate = ({ transactions }) => {

//     const [profitOrLoss,setprofitOrLoss]=useState();
//     // const totalSales = transactions.reduce((acc, curr) => acc + curr.sales, 0);
//     // const totalExpense = transactions.reduce((acc, curr) => acc + curr.expense, 0);
//     // const profitOrLoss = totalSales - totalExpense;

//     return (
//         <div>
//             <h2><u>------Total Profit/Loss------</u></h2>
//             <h2>profitOrLoss= {totalSales-totalExpense} </h2>
//             {/* <h3>profitOrLoss >= 0 ? Profit: $${profitOrLoss} : Loss: $${Math.abs(profitOrLoss)}</h3> */}
//         </div>
//     );
// }




// import React from 'react';

// const Summary = ({ transactions }) => {
//     // Further breakdowns could be implemented here
//     return (
//         <div>
//             <h2><u>------Total no of Transaction Today------</u></h2>
//             <p>Total transactions: {transactions.length}</p>
//             <b>Happy Day!</b>
//         </div>
//     );
// }

// export default ProfitLossdDate;
