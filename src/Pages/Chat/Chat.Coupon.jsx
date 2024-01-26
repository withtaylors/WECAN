import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as coupon from './Styled/Chat.Coupon';
import { GoBackButton } from './Styled/Chat.checkroom';

function ChatCoupon() {
  //   const navigate = useNavigate();
  //   const [couponNumber, setCouponNumber] = useState('');
  //   const goBack = () => {
  //     navigate(-1);
  //   };
  //   const handleCouponChange = (e) => {
  //     setCouponNumber(e.target.value);
  //   };
  //   const handleCouponSubmit = () => {};
  //   return (
  //     <coupon.TotalWrapper>
  //       <GoBackButton onClick={goBack}>X</GoBackButton>{' '}
  //       <coupon.num>쿠폰 번호</coupon.num>
  //       <coupon.text value={couponNumber} onChange={handleCouponChange} />
  //       <coupon.btn onClick={handleCouponSubmit}>확인</coupon.btn>
  //     </coupon.TotalWrapper>
  //   );
}

export default ChatCoupon;
