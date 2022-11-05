import styled from '@emotion/styled';

export const TableHeaderRow = styled.tr`
  width: 126px;
  height: 45px;
  background-color: ${p => p.theme.colors.tableTitleColor};
`;

export const TableTitle = styled.th`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const TransactionRow = styled.tr`
  height: 35px;
  text-align: center;
  background-color: ${p => p.theme.colors.white};
  :nth-of-type(2n) {
    background-color: ${p => p.theme.colors.tableRowSecondColor};
  }
`;

export const TransactionDetails = styled.td`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
`;
