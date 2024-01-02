import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import TopNav from '../TopNav/TopNav.main';
import * as chgincruit from './Styled/ChallengeMake.incruitMake.js';
import DropdownChallengeType from './DropdownChallengeType.jsx';
import DropdownPaymentType from './DropdownPaymentType.jsx';
import DropdownStartDate from './DropdownStartDate.jsx';
function ChallengeIncruitMake() {
  const [selectedType, setSelectedType] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedDay, setSelectedDay] = useState();
  // Dropdowntype 컴포넌트에서 선택한 유형을 처리하는 함수
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  const handleStartDateChange = (year, month, day) => {
    setSelectedYear(year);
    setSelectedMonth(month);
    setSelectedDay(day);
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
            {selectedType}
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>팀원 수 선택하기</chgincruit.subtitle>
          <chgincruit.subcontent>
            <chgincruit.teamNumberWrapper>
              최소<chgincruit.teamNumber></chgincruit.teamNumber>명 이상
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
          <chgincruit.subcontent></chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>기부 방식</chgincruit.subtitle>
          <chgincruit.subcontent>
            <DropdownPaymentType
              type={selectedType}
              onTypeChange={handleTypeChange}
            ></DropdownPaymentType>
          </chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>챌린지 인증 요일</chgincruit.subtitle>
          <chgincruit.subcontent></chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>벌금 선택하기</chgincruit.subtitle>
          <chgincruit.subcontent></chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
        <chgincruit.contentlineWrapper>
          <chgincruit.subtitle>기부 단체 선택하기</chgincruit.subtitle>
          <chgincruit.subcontent></chgincruit.subcontent>
        </chgincruit.contentlineWrapper>
      </chgincruit.realWrapper>
    </chgincruit.totalWrapper>
  );
}
export default ChallengeIncruitMake;
