import React, { useState, useEffect } from 'react';
import * as coupon from './Styled/Chat.Coupon';
import checkimg from '../../Assets/img/check.svg';

function ChatCoupon(props) {
  const [couponNumber, setCouponNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCouponChange = (e) => {
    setCouponNumber(e.target.value);
  };

  const handleCouponSubmit = () => {
    if (couponNumber !== '') {
      setIsSubmitted(true);
    } else {
      props.onClose();

      console.log('쿠폰번호입력안함');
    }
  };

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        props.onClose();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted, props.onClose]);

  return (
    <coupon.TotalWrapper>
      <coupon.infoWrapper>
        {!isSubmitted && (
          <>
            <coupon.num>쿠폰 번호</coupon.num>
            <coupon.text value={couponNumber} onChange={handleCouponChange} />
            <coupon.btn onClick={handleCouponSubmit}>확인</coupon.btn>
          </>
        )}
        {isSubmitted && (
          <coupon.SuccessWrapper>
            <coupon.checkimg>
              <img src={checkimg} alt="Check" />
            </coupon.checkimg>
            <coupon.successtext>
              싫어요 5개 없애기 쿠폰을 사용하였습니다
            </coupon.successtext>
          </coupon.SuccessWrapper>
        )}
      </coupon.infoWrapper>
    </coupon.TotalWrapper>
  );
}

export default ChatCoupon;
