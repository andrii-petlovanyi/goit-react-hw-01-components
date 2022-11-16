import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendAvatar,
  FriendsStatus,
  FriendsName,
} from './FriendListItem.styled';

export const FriendsItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <FriendItem>
        <FriendsStatus isOnline={isOnline}>{isOnline}</FriendsStatus>
        <FriendAvatar src={avatar} />
        <FriendsName>{name}</FriendsName>
      </FriendItem>
    </>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
