import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  UserInfo,
  UserTitle,
  Stats,
  StatsList,
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
      ml="auto"
      mr="auto"
      mt="45px"
      pt="25px"
      boxShadow="custom"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar src={avatar} alt={username} width="100" />
        <UserTitle>{username}</UserTitle>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Box>
      <Stats>
        <StatsList>
          <UserInfo>Followers</UserInfo>
          <StatsNumbers>{followers}</StatsNumbers>
        </StatsList>
        <StatsList>
          <UserInfo>Views</UserInfo>
          <StatsNumbers>{views}</StatsNumbers>
        </StatsList>
        <StatsList>
          <UserInfo>Likes</UserInfo>
          <StatsNumbers>{likes}</StatsNumbers>
        </StatsList>
      </Stats>
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
