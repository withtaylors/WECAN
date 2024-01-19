import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import TopNav from '../TopNav/TopNav.main';
import * as chgincruit from './Styled/ChallengeMake.incruitMake.js';
import DropdownChallengeType from './DropdownChallengeType.jsx';
import DropdownPaymentType from './DropdownPaymentType.jsx';
import DropdownStartDate from './DropdownStartDate.jsx';
import DropdownEndDate from './DropdownEndDate.jsx';
import DropdownDonateField from './DropdownDonateField.jsx';
function ChallengeIncruitMake() {
  const [selectedType, setSelectedType] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [selectedPayment, setSelectedPayment] = useState();
  const [selectedfDonatefield, setSelectedDonateField] = useState();
  const [selectedDonateName, setSelectedDonateName] = useState();
  const [teamNumber, setTeamNumber] = useState(5);
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
  const [inputTeamNumber, setInputTeamNumber] = useState(''); // 입력값을 받기 위한 state
  const handleStartDateChange = (year, month, day) => {
    setSelectedYear(year);
    setSelectedMonth(month);
    setSelectedDay(day);
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

  return (
    <chgincruit.totalWrapper>
      <chgincruit.title>챌린저 모집하기</chgincruit.title>
      <chgincruit.realWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>챌린지 유형 선택하기 </chgincruit.subtitle>
          <chgincruit.subcontent>
            <DropdownChallengeType
              type={selectedType}
              onTypeChange={handleTypeChange}
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
              <button onClick={handleSetTeamNumber}>설정</button>
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
              year={selectedYear}
              month={selectedMonth}
              day={selectedDay}
              onTypeChange={handleStartDateChange}
            ></DropdownStartDate>
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>챌린지 종료일</chgincruit.subtitle>
          <chgincruit.subcontent>
            <DropdownEndDate
              year={selectedYear}
              month={selectedMonth}
              day={selectedDay}
              onTypeChange={handleStartDateChange}
            ></DropdownEndDate>
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>기부 방식</chgincruit.subtitle>
          <chgincruit.subcontent>
            <DropdownPaymentType
              type={selectedType}
              onTypeChange={handlePaymentChange}
            ></DropdownPaymentType>
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>챌린지 인증 요일</chgincruit.subtitle>
          <chgincruit.subcontent></chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>벌금 선택하기</chgincruit.subtitle>
          <chgincruit.subcontent>
            <chgincruit.teamNumberWrapper>
              캔디<chgincruit.teamNumber></chgincruit.teamNumber>개
            </chgincruit.teamNumberWrapper>
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper2>
          <chgincruit.subtitle>기부 단체 선택하기</chgincruit.subtitle>
          <chgincruit.subsubcontent>
            <chgincruit.subcontent>
              <DropdownDonateField
                type={selectedfDonatefield}
                onTypeChange={handleDonanteFieldChange}
              ></DropdownDonateField>
            </chgincruit.subcontent>
            <chgincruit.subcontent>
              <DropdownDonateField
                type={selectedDonateName}
                onTypeChange={handleDonateNameChange}
              ></DropdownDonateField>
            </chgincruit.subcontent>
          </chgincruit.subsubcontent>
        </chgincruit.contentlineWrapper2>
      </chgincruit.realWrapper>
      {selectedType}
      {selectedPayment}
      {selectedfDonatefield}
      {selectedDonateName}
      {teamNumber}
    </chgincruit.totalWrapper>
  );
}
export default ChallengeIncruitMake;
