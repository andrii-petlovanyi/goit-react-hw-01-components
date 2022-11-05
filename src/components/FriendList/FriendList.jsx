import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import {
  FriendsItem,
  FriendsName,
  FriendsStatus,
  FriendAvatar,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Box
      as="ul"
      mx="auto"
      mt="60px"
      p="0"
      width="320px"
      bg="white"
      display="flex"
      flexDirection="column"
      alignItems="flexStart"
      listStyle="none"
    >
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsItem key={id}>
          <FriendsStatus isOnline={isOnline}>{isOnline}</FriendsStatus>
          <FriendAvatar src={avatar} />
          <FriendsName>{name}</FriendsName>
        </FriendsItem>
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
