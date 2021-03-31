import React from 'react';
import { ITransaction } from '../contracts/Transaction.interface';

interface TableProps {
    transactions: ITransaction[];
    totalAmount: number;
}

export const Table: React.FC<TableProps> = ({ transactions, totalAmount }) => {

    return (
        <div className="transaction-table">
        </div>
    );
};
