import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as challenging from './Styled/Home.main.challenging';
import CategoryCard from '../Category/Category.card';

function ChallengeCruiting() {
  const categories = [
    { title: '챌린지 1', date: '2023-11-01' },
    { title: '챌린지 2', date: '2023-12-02' },
    { title: '챌린지 3', date: '2023-10-11' },
  ];
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };

  return (
    <challenging.challengeWrapper>
      <challenging.firstblock>
        <challenging.top>
          <challenging.title>현재 모집 중인 챌린지</challenging.title>
          <challenging.buttoncruiting>
            챌린저 모집하기
          </challenging.buttoncruiting>
        </challenging.top>
        <challenging.secondblock>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              date={category.date}
            />
          ))}
        </challenging.secondblock>
        <challenging.thirdblock>
          {' '}
          <challenging.buttoninfo
            onClick={(e) => {
              NavClick(e, '/recruitment/all');
            }}
          >
            더보기{'->'}
          </challenging.buttoninfo>
        </challenging.thirdblock>
      </challenging.firstblock>
      <challenging.firstblock>
        <challenging.top>
          <challenging.title>굿즈샵</challenging.title>
        </challenging.top>
        <challenging.secondblock>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              date={category.date}
            />
          ))}
        </challenging.secondblock>
        <challenging.thirdblock>
          {' '}
          <challenging.buttoninfo>더보기{'->'}</challenging.buttoninfo>
        </challenging.thirdblock>
      </challenging.firstblock>
    </challenging.challengeWrapper>
  );
}

export default ChallengeCruiting;
