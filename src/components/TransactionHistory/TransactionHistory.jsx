import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import {
  TableTitle,
  TableHeaderRow,
  TransactionRow,
  TransactionDetails,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Box as="table" width={480} mx="auto" my="60px" p="0" boxShadow="custom">
      <thead>
        <TableHeaderRow>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </TableHeaderRow>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionRow key={id}>
              <TransactionDetails>
                {type[0].toUpperCase() + type.slice(1)}
              </TransactionDetails>
              <TransactionDetails>{amount}</TransactionDetails>
              <TransactionDetails>{currency}</TransactionDetails>
            </TransactionRow>
          );
        })}
      </tbody>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
