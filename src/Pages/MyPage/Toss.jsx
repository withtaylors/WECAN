import React, { useState } from 'react';

const Payment = () => {
	const [name, setName] = React.useState("");

  const clientKey = process.env.REACT_APP_CLIENT_KEY;

  const tossPay = () => {
    
    //orderId가 필요해서 만든 랜덤 아이디값
    const random = new Date().getTime() + Math.random()
    const randomId = btoa(random)

    if (radio === '가상계좌') {
      loadTossPayments(clientKey).then(tossPayments => {
        // 카드 결제 메서드 실행
        tossPayments.requestPayment(`${radio}`, {
          amount: 1, // 가격
          orderId: `${randomId}`, // 주문 id
          orderName: `gagyeong`, // 결제 이름
          customerName: `${name}`, // 판매자, 판매처 이름
          successUrl: 'http://localhost:3000/success', // 성공시 리다이렉트 주소
          failUrl: 'http://localhost:3000/failed', // 실패시 리다이렉트 주소
          validHours: 24, // 유효시간
          cashReceipt: {
            type: '소득공제',
          },
        })
      })
    } else {
      loadTossPayments(clientKey).then(tossPayments => {
        // 카드 결제 메서드 실행
        tossPayments.requestPayment(`${radio}`, {
          amount: 1, // 가격
          orderId: `${randomId}`, // 주문 id
          orderName: `gagyeong`, // 결제 이름
          customerName: `${name}`, // 판매자, 판매처 이름
          successUrl: 'http://localhost:3000/success', // 성공시 리다이렉트 주소
          failUrl: 'http://localhost:3000/failed', // 실패시 리다이렉트 주소
        })
      })
    }
  }


  export defualt Toss.jsx