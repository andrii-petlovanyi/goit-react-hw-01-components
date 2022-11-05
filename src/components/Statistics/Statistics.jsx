import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import {
  StatisticTittle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
  StatisticPercent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      width={320}
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx="auto"
      my="45px"
      boxShadow="custom"
      as="section"
    >
      {title && <StatisticTittle>{title}</StatisticTittle>}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id}>
            <StatisticLabel>{label}</StatisticLabel>
            <StatisticPercent>{percentage}%</StatisticPercent>
          </StatisticItem>
        ))}
      </StatisticList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
