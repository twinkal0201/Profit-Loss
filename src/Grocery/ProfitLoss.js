
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
