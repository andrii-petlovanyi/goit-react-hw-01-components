import React from 'react';
import PropTypes from 'prop-types';
import {
  UserAvatar,
  UserInfo,
  UserTitle,
  StatsList,
  StatsItem,
  StatsNumbers,
} from './Profile.styled';
import { Box } from '../Box';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Box
      width={320}
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx="auto"
      mt="45px"
      pt="25px"
      boxShadow="custom"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <UserAvatar src={avatar} alt={`Avatar ` + username} width="100" />
        <UserTitle>{username}</UserTitle>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Box>
      <StatsList>
        <StatsItem>
          <UserInfo>Followers</UserInfo>
          <StatsNumbers>{followers}</StatsNumbers>
        </StatsItem>
        <StatsItem>
          <UserInfo>Views</UserInfo>
          <StatsNumbers>{views}</StatsNumbers>
        </StatsItem>
        <StatsItem>
          <UserInfo>Likes</UserInfo>
          <StatsNumbers>{likes}</StatsNumbers>
        </StatsItem>
      </StatsList>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
