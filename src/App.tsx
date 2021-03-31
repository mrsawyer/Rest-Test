import React, { useState, useEffect } from 'react';
import { Table } from './components/Table';
import { ITransaction } from './contracts/Transaction.interface';
import './App.scss';

const App: React.FC = () => {
    const [dataLoading, setDataLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [totalAmount, setTotalAmount] = useState<number | undefined>();
    const [allTransactions, setAllTransactions] = useState<
        ITransaction[] | undefined
    >(undefined);

    const getAllTransactions = async (
        transactions: ITransaction[] = [],
        page = 1,
    ) => {
        try {
            const response = await fetch(
                `https://resttest.bench.co/transactions/${page}.json`,
            );
            if (!response.ok) {
                throw new Error('Bad response');
            }
            const data = await response.json();
            transactions = [...transactions, ...data.transactions];
            if (transactions.length < data.totalCount) {
                getAllTransactions(transactions, page++);
            } else {
                setAllTransactions(transactions);
                setDataLoading(false);
            }
        } catch (error) {
            console.error(error);
            setError(true);
            setDataLoading(false);
        }
    };

    useEffect(() => {
        getAllTransactions();
    }, []);

    useEffect(() => {
        if (allTransactions && allTransactions.length > 0) {
            setTotalAmount(
                allTransactions
                    .map((transaction) => {
                        return Number(transaction.Amount);
                    })
                    .reduce((a, b) => a + b, 0), //get total sum of all transactions
            );
        }
    }, [allTransactions]);

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
            {error && (
                <div className="error">
                    There was a problem loading your transactions, please
                    contact support.
                </div>
            )}
            {dataLoading && <div className="loading"> Loading...</div>}
        </div>
    );
};

export default App;
