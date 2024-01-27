import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import TopNav from '../TopNav/TopNav.main';
import * as chgincruit from './Styled/ChallengeMake.incruitMake.js';
import DropdownChallengeType from './DropdownChallengeType.jsx';
import DropdownPaymentType from './DropdownPaymentType.jsx';
import DropdownStartDate from './DropdownStartDate.jsx';
import DropdownEndDate from './DropdownEndDate.jsx';
import DropdownDonateField from './DropdownDonateField.jsx';
import DropdownDonateName from './DropdownDonatename.jsx';
function ChallengeIncruitMake({ onUpdateSelectedValues }) {
  /////////////////////////////////////////////////////////
  const [selectedType, setSelectedType] = useState();
  const [endDate, setEndDate] = useState({
    year: null,
    month: null,
    day: null,
  });
  const [formattedStartDate, setFormattedStartDate] = useState('');
  const [formattedEndDate, setFormattedEndDate] = useState('');
  const [selectedPayment, setSelectedPayment] = useState();
  const [selectedfDonatefield, setSelectedDonateField] = useState();
  const [selectedDonateName, setSelectedDonateName] = useState();
  const [teamNumber, setTeamNumber] = useState(5);
  const [candyNumber, setCandyNumber] = useState(5);
  const [selectedWeekday, setSelectedWeekday] = useState();
  const [inputTeamNumber, setInputTeamNumber] = useState(''); // 입력값을 받기 위한 state
  const [inputCandyNumber, setInputCandyNumber] = useState(''); // 입력값을 받기 위한 state
  // Dropdowntype 컴포넌트에서 선택한 유형을 처리하는 함수
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  const handleDonanteFieldChange = (donatefield) => {
    setSelectedDonateField(donatefield);
  };
  const handleDonateNameChange = (payment) => {
    setSelectedDonateName(payment);
  };
  const handlePaymentChange = (payment) => {
    setSelectedPayment(payment);
  };
  const handleStartDateChange = (formattedStartDate) => {
    setFormattedStartDate(formattedStartDate);
  };

  const handleEndDateChange = (formattedEndDate) => {
    setFormattedEndDate(formattedEndDate);
  };
  const handleInputTeamNumberChange = (event) => {
    const value = event.target.value;
    // 숫자만 입력되도록 제한
    if (/^[0-9]*$/.test(value)) {
      setInputTeamNumber(value);
    }
  };
  const handleSetTeamNumber = () => {
    if (inputTeamNumber !== '') {
      setTeamNumber(parseInt(inputTeamNumber, 10));
    }
  };

  const handleSetWeekdayChange = (weekday) => {
    setSelectedWeekday(weekday);
  };

  const weekdays = ['월', '화', '수', '목', '금', '토', '일'];

  const handleSetCandyNumber = () => {
    if (inputCandyNumber !== '') {
      setCandyNumber(parseInt(inputCandyNumber, 10));
    }
  };
  const handleInputCandyNumberChange = (event) => {
    const value = event.target.value;
    // 숫자만 입력되도록 제한
    if (/^[0-9]*$/.test(value)) {
      setInputCandyNumber(value);
    }
  };

  const selectedValues = {
    selectedType,
    selectedPayment,
    selectedfDonatefield,
    selectedDonateName,
    teamNumber,
    selectedWeekday,
    candyNumber,
    formattedStartDate,
    formattedEndDate,
  };

  useEffect(() => {
    onUpdateSelectedValues(selectedValues, formattedStartDate);
  }, [selectedValues, formattedStartDate, onUpdateSelectedValues]);
  //////////////////////////////////////////////////////////
  return (
    <chgincruit.totalWrapper>
      <chgincruit.title>챌린저 모집하기</chgincruit.title>
      <chgincruit.realWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>챌린지 유형 선택하기 </chgincruit.subtitle>
          <chgincruit.subcontent>
            <DropdownChallengeType
              type={selectedType}
              onChange={handleTypeChange}
            />
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>팀원 수 선택하기</chgincruit.subtitle>
          <chgincruit.subcontent>
            <chgincruit.teamNumberWrapper>
              <label>
                최소
                <chgincruit.teamNumber
                  type='text'
                  value={inputTeamNumber}
                  onChange={handleInputTeamNumberChange}
                ></chgincruit.teamNumber>
                명 이상
              </label>
              <chgincruit.setButton onClick={handleSetTeamNumber}>
                설정
              </chgincruit.setButton>
              <chgincruit.teamNumberNotify>
                *최소 5명 이상
              </chgincruit.teamNumberNotify>
            </chgincruit.teamNumberWrapper>
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>챌린지 시작일</chgincruit.subtitle>
          <chgincruit.subcontent>
            <DropdownStartDate
              onChange={handleStartDateChange}
            ></DropdownStartDate>
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>챌린지 종료일</chgincruit.subtitle>
          <chgincruit.subcontent>
            <DropdownEndDate onChange={handleEndDateChange}></DropdownEndDate>
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>기부 방식</chgincruit.subtitle>
          <chgincruit.subcontent>
            <DropdownPaymentType
              type={selectedType}
              onChange={handlePaymentChange}
            ></DropdownPaymentType>
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>챌린지 인증 요일</chgincruit.subtitle>
          <chgincruit.subcontent>
            <chgincruit.weekdaysWrapper>
              {weekdays.map((weekday) => (
                <chgincruit.weekdayButton
                  key={weekday} // React에서 반복 요소에는 key 속성을 제공해야 합니다.
                  onClick={() => handleSetWeekdayChange(`${weekday}`)}
                  style={{
                    backgroundColor:
                      selectedWeekday === weekday ? ' #f9dee9' : 'initial',
                    color: selectedWeekday === weekday ? '#e06398' : 'gray',
                    borderColor:
                      selectedWeekday == weekday ? '#e06398' : 'gray',
                  }}
                >
                  {weekday}
                </chgincruit.weekdayButton>
              ))}
            </chgincruit.weekdaysWrapper>
            <chgincruit.teamNumberNotify2>
              *중복 선택 가능
            </chgincruit.teamNumberNotify2>
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>벌금 선택하기</chgincruit.subtitle>
          <chgincruit.subcontent>
            <chgincruit.teamNumberWrapper>
              <label>
                캔디
                <chgincruit.teamNumber
                  type='text'
                  value={inputCandyNumber}
                  onChange={handleInputCandyNumberChange}
                ></chgincruit.teamNumber>
                개
              </label>
              <chgincruit.setButton onClick={handleSetCandyNumber}>
                설정
              </chgincruit.setButton>
              <chgincruit.teamNumberNotify>
                *최소 1개 이상
              </chgincruit.teamNumberNotify>
            </chgincruit.teamNumberWrapper>
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper2>
          <chgincruit.subtitle>기부 단체 선택하기</chgincruit.subtitle>
          <chgincruit.subsubcontent>
            <chgincruit.subcontent>
              <DropdownDonateName
                type={selectedfDonatefield}
                onChange={handleDonanteFieldChange}
              ></DropdownDonateName>
            </chgincruit.subcontent>
            <chgincruit.subcontent>
              <DropdownDonateField
                type={selectedDonateName}
                onChange={handleDonateNameChange}
              ></DropdownDonateField>
            </chgincruit.subcontent>
          </chgincruit.subsubcontent>
        </chgincruit.contentlineWrapper2>
      </chgincruit.realWrapper>
    </chgincruit.totalWrapper>
  );
}
export default ChallengeIncruitMake;
