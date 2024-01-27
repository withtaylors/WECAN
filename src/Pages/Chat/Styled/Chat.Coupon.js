import styled from 'styled-components';

export const TotalWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
  padding-bottom: 15vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const infoWrapper = styled.div`
  min-width: 380px;
  height: 107px;
  background-color: white;
  border-radius: 30px;
  z-index: 1001;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 40px;
  border: 1px solid #ababab;
`;

export const num = styled.div`
  color: #dd518c;
  font-weight: bold;
`;

export const text = styled.input`
  width: 200px;
  padding: 10px 2px;
  border-width: 0 0 2px;
  outline: none;
  border-color: #dd518c;
`;
export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const checkimg = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const successtext = styled.div``;

export const btn = styled.button`
  flex: none;
  background: white;
  padding: 5px 13px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #ababab;
`;
