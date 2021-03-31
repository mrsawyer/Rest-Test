import React, { useState, useEffect } from 'react';
import { Table } from './components/Table';
import { ITransaction } from './contracts/Transaction.interface';
import './App.scss';

const App: React.FC = () => {
    const [dataLoading, setDataLoading] = useState<boolean>(true);
    const [totalAmount, setTotalAmount] = useState<number | undefined>();
    const [allTransactions, setAllTransactions] = useState<
        ITransaction[] | undefined
    >(undefined);

    const getAllTransactions = async (
        transactions: ITransaction[] = [],
        page = 1,
    ) => {
        try {
            const data = await fetch(
                `https://resttest.bench.co/transactions/${page}.json`,
            ).then((response) => response.json());
            transactions = [...transactions, ...data.transactions];
            if (transactions.length < data.totalCount) {
                getAllTransactions(transactions, page++);
            } else {
                setAllTransactions(transactions);
                setDataLoading(false);
            }
        } catch (error) {
            console.error(error);
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
            {dataLoading && <div className="loading-spinner"></div>}
        </div>
    );
};

export default App;
