import React, { useState } from 'react';
import Header from './Header';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import ProfitLoss from './ProfitLoss';
import Summary from './Summary';
import './App.css';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    return (
        <div className="App">
            <Header />
            <TransactionForm addTransaction={addTransaction} />
            <ProfitLoss transactions={transactions} />
            <TransactionList transactions={transactions} />
            <Summary transactions={transactions} />
        </div>
    );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
