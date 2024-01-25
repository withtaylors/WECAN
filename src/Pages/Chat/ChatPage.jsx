import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Styled/ChatPage.module.css';
import Modal from './Auth_Modal';
import axios from 'axios';
import Chatting from './Chat.chatting';
import Chat from './Chat.chat';

const ChatPage = () => {
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

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.challengeInfo}>
          <h2>{data.title}</h2>
          <p>달성률: {data.successRate}%</p>
          {/* 여기에 다른 챌린지 정보를 추가할 수 있습니다 */}
        </div>
        <div className={styles.calendarContainer}>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            minDate={new Date(data.startDate)}
            maxDate={today}
            formatDay={(locale, date) => date.getDate().toString()}
          />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} date={selectedDate}>
        <div>
          <h3>Selected Date</h3>
          <p>{selectedDate.toDateString()}</p>
        </div>
      </Modal>
      <div className={styles.chatRoom}>
        <h2>{data.title}</h2>
        <div className={styles.messagesContainer}>
          {chattingInfo &&
            chattingInfo.chattingList &&
            chattingInfo.chattingList.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.userId === userId ? styles.mine : ''
                }`}
              >
                <span className={styles.messageNickName}>{msg.nickName}</span>:{' '}
                {msg.message}
              </div>
            ))}
        </div>
        <Chat></Chat>
        <Chatting></Chatting>
        <div className={styles.inputArea}>
          <input
            type='text'
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className={styles.input}
          />
          <button onClick={sendMessage} className={styles.sendButton}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
