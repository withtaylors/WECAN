import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as mylike from './Styled/Mypage.main.liked';
import TopNav from '../TopNav/TopNav.main';
import DonationCard from '../Category/Donation.card';
import axios from 'axios';
import DonatedItem from '../../Components/DonatedItem';
function MyDonation() {
  const samples = [
    { title: '챌린지 1', challengePeriod: '2023-11-01' },
    { title: '챌린지 2', challengePeriod: '2023-12-02' },
    { title: '챌린지 3', challengePeriod: '2023-10-11' },
    { title: '챌린지 4', challengePeriod: '2023-11-01' },
    { title: '챌린지 5', challengePeriod: '2023-12-02' },
    { title: '챌린지 6', challengePeriod: '2023-10-11' },
  ];
  ////////////////////////////////////////////////////////////////////////
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };
  /////////////////////////////////////////////////////////////////////
  const baseURL = 'http://3.35.3.205:8080';

  ////////////////////////////////////////////////////
  const [loading, setLoading] = useState(false);
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
  }, []);
  ///////////////////////////////////////////////////////////////
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  ////////////////////////////////////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
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
              challengeName={charity.title}
              explanation={charity.explanation}
              imageSrc={charity.imgEndpoint}
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
