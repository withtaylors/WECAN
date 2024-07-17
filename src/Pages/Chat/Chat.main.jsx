import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as chat from './Styled/Chat.main';
// import ChatChat from './Chat.chat';
import ChatCalendar from './Chat.calendar';
import Chattingroom from './Chat.chat';
import axios from 'axios';
import * as SockJS from 'sockjs-client';

const ChatMain = () => {
  const { challengeId } = useParams();
  const baseURL = 'http://3.35.3.205:8080';
  const PROXY ='https://wecanomg.shop';
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
          `${PROXY}/challenge/info/${challengeId}`,
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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState({
    title: '',
    startDate: '',
    endDate: '',
    successRate: '',
    chattingRoomId: chattingInfo.chattingRoomId,
    chattingList: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // WebSocket 및 STOMP 설정
    const websocket = new SockJS('https://wecanomg.shop/ws');
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
    };

    stomp.onWebSocketError = (event) => {
      console.error('WebSocket Error:', event);
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
        `${PROXY}/challenge/info/${challengeId}`,
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
  const sendMessage = () => {
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
      console.log('Message sent:', chatMessage);
      fetchChattingRoomInfo();
      setInputMessage('');
    }
  };

  return (
    <chat.TotalWrapper>
      <ChatCalendar></ChatCalendar>
      <Chattingroom></Chattingroom>
    </chat.TotalWrapper>
  );
};

export default ChatMain;
