import React, { useEffect, useState } from 'react';
import * as chat from './Styled/Chat.chatting';
import { useParams } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import axios from 'axios';
import smile from '../../Assets/img/smile.png';
import sendButton from '../../Assets/img/sendbutton.png';
import Chatting from './Chat.chatting';

function Chat() {
  const { challengeId } = useParams();
  const PROXY = 'https://wecanomg.shop';
  const userName = localStorage.getItem('user-name');
  const userId = localStorage.getItem('user-id');
  const userIdLong = parseInt(userId, 10);

  const [loading, setLoading] = useState(false);
  const [chattingInfo, setChattingInfo] = useState({});
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const fetchChallengeThree = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${PROXY}/challenge/info/${challengeId}`, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('login-token') },
        });
        console.log('채팅방 정보:', response);
        setChattingInfo(response.data.data);
        setMessages(response.data.data.chattingList || []);
      } catch (error) {
        console.error('채팅방 정보 불러오기 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallengeThree();
  }, [challengeId]);

  useEffect(() => {
    const websocket = new SockJS('https://wecanomg.shop/ws');
    const stomp = new Client({
      webSocketFactory: () => websocket,
    });

    stomp.activate();

    stomp.onConnect = () => {
      console.log('STOMP Connection');
      stomp.subscribe(`/sub/chat/room/${chattingInfo.chattingRoomId}`, (chat) => {
        const content = JSON.parse(chat.body);
        setMessages(prevMessages => [...prevMessages, content]);
      });
    };

    setStompClient(stomp);

    return () => stomp.deactivate();
  }, [chattingInfo.chattingRoomId]);

  const sendMessage = async () => {
    if (stompClient && inputMessage) {
      const now = new Date();
      const chatMessage = {
        type: 'TALK',
        roomId: chattingInfo.chattingRoomId,
        userId: userIdLong,
        nickName: userName,
        message: inputMessage,
        time: now.toISOString(),
      };
  
      stompClient.publish({
        destination: '/pub/sendMessage',
        body: JSON.stringify(chatMessage),
      });
  
      // 메시지 로컬에 추가
      setMessages(prevMessages => [...prevMessages, chatMessage]);
      setInputMessage('');
  
      // 서버에 메시지 저장
    }
  };
  

  return (
    <chat.totalWrapper>
      <chat.messagesWrapper>
        {messages.map((msg, index) => (
          <Chatting key={index} data={msg}></Chatting>
        ))}
      </chat.messagesWrapper>
      <chat.inputWrapper>
        <chat.smileImg src={smile} />
        <chat.realInputWrapper
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <chat.sendButtonWrapper>
          <chat.sendButoon src={sendButton} onClick={sendMessage} />
        </chat.sendButtonWrapper>
      </chat.inputWrapper>
    </chat.totalWrapper>
  );
}

export default Chat;
