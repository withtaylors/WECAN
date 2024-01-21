import styled from 'styled-components';
import * as tokens from '../../tokens';

export const CardWrapper = styled.div`
  width: 275px;
  height: 284px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: white;
  margin: 12px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #dd518c;
  }
`;
export const DonationWrapper = styled.div`
  width: 275px;
  height: 358px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;

  background-color: white;
  margin: 12px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
`;
export const ImageWrapper = styled.img`
  width: 220px;
  height: 178px;
  border-radius: 14px;
  background-color: #d2d2d2;
`;
export const DonationImageWrapper = styled.img`
  width: 205px;
  height: 270px;
  border-radius: 14px;
  background-color: #d2d2d2;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  margin-top: 20px;
`;
export const ContentInfo = styled.div`
  width: 207px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
export const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
`;

export const Date = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  text-decoration: none;
  color: black;
`;

export const dateLogo = styled.img`
  width: 12px;
  height: 12px;
`;
