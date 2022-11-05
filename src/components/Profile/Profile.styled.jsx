import styled from '@emotion/styled';

export const UserAvatar = styled.img`
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.padding.xs};
`;

export const UserTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.xm};
  font-weight: ${p => p.theme.fontWeights.middle};
  margin-bottom: ${p => p.theme.space[0]}px;
`;

export const UserInfo = styled.p`
  margin-bottom: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.cardSecondTextColor};
`;

export const StatsList = styled.ul`
  display: flex;
  padding: ${p => p.theme.space[0]}px;
  list-style: none;
  margin-bottom: ${p => p.theme.space[0]}px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 105px;
  height: 80px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.borderColor};
  background-color: ${p => p.theme.colors.backgroundColorCard};
`;

export const StatsNumbers = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: 5px;
  color: ${p => p.theme.colors.text};
`;
