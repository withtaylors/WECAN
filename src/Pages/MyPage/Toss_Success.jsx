let orderId = new URL(window.location.href).searchParams.get('orderId');
let paymentKey = new URL(window.location.href).searchParams.get('paymentKey');
let amount = new URL(window.location.href).searchParams.get('amount');

useEffect(() => {
  axios
    .get(
      process.env.REACT_APP_BASE_URL +
        `/success?paymentKey=${paymentKey}&amount=${amount}&orderId=${orderId}`
    )
    .then((res) => {
      if (res.status == 200 && res.data.method === '가상계좌') {
        sessionStorage.setItem(
          'accountNumber',
          res.data.virtualAccount.accountNumber
        );
        sessionStorage.setItem('bank', res.data.virtualAccount.bank);
        sessionStorage.setItem('dueDate', res.data.virtualAccount.dueDate);
        navigate('/deposit');
      } else if (
        res.status == 200 &&
        (res.data.method === '카드' || res.data.method === '게좌이체')
      ) {
        window.alert({
          position: 'center',
          icon: 'success',
          text: '결제가 완료되었습니다!',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      }
    })
    .catch((err) => {
      navigate('/failed');
    });
}, []);
