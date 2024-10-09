import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import reportWebVitals from './reportWebVitals';
import Layout from "./Layout";
import TransactionForm from './Grocery/TransactionForm';
import TransactionList from './Grocery/TransactionList';
import ProfitLossPage from './Grocery/ProfitLoss';
import ProfitLossDate from './Grocery/ProfitLossDate';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/ >}>
     <Route path='/transactions' element={<TransactionList />} />
     <Route path="/transactions/add" element={<TransactionForm/>}/>
     <Route path="/transactions/profit-loss" element={<ProfitLossPage/>}/> 
     <Route path="/transactions/profit-loss/date" element={<ProfitLossDate/>}/> 

     </Route>
    </Routes>
  </BrowserRouter>
</>
);
