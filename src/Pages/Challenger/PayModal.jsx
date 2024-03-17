import React, { useEffect, useState, useRef } from 'react';
import * as setting from './Styled/PayModal';
import CategoryCard from '../Category/Category.card';
import paymodal1 from '../../Assets/img/paymodal1.png';
import paymodal2 from '../../Assets/img/paymodal2.png';
import { Link } from 'react-router-dom';
import PayModal2 from './PayModal2';
function PayModal({ closeModal }) {
  return (
    <setting.BackgroundOverlay onClick={closeModal}>
      <setting.TotalModal>
        <Link to='/paymodal_2' closeModal={closeModal}>
          <setting.RealSettingWrapper
            src={paymodal1}
          ></setting.RealSettingWrapper>
        </Link>
      </setting.TotalModal>
    </setting.BackgroundOverlay>
  );
}

export default PayModal;
