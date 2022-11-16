import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { FriendsItem } from '../FriendListItem/FriendListItem';

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
        <FriendsItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
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
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
