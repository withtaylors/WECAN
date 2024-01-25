import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import styles from './Styled/ChatDesign.module.css';
import * as calendar from './Styled/Chat.calendar';
import Modal from './Auth_Modal';
import axios from 'axios';

const ChatCalendar = () => {
  const { challengeId } = useParams();
  const baseURL = 'http://3.35.3.205:8080';
  const userName = localStorage.getItem('user-name');
  const userId = localStorage.getItem('user-id');
  const userIdLong = parseInt(userId, 10);

  const [chattingInfo, setchattingInfo] = useState([]);
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const chattingRoomId = chattingInfo.chattingRoomId;
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

  useEffect(() => {
    const fetchChallengeData = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/challenge/info/${challengeId}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('login-token'),
            },
          }
        );
        const challengeData = response.data.data;
        setData({
          ...data,
          title: challengeData.title,
          startDate: challengeData.startDate,
          endDate: challengeData.endDate,
          successRate: challengeData.successRate,
        });
      } catch (error) {
        console.error('챌린지 데이터 불러오기 실패', error);
      }
    };

    fetchChallengeData();
  }, [challengeId]);

  return (
    <calendar.TotalWrapper>
      <calendar.InfoWrapper>
        <calendar.challengeInfoWrapper>
          <calendar.challengename>
            Challenge {data.title}{' '}
          </calendar.challengename>
          <calendar.date>
            {' '}
            진행날짜 {data.startDate} - {data.endDate}
          </calendar.date>
        </calendar.challengeInfoWrapper>
        <calendar.successrate>달성률 {data.successRate}</calendar.successrate>
      </calendar.InfoWrapper>
      <calendar.calendar className="myCalendar">
        <Calendar
          className={styles.calendardesign}
          onChange={handleDateChange}
          value={selectedDate}
          minDate={new Date(data.startDate)}
          maxDate={today}
          formatDay={(locale, date) => date.getDate().toString()}
        />

        <Modal isOpen={isModalOpen} onClose={closeModal} date={selectedDate}>
          <div>
            <h3>Selected Date</h3>
            <p>{selectedDate.toDateString()}</p>
          </div>
        </Modal>
      </calendar.calendar>
    </calendar.TotalWrapper>
  );
};

export default ChatCalendar;
