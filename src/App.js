import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';

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
import Donate_DonatedPage2 from './Pages/Donate/Donate_DonatedPage2';
import ReviewPage from './Pages/Review/ReviewPage';
import ShopPage from './Pages/Shop/ShopPage';
import NotFoundPage from './Pages/NotFoundPage';
import ChallengeInfo from './Pages/Challenger/Challenger.main';
import ChallengeMakeMain from './Pages/ChallengeMake/ChallengeMake.main';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className='app-container'>
          <Navigation />
          <div className='content'>
            <Routes>
              <Route path='/login' element={<Login></Login>} />
              <Route path='/join' element={<Join></Join>} />
              <Route path='/' element={<Home />} />
              <Route path='/recruitment' element={<Recruit></Recruit>} />
              <Route path='/recruitment/all' element={<Recruit></Recruit>} />
              <Route path='/recruitment/miracle-morning' />
              <Route path='/recruitment/exercise' />
              <Route path='/recruitment/study' />
              <Route path='/challenge/:id' element={<ChallengeInfo />} />
              <Route
                path='/challengemake'
                element={<ChallengeMakeMain></ChallengeMakeMain>}
              />
              <Route path='donate'>
                <Route index element={<Donate_CharityListPage />} />
                <Route path=':charitySlug' element={<Donate_CharityPage />} />
              </Route>
              <Route path='donate/donated'>
                <Route index element={<Donate_DonatedPage />} />
              </Route>
              <Route path='/review' element={<ReviewPage />} />
              <Route path='/shop' element={<ShopPage />} />
              <Route path='/mypage' />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
          <ConditionalFooter />
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
