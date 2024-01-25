import React, { useEffect, useState, useRef } from 'react';
import * as chat from './Styled/Chat.chatting';
import { useParams, useNavigate } from 'react-router-dom';
import { Client } from '@stomp/stompjs';

import axios from 'axios';
import smile from '../../Assets/img/smile.png';
import sendButton from '../../Assets/img/sendbutton.png';
import Chatting from './Chat.chatting';
import * as SockJS from 'sockjs-client';
function Chat() {
  const { challengeId } = useParams();
  const baseURL = 'http://3.35.3.205:8080';
  const userName = localStorage.getItem('user-name');
  const userId = localStorage.getItem('user-id');
  const userIdLong = parseInt(userId, 10);
  //////////////////////////////////////////////////////
  const [loading, setLoading] = useState(false);
  const [chattingInfo, setchattingInfo] = useState([]);
  useEffect(() => {
    const fetchChallengeThree = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseURL}/challenge/info/${challengeId}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('login-token'),
            },
          }
        );
        console.log('채팅방 정보:', response);
        setchattingInfo(response.data.data);
      } catch (error) {
        console.error('채팅방 정보 불러오기 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallengeThree();
  }, []);
  //////////////////////////////////////////////////////
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const chattingRoomId = chattingInfo.chattingRoomId;
  ///////////////////////////////////////////////////////
  const [data, setData] = useState({
    title: '',
    startDate: '',
    endDate: '',
    successRate: '',
    chattingRoomId: chattingInfo.chattingRoomId,
    chattingList: [],
  });
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // SockJS 및 STOMP 설정
    const websocket = new SockJS('http://3.35.3.205:8080/ws');
    const stomp = new Client({
      webSocketFactory: () => websocket,
    });

    stomp.activate();

    stomp.onConnect = () => {
      console.log('STOMP Connection');

      // 채팅방 구독
      stomp.subscribe(`/sub/chat/room/` + { chattingRoomId }, (chat) => {
        const content = JSON.parse(chat.body);
        console.log('Received Message:', content);
        setMessages((prev) => [...prev, content]);
        console.log(content);
      });
    };
    stomp.onWebSocketClose = (event) => {
      console.error('WebSocket Closed:', event);
      // 웹소켓이 닫힌 경우 재연결 노력 등을 수행할 수 있습니다.
    };

    stomp.onWebSocketError = (event) => {
      console.error('WebSocket Error:', event);
      // 웹소켓 에러 처리를 수행할 수 있습니다.
    };

    setStompClient(stomp);

    return () => {
      stomp.deactivate();
    };
  }, [data.chattingRoomId]);
  ///////////////////////////////////////////////
  const fetchChattingRoomInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseURL}/challenge/info/${challengeId}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        }
      );
      console.log('채팅방 정보:', response);
      setchattingInfo(response.data.data);
    } catch (error) {
      console.error('채팅방 정보 불러오기 실패', error);
    } finally {
      setLoading(false);
    }
  };

  ///////////채팅 메세지 전송
  const sendMessage = async () => {
    if (stompClient && inputMessage) {
      const now = new Date();
      const currentTime = now.toISOString();

      const chatMessage = {
        type: 'TALK',
        roomId: chattingInfo.chattingRoomId,
        userId: userIdLong,
        nickName: userName,
        message: inputMessage,
        time: currentTime,
      };

      stompClient.publish({
        destination: '/pub/sendMessage',
        headers: {},
        body: JSON.stringify(chatMessage),
      });
      /////////////////////////////////////////////////////////
      await new Promise((resolve) => setTimeout(resolve, 100));
      await fetchChattingRoomInfo();
      setInputMessage('');
      console.log('Message sent:', chatMessage);
    }
  };

  return (
    <chat.totalWrapper>
      <chat.messagesWrapper>
        {chattingInfo &&
          chattingInfo.chattingList &&
          chattingInfo.chattingList.map((msg, index) => (
            <Chatting key={index} data={msg}></Chatting>
          ))}
      </chat.messagesWrapper>
      <chat.inputWrapper>
        <chat.smileImg src={smile}></chat.smileImg>
        <chat.realInputWrapper
          type='text'
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        ></chat.realInputWrapper>
        <chat.sendButtonWrapper>
          <chat.sendButoon
            src={sendButton}
            onClick={sendMessage}
          ></chat.sendButoon>
        </chat.sendButtonWrapper>
      </chat.inputWrapper>
    </chat.totalWrapper>
  );
}

export default Chat;
