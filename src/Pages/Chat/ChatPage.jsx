import React, { useState, useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Styled/ChatPage.module.css';
import Modal from './Auth_Modal';

const ChatPage = ({ userId, userNickName }) => {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState({
    title: '',
    startDate: '',
    endDate: '',
    successRate: '',
    chattingRoomId: null,
    chattingList: [],
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false); // Function to close modal
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
      stomp.subscribe('/sub/chat/room/' + data.chattingRoomId, (chat) => {
        const content = JSON.parse(chat.body);
        setMessages((prev) => [...prev, content]);
      });
    };

    setStompClient(stomp);

    return () => {
      stomp.deactivate();
    };
  }, [data.chattingRoomId]);

  //채팅 메세지 전송
  const sendMessage = () => {
    if (stompClient && inputMessage) {
      const now = new Date();
      const currentTime = now.toISOString();

      const chatMessage = {
        type: 'TALK',
        roomId: data.chattingRoomId,
        userId: userId,
        nickName: userNickName,
        message: inputMessage,
        time: currentTime,
      };

      stompClient.publish({
        destination: '/pub/sendMessage',
        headers: {},
        body: JSON.stringify(chatMessage),
      });

      console.log('Message sent:', chatMessage);
      setInputMessage('');
    }
  };

  return (
    <div>
      <div className={styles.calendarContainer}>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          minDate={new Date(data.startDate)}
          maxDate={today}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h3>Selected Date</h3>
          <p>{selectedDate.toDateString()}</p>
        </div>
      </Modal>
      <div className="chat-room">
        <h2>{data.title}</h2>
        <p>Start Date: {data.startDate}</p>
        <p>End Date: {data.endDate}</p>
        <p>Success Rate: {data.successRate}</p>
        <div className={styles.messagesContainer}>
          {messages.map((msg, index) => (
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
        <div className={styles.inputArea}>
          <input
            type="text"
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
