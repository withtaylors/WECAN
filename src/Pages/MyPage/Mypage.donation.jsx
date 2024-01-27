import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as mylike from './Styled/Mypage.main.liked';
import TopNav from '../TopNav/TopNav.main';
import DoanatedListPage from '../Donate/DonateListPage';
import styles from '../Donate/Styled/Donate_DonatedPage.module.css';
import axios from 'axios';
import DonatedItem from '../../Components/DonatedItem';
import { getCharitys } from '../../Api/getter';
import donated from '../../Api/donated.json';

function MyDonation() {
  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get('keyword');
  const [keyword, setKeyword] = useState(initKeyword || '');
  const charitys = getCharitys(initKeyword);
  const [images, setImages] = useState({});
  ////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    // 이미지를 동적으로 불러오는 로직
    donated.forEach((item) => {
      import(`../../Assets/img/donated/${item.imageSrc}`)
        .then((image) => {
          setImages((prevImages) => ({
            ...prevImages,
            [item.id]: image.default,
          }));
        })
        .catch((error) => {
          console.error('이미지 로딩 오류:', error);
        });
    });
  }, []);

  ////////////////////////////////////////////////////////////////////////

  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  /////////////////////////////////////////////////////////////////////
  const baseURL = 'http://3.35.3.205:8080';

  ////////////////////////////////////////////////////
  /*const [loading, setLoading] = useState(false);
  const [donated, setDonated] = useState([]);
  useEffect(() => {
    const fetchChallengeThree = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}/donationCertificates`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('login-token'),
          },
        });
        console.log('기부 증서 목록 불러오기:', response);
        setDonated(response.data.data.responses);
        console.log(donated);
      } catch (error) {
        console.error('기부 증서 목록 불러오기 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallengeThree();
  }, []);*/
  ///////////////////////////////////////////////////////////////
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  ////////////////////////////////////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = donated.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <mylike.DonationTotalWrapper>
      <mylike.PageButton onClick={() => handlePageChange(currentPage - 1)}>
        {'<'}
      </mylike.PageButton>
      <mylike.RealWrapper>
        <mylike.title>기부 내역 모아보기</mylike.title>
        <mylike.donationcardsWrapper>
          {currentItems.map((charity) => (
            <DonatedItem
              key={charity.id}
              id={charity.id}
              challengeName={charity.challengeName}
              explanation={charity.explanation}
              imageSrc={images[charity.id]}
            />
          ))}
        </mylike.donationcardsWrapper>
      </mylike.RealWrapper>
      <mylike.PageButton onClick={() => handlePageChange(currentPage + 1)}>
        {'>'}
      </mylike.PageButton>
    </mylike.DonationTotalWrapper>
  );
}

export default MyDonation;
