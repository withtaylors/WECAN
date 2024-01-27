import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as coupon from './Styled/Chat.Coupon';
import { GoBackButton } from './Styled/Chat.checkroom';

function ChatCoupon(props) {
  const [couponNumber, setCouponNumber] = useState('');

  const handleCouponChange = (e) => {
    setCouponNumber(e.target.value);
  };

  const handleCouponSubmit = () => {
    if (couponNumber !== '') {
    } else {
      props.onClose();

      console.log('Please enter a coupon number');
    }
  };

  return (
    <coupon.TotalWrapper>
      <coupon.infoWrapper>
        <coupon.num>쿠폰 번호</coupon.num>
        <coupon.text value={couponNumber} onChange={handleCouponChange} />
        <coupon.btn onClick={handleCouponSubmit}>확인</coupon.btn>
        {/* Other elements */}
      </coupon.infoWrapper>
    </coupon.TotalWrapper>
  );
}

export default ChatCoupon;
