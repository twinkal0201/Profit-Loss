
import React, {  useState } from 'react';

function ProfitLossPage() {
    const [profitLossData, setProfitLossData] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const fetchProfitLossData = () => {
        fetch(`http://localhost:5001/transactions/profit-loss/date-wise?startDate=${startDate}&endDate=${endDate}`)
            .then((res) => res.json())
            .then((data) => setProfitLossData(data))
            .catch((error) => console.error('Error fetching profit and loss data:', error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchProfitLossData();
    };

    if (!profitLossData) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Start Date:
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                    </label>
                    <label>
                        End Date:
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                    </label>
                    <button type="submit">Get Profit/Loss</button>
                </form>
            </div>
        );
    }

    return (
        <div>
            <h1>Profit and Loss</h1>
            <h2>Total Sales: {profitLossData.totalSales}</h2>
            <h2>Total Expenses: {profitLossData.totalExpenses}</h2>
            <h2>Profit/Loss: {profitLossData.profitLoss}</h2>
        </div>
    );
}

export default ProfitLossPage;
// import React, { useEffect, useState } from 'react';

// function ProfitLossPage() {
//     const [transactions, setTransactions] = useState([]);
//     const [profitLoss, setProfitLoss] = useState(0);

//     useEffect(() => {
//         fetch("http://localhost:5001/transactions") // Adjust the URL as needed
//             .then((res) => res.json())
//             .then((data) => {
//                 setTransactions(data);
//                 calculateProfitLoss(data);
//             })
//             .catch((error) => console.error('Error fetching transactions:', error));
//     }, []);

//     const calculateProfitLoss = (data) => {
//         const totalSales = data.reduce((acc, transaction) => acc + (transaction.sale || 0), 0);
//         const totalExpenses = data.reduce((acc, transaction) => acc + (transaction.expense || 0), 0);
//         setProfitLoss(totalSales - totalExpenses);
//     };

//     return (
//         <div>
//             <h1>Profit and Loss</h1>
//             <h2>Profit/Loss: {profitLoss}</h2>
//             <h3>Transactions:</h3>
//             <ul>
//                 {transactions.map((transaction, index) => (
//                     <li key={index}>
//                         Date: {transaction.date}, Sale: {transaction.sale}, Expense: {transaction.expense}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ProfitLossPage;


// // import React from 'react';

// // const ProfitLoss = ({ transactions }) => {
// //     const totalSales = transactions.reduce((acc, curr) => acc + curr.sales, 0);
// //     const totalExpense = transactions.reduce((acc, curr) => acc + curr.expense, 0);
// //     const profitOrLoss = totalSales - totalExpense;

// //     return (
// //         <div>
// //             <h2><u>------Total Profit/Loss------</u></h2>
// //             <h3>{profitOrLoss >= 0 ? Profit: $${profitOrLoss} : Loss: $${Math.abs(profitOrLoss)}}</h3>
// //         </div>
// //     );
// // }

// // export default ProfitLoss;
