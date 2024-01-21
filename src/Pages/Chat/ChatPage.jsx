import React, { useState, useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Styled/ChatPage.module.css';

const ChatPage = ({ userId, userNickName, onDateSelect }) => {
  //   const today = new Date();
  //   today.setHours(23, 59, 59, 999);
  //   const [data, setData] = useState({
  //     title: '',
  //     startDate: '',
  //     endDate: '',
  //     successRate: '',
  //     chattingRoomId: null,
  //     chattingList: [],
  //   });
  //   const handleDateChange = (newDate) => {
  //     setSelectedDate(newDate);
  //     if (typeof onDateSelect === 'function') {
  //       onDateSelect(newDate, setData);
  //     } else {
  //       console.error('handleondateSelect 오류');
  //     }
  //   };
  //   const parsedStartDate =
  //     data && data.startDate ? new Date(data.startDate) : new Date();
  //   const parsedEndDate =
  //     data && data.endDate ? new Date(data.endDate) : new Date();
  // const [stompClient, setStompClient] = useState(null);
  //   useEffect(() => {
  //     // WebSocket 및 STOMP 설정
  //     const websocket = new WebSocket("ws://3.35.3.205:8080/ws");
  //     const stomp = new Client({
  //       webSocketFactory: () => websocket
  //     });
  //     stomp.activate();
  //     stomp.onConnect = () => {
  //       console.log("STOMP Connection");
  //       // 채팅방 구독
  //       stomp.subscribe("/sub/chat/room/" + data.chattingRoomId, (chat) => {
  //         const content = JSON.parse(chat.body);
  //         setMessages(prev => [...prev, content]);
  //       });
  //     };
  //     setStompClient(stomp);
  //     return () => {
  //       stomp.deactivate();
  //     };
  //   }, [data.chattingRoomId]);
  //   const sendMessage = () => {
  //     if (stompClient && inputMessage) {
  //       const now = new Date();
  //       const currentTime = now.toISOString();
  //       const chatMessage = {
  //         type: 'TALK',
  //         roomId: data.chattingRoomId,
  //         userId: userId,
  //         nickName: userNickName,
  //         message: inputMessage,
  //         time: currentTime,
  //       };
  //       stompClient.publish({
  //         destination: '/pub/sendMessage',
  //         headers: {},
  //         body: JSON.stringify(chatMessage),
  //       });
  //       console.log('Message sent:', chatMessage);
  //       setInputMessage('');
  //     }
  //   };
  //   return (
  //     <div>
  //       <div className={styles.calendarContainer}>
  //         <Calendar
  //           onChange={handleDateChange}
  //           value={selectedDate}
  //           minDate={new Date(data.startDate)}
  //           maxDate={today}
  //         />
  //       </div>
  //       <div className="chat-room">
  //         <h2>{data.title}</h2>
  //         <p>Start Date: {data.startDate}</p>
  //         <p>End Date: {data.endDate}</p>
  //         <p>Success Rate: {data.successRate}</p>
  //         <div className="messages-container">
  //           {messages.map((msg, index) => (
  //             <div
  //               key={index}
  //               className={`message ${msg.userId === userId ? 'mine' : ''}`}
  //             >
  //               <span className="message-nickName">{msg.nickName}</span>:{' '}
  //               {msg.message}
  //             </div>
  //           ))}
  //         </div>
  //         <div className="input-area">
  //           <input
  //             type="text"
  //             value={inputMessage}
  //             onChange={(e) => setInputMessage(e.target.value)}
  //           />
  //           <button onClick={sendMessage}>Send</button>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default ChatPage;
