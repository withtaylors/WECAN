import React from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import './App.font.css';

import TopNav from './Pages/TopNav/Top.main';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home.main';
import Login from './Pages/Login/Login.main';
import Join from './Pages/Join/Join.main';
import Recruit from './Pages/Recruit/Recruit.total.main';
import Donate_CharityPage from './Pages/Donate/Donate_CharityPage';
import Donate_CharityListPage from './Pages/Donate/Donate_CharityListPage';
import Donate_DonatedPage from './Pages/Donate/Donate_DonatedPage';
import ReviewPage from './Pages/Review/ReviewPage';
import Shop_MainPage from './Pages/Shop/Shop_MainPage';
import Shop_DetailPage from './Pages/Shop/Shop_DetailPage';
import Coupon_DetailPage from './Pages/Shop/Coupon_DetailPage';
import ChallengeInfo from './Pages/Challenger/Challenger.main';
import ChallengeMakeMain from './Pages/ChallengeMake/ChallengeMake.main';
import ChatPage from './Pages/Chat/Chat.main';
import ChatCheckRoom from './Pages/Chat/Chat.checkroom';
import Mypage from './Pages/MyPage/Mypage.main';
import InfoChange from './Pages/MyPage/InfoChange/InfoChange.main';
import Candy from './Pages/MyPage/Candy/Candy.main';
import KakaoRedirect from './Pages/Login/KakaoRedirect.main';
import { Info } from './Pages/Challenger/Styled/Challenger.review.main';
import ChattingRoom from './Pages/Chat/Chat.chat';
import ChallengeMiracle from './Pages/Recruit/Recruit.total.miracle';
import ChallengeStudy from './Pages/Recruit/Recruit.total.study';
import ChallengeExercise from './Pages/Recruit/Recruit.total.exercise';
import ChallengeEtc from './Pages/Recruit/Recruit.total.etc';
import TossWidget from './Pages/Toss/Toss.main';

const queryClient = new QueryClient();
const firebaseConfig = {
  apiKey: 'AIzaSyBqlJafy3TZ_S2W9uHqGO5warC8ZbDfewg',
  authDomain: 'wecan-6752c.firebaseapp.com',
  projectId: 'wecan-6752c',
  storageBucket: 'wecan-6752c.appspot.com',
  messagingSenderId: '358108176427',
  appId: '1:358108176427:web:f1f476df99158cfc29ca6e',
  measurementId: 'G-XCBNQLE1VV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
getToken(messaging, {
  vapidKey:
    'BPpWppf9pzrB-RB5QQJG3srwzNLsMWswruVXBZpkN2_hsFYXi-JfnEEn9FfYKlpH1Wnn4q7M2cNQyoHjyLSIPYU',
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});
//포그라운드 메시지 수신
onMessage(messaging, (payload) => {
  const notificationOptions = {
    body: payload.notification.body,
    badge:
      'https://cdn.discordapp.com/attachments/1198333678305157143/1198561733879549992/dc824826bc0482c9.png?ex=65bf5a99&is=65ace599&hm=728ce0a712db36a502ca420d62cea18a0e86bb2bd7f9430d6fa9b9e4deaeab2c&',
  };
  new Notification(payload.notification.title, notificationOptions);
});
function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="app-container">
          <QueryClientProvider client={queryClient}>
            <Navigation />
            <div className="content">
              <Routes>
                <Route path="/login" element={<Login></Login>} />
                <Route path="/join" element={<Join></Join>} />
                <Route path="/" element={<Home />} />
                <Route path="/recruitment" element={<Recruit></Recruit>} />
                <Route path="/recruitment/all" element={<Recruit></Recruit>} />
                <Route
                  path="/recruitment/miracle-morning"
                  element={<ChallengeMiracle></ChallengeMiracle>}
                />
                <Route
                  path="/recruitment/exercise"
                  element={<ChallengeExercise></ChallengeExercise>}
                />
                <Route
                  path="/recruitment/study"
                  element={<ChallengeStudy></ChallengeStudy>}
                />
                <Route
                  path="/recruitment/etc"
                  element={<ChallengeEtc></ChallengeEtc>}
                />
                <Route path="/challenge/:id" element={<ChallengeInfo />} />
                <Route
                  path="/challengemake"
                  element={<ChallengeMakeMain></ChallengeMakeMain>}
                />

                <Route path="/recruitment/other" />
                <Route path="donate">
                  <Route index element={<Donate_CharityListPage />} />
                  <Route path=":charitySlug" element={<Donate_CharityPage />} />
                </Route>
                <Route path="donate/donated">
                  <Route index element={<Donate_DonatedPage />} />
                </Route>
                <Route path="/review" element={<ReviewPage />} />
                <Route path="/shop">
                  <Route index element={<Shop_MainPage />} />
                  <Route path=":shopSlug" element={<Shop_DetailPage />} />
                </Route>
                <Route path="/coupon">
                  <Route index element={<Shop_MainPage />} />
                  <Route path=":couponSlug" element={<Coupon_DetailPage />} />
                </Route>
                <Route path="/mypage" element={<Mypage></Mypage>} />
                <Route
                  path="/mypage/infochange"
                  element={<InfoChange></InfoChange>}
                />
                <Route path="/mypage/candy" element={<Candy></Candy>} />
                <Route
                  path="/challenge/info/:challengeId"
                  element={<ChatPage />}
                />
                <Route
                  path="/chattingroom/:challengeId"
                  element={<ChattingRoom />}
                />
                <Route
                  // path="/challenge/checkroom/:challengeId/checkDate"
                  path="/test"
                  element={<ChatCheckRoom />}
                />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
                <Route
                  path="/login/oauth/kakao"
                  element={<KakaoRedirect />}
                ></Route>
                <Route
                  path="/mypage/candy/tosspage"
                  element={<TossWidget></TossWidget>}
                />
              </Routes>
            </div>
            <ConditionalFooter />
          </QueryClientProvider>
        </div>
      </Router>
    </RecoilRoot>
  );
}

function Navigation() {
  let location = useLocation();

  // 로그인과 회원가입 경로에서 TopNav를 숨김
  if (location.pathname === '/login' || location.pathname === '/join') {
    return null;
  }

  return <TopNav />;
}

function ConditionalFooter() {
  let location = useLocation();

  // 로그인과 회원가입 경로에서 Footer를 숨김
  if (location.pathname === '/login' || location.pathname === '/join') {
    return null;
  }

  return <Footer />;
}
export default App;
