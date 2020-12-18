import React, { useState, useEffect } from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import api from '../../services/api';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';

import { Container, CardContainer, Card, TableContainer } from './styles';
import { useAuth } from '../../hooks/Auth';

interface Transaction {
  id: string;
  createdAt: Date;
  description: string;
  title: string;
  value: number;
  // formattedValue: string;
  // formattedDate: string;
  type: string;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);
  const { user } = useAuth();

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      api.get(`/transaction/${user.id}`).then(response => {
        const transactionsFormatted = response.data.transactions.map(
          (transaction: Transaction) => ({
            ...transaction,
            value: formatValue(transaction.value),
            createdAt: new Date(transaction.createdAt).toLocaleDateString(
              'pt-br',
            ),
          }),
        );

        const balanceFormatted = {
          income: formatValue(response.data.balance.income),
          outcome: formatValue(response.data.balance.outcome),
          total: formatValue(response.data.balance.total),
        };

        setTransactions(transactionsFormatted);
        setBalance(balanceFormatted);
      });
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">{balance.income}</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">{balance.outcome}</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">{balance.total}</h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Descrição</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className="title">{transaction.title}</td>
                  <td className={transaction.type}>
                    {transaction.type === 'outcoming' && ' - '}
                    {transaction.value}
                  </td>
                  <td>{transaction.description}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
