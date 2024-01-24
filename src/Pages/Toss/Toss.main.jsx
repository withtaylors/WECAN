import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const selector = "#payment-widget";
const clientKey = "test_ck_d46qopOB897w9vbdey27VZmM75y0";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export default function TossWidget() {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const purchaseCandyCnt = parseInt(params.get("amount"));
  const orderId = params.get("orderId");
  const orderName = "캔디 " + purchaseCandyCnt;
  const orderPrice = parseInt(purchaseCandyCnt) * 120;

  const navigate = useNavigate();
  const [price, setPrice] = useState(orderPrice == null ? 50_000 : orderPrice);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        selector,
        { value: price },
        { variantKey: "DEFAULT" }
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>주문서</h1>
      <font
        style={{
          fontFamily: "Arial",
          fontSize: "20px",
        }}
      >{`${orderName == null ? "test_order" : orderName + "개"}`}</font>
      <span
        style={{
          fontFamily: "Arial",
          fontSize: "20px",
        }}
      >{`${orderPrice.toLocaleString()}원`}</span>

      <div id="payment-widget" style={{ width: "70%" }} />
      <button
        style={{
          backgroundColor: "#3498db", // 버튼 배경색
          color: "#fff", // 텍스트 색상
          padding: "10px 20px", // 내부 여백
          borderRadius: "5px", // 테두리 모서리 둥글게
          border: "none", // 테두리 없음
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // 그림자
          cursor: "pointer", // 포인터 커서
          fontSize: "16px", // 폰트 크기
          transition: "background-color 0.3s ease",
          buttonHover: {
            backgroundColor: "#2980b9",
          },
        }}
        onClick={async () => {
          const paymentWidget = paymentWidgetRef.current;

          paymentWidget
            .requestPayment({
              // 결제 정보 파라미터
              // successUrl, failUrl, windowTarget 파라미터를 넘기지 마세요.
              orderId: orderId,
              orderName: orderName,
              customerName: localStorage.getItem("user-name"),
              customerEmail: localStorage.getItem("user-email"),
              customerMobilePhone: localStorage.getItem("user-phone"),
            })
            .then(function (data) {
              // 성공 처리: 서버 측에서 결제 승인 API를 호출하세요
              const requestParams = {
                orderId: encodeURIComponent(data.orderId),
                paymentKey: encodeURIComponent(data.paymentKey),
                amount: encodeURIComponent(data.amount),
              };

              console.log(requestParams);
              axios
                .get(
                  `http://3.35.3.205:8080/payment/toss/success?orderId=${requestParams.orderId}&paymentKey=${requestParams.paymentKey}&amount=${requestParams.amount}`
                )
                .then((response) => {
                  const currentCandy = parseInt(
                    localStorage.getItem("user-candy")
                  );
                  localStorage.setItem(
                    "user-candy",
                    currentCandy + purchaseCandyCnt
                  );
                  navigate("/mypage/candy");
                });
            })
            .catch(function (error) {
              alert("Transaction ERROR !!");

              navigate("/mypage/candy");

              // 에러 처리: 에러 목록을 확인하세요
              // https://docs.tosspayments.com/reference/error-codes#failurl로-전달되는-에러
              if (error.code === "USER_CANCEL") {
                // 결제 고객이 결제창을 닫았을 때 에러 처리
              } else if (error.code === "INVALID_CARD_COMPANY") {
                // 유효하지 않은 카드 코드에 대한 에러 처리
              }
            });
        }}
      >
        결제하기
      </button>
    </div>
  );
}
