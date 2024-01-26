import styled from 'styled-components';

export const TotalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const num = styled.div`
  width: 433px;
  height: 107px;
  background-color: white;
  border-radius: 30px;
  z-index: 1001;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const text = styled.div`
  font-color: #dd518c;
`;

export const btn = styled.div`
backrgound=white;
padding:10px;`;
