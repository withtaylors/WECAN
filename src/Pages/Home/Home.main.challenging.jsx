import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as challenging from './Styled/Home.main.challenging';
import CategoryCard from '../Category/Category.card';
import request from '../../Api/request';
import { refreshToken } from '../../Api/request';
import { ACCESS_TOKEN } from '../../Api/request';
import axios from 'axios';
import GoodsCard from '../Category/Goods.card';

function ChallengeCruiting() {
  const [isSuccess, setIsSuccess] = useState(null);

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
  /////////////////////////////////////////////////////////////////////
  const baseURL = 'https://itstime.site';
  const PROXY =
    window.location.hostname === 'localhost'
      ? 'http://3.35.3.205:8080'
      : 'https://itstime.site';

  ////////////////////////////////////////////////////
  const [loading, setLoading] = useState(false);
  const [challengeThree, setChallengeThree] = useState([]);
  useEffect(() => {
    const fetchChallengeThree = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${PROXY}/recruits/home`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        });
        console.log('홈 챌린지 3개 불러오기:', response);
        setChallengeThree(response.data.data);
        console.log(challengeThree);
      } catch (error) {
        console.error('홈 챌린지 3개 불러오기 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallengeThree();
  }, []);
  ////////////////////////////////////////////////////////////////
  const [goodsThree, setGoodsThree] = useState([]);
  useEffect(() => {
    const fetchGoodsThree = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${PROXY}/shop/home`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        });
        console.log('굿즈 3개 불러오기:', response);
        setGoodsThree(response.data.data);
        console.log(goodsThree);
      } catch (error) {
        console.error('굿즈 3개 불러오기 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGoodsThree();
  }, []);

  return (
    <challenging.challengeWrapper>
      <challenging.firstblock>
        <challenging.top>
          <challenging.title>현재 모집 중인 챌린지</challenging.title>
          <challenging.buttoncruiting
            onClick={(e) => {
              NavClick(e, '/challengemake');
            }}
          >
            챌린저 모집하기
          </challenging.buttoncruiting>
        </challenging.top>
        <challenging.secondblock>
          {challengeThree.map((item) => (
            <CategoryCard key={item.index} data={item} />
          ))}
        </challenging.secondblock>
        <challenging.thirdblock>
          {' '}
          <challenging.buttoninfo
            onClick={(e) => {
              NavClick(e, '/recruitment/all');
            }}
          >
            더보기{'→'}
          </challenging.buttoninfo>
        </challenging.thirdblock>
      </challenging.firstblock>
      <challenging.firstblock>
        <challenging.top>
          <challenging.title>굿즈샵</challenging.title>
        </challenging.top>
        <challenging.secondblock>
          {goodsThree.map((item) => (
            <GoodsCard key={item.id} data={item} />
          ))}
        </challenging.secondblock>
        <challenging.thirdblock>
          {' '}
          <challenging.buttoninfo
            onClick={(e) => {
              NavClick(e, '/shop');
            }}
          >
            더보기{'→'}
          </challenging.buttoninfo>
        </challenging.thirdblock>
      </challenging.firstblock>
    </challenging.challengeWrapper>
  );
}

export default ChallengeCruiting;
