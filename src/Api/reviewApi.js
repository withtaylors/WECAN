import axios from 'axios';
const baseURL = 'http://3.35.3.205:8080';

export const getChallengesList = async (token) => {
  try {
    const { data } = await axios.get(`${baseURL}/challenge/active`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    console.error('Failed to fetch challenges:', error.message);
    console.log(error.config); // 요청 구성 정보를 확인
    if (error.response) {
      // 요청은 이루어졌으나, 서버가 2xx 범위가 아닌 상태 코드로 응답
      console.log(error.response.status);
      console.log(error.response.data);
    } else if (error.request) {
      // 요청이 이루어 졌으나 응답을 받지 못함
      console.log(error.request);
    } else {
      // 요청을 설정하는 중에 문제가 발생
      console.log('Error', error.message);
    }
  }
};

export const getReviews = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/reviews`);
    return data.data;
  } catch (error) {
    // error
  }
};

export const postReview = async (token, prms) => {
  try {
    const { data } = await axios.post(`${baseURL}/reviews`, prms, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.success;
  } catch (error) {
    //error
  }
};
