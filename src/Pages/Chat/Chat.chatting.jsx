import React, { useEffect, useState, useRef } from 'react';
import * as chat from './Styled/Chat.chatting';
import profileimg from '../../Assets/img/profile.png';
function Chatting(props) {
  const userName = localStorage.getItem('user-name');
  const name = props.data && props.data.nickName;
  const message = props.data && props.data.message;
  const time = props.data && props.data.time;
  return (
    <div>
      {userName != name ? (
        <chat.lineTotalWrapper>
          <chat.profileWrapper>
            <chat.profileImg src={profileimg}></chat.profileImg>
          </chat.profileWrapper>
          <chat.innerWrapper>
            <chat.userName>{name}</chat.userName>
            <chat.TextWrapper>
              <chat.Text>{message}</chat.Text>
            </chat.TextWrapper>
            <chat.TimeWrapper>{time}</chat.TimeWrapper>
          </chat.innerWrapper>
        </chat.lineTotalWrapper>
      ) : (
        <chat.lineTotalWrapper2>
          <chat.innerWrapper>
            <chat.userName2>{name}</chat.userName2>
            <chat.TextWrapper>
              <chat.Text>{message}</chat.Text>
            </chat.TextWrapper>
            <chat.TimeWrapper>{time}</chat.TimeWrapper>
          </chat.innerWrapper>
        </chat.lineTotalWrapper2>
      )}
    </div>
  );
}

export default Chatting;
