import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfitLossDate() {
    const [data, setData] = useState({});
    const { date } = useParams();

    useEffect(() => {
        fetch("http://localhost:5001/transactions/profit-loss/date/" + date)
            .then(res => res.json())
            .then(res => {
                console.log(res); 
                setData(res);
            })
            
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




