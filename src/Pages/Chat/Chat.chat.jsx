import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as calendar from './Styled/Chat.calendar';
import Modal from './Auth_Modal';
import axios from 'axios';

const ChatChat = () => {
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
    const websocket = new WebSocket('ws://3.35.3.205:8080/ws');
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

  return <calendar.TotalWrapper></calendar.TotalWrapper>;
};

export default ChatChat;
