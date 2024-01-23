import React from 'react';
import * as S from './Styled/Candy.main';
import TopNav from '../../../Pages/TopNav/TopNav.main';
import candyicon from '../../../Assets/img/mypage/candy.png';
import { useNavigate } from 'react-router-dom';

function Candy() {
  const userName = localStorage.getItem('user-name');
  const userCandy = localStorage.getItem('user-candy');
  const navigate = useNavigate();

  const candyOptions = [
    { amount: 10, price: 1200 },
    { amount: 20, price: 2400 },
    { amount: 40, price: 4800 },
    { amount: 60, price: 7200 },
    { amount: 100, price: 12000 },
    { amount: 200, price: 24000 },
  ];

  const handleCandyPurchase = (amount) => {
    console.log(`Purchased ${amount} candies`);
    navigate('tosspage');
  };

  return (
    <S.TotalWrapper>
      <TopNav />
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title>캔디 구매하기</S.Title>
        </S.TitleWrapper>
        <S.PurchaseWrapper>
          <S.ProfileWrapper>
            <S.UserNameContainer>
              <S.UserName>{userName}</S.UserName>
              <S.UserNameKeyWord> 님의 보유 캔디 수</S.UserNameKeyWord>
            </S.UserNameContainer>
            <S.CandyKeyword>CANDY</S.CandyKeyword> {`${userCandy} 개`}
          </S.ProfileWrapper>
          <S.CandyOptionList>
            {candyOptions.map((option) => (
              <S.CandyOption
                key={option.amount}
                onClick={() => handleCandyPurchase(option.amount)}
              >
                <S.CandyTextGroup>
                  <img src={candyicon} alt="Candy Icon" />
                  캔디 {option.amount}개
                </S.CandyTextGroup>
                <S.CandyPrice>₩{option.price}</S.CandyPrice>
              </S.CandyOption>
            ))}
          </S.CandyOptionList>
        </S.PurchaseWrapper>
      </S.ContentWrapper>
    </S.TotalWrapper>
  );
}

export default Candy;
