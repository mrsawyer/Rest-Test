import React, { useState, useEffect } from 'react';
import { Table } from './components/Table';
import { ITransaction } from './contracts/Transaction.interface';
import './App.scss';

const App: React.FC = () => {
    const [dataLoading, setDataLoading] = useState<boolean>(false);
    const [totalAmount, setTotalAmount] = useState<number | undefined>();
    const [allTransactions, setAllTransactions] = useState<
        ITransaction[] | undefined
    >([
        {
            Date: '2013-12-22',
            Ledger: 'Phone & Internet Expense',
            Amount: '-110.71',
            Company: 'SHAW CABLESYSTEMS CALGARY AB',
        },
        {
            Date: '2013-12-22',
            Ledger: 'Phone & Internet Expense',
            Amount: '-110.71',
            Company: 'SHAW CABLESYSTEMS CALGARY AB',
        },
    ]);

    return (
        <div className="app">
            <header className="app-header">
                <h1>Bench Test</h1>
            </header>
            {!dataLoading && allTransactions && totalAmount && (
                <Table
                    transactions={allTransactions}
                    totalAmount={totalAmount}
                />
            )}
            {dataLoading && <div className="loading-spinner"></div>}
        </div>
    );
};

export default App;
