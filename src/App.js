import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './App.css';
import './App.font.css';

import Top from './Pages/TopNav/Top.main';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home.main';
import Login from './Pages/Login/Login.main';
import Join from './Pages/Join/Join.main';
import Recruit from './Pages/Recruit/Recruit.total.main';
import Donate_CharityPage from './Pages/Donate/Donate_CharityPage';
import Donate_CharityListPage from './Pages/Donate/Donate_CharityListPage';
import Donate_DonatedPage from './Pages/Donate/Donate_DonatedPage';
import NotFoundPage from './Pages/NotFoundPage';
import ChallengeInfo from './Pages/Challenger/Challenger.main';
import ChallengeMakeMain from './Pages/ChallengeMake/ChallengeMake.main';
import ReviewPage from './Pages/Review/ReviewPage';
import Mypage from './Pages/MyPage/Mypage.main';
import InfoChange from './Pages/MyPage/InfoChange/InfoChange.main';
import { Info } from './Pages/Challenger/Styled/Challenger.review.main';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className='app-container'>
          <Top />
          <div className='content'>
            <Routes>
              <Route path='/login' element={<Login></Login>} />
              <Route path='/join' element={<Join></Join>} />
              <Route path='/' element={<Home />} />
              <Route path='/recruitment' />
              <Route path='/recruitment/all' element={<Recruit></Recruit>} />
              <Route path='/recruitment/miracle-morning' />
              <Route path='/recruitment/exercise' />
              <Route path='/recruitment/study' />
              <Route path='/challenge/:id' element={<ChallengeInfo />} />
              <Route
                path='/challengemake'
                element={<ChallengeMakeMain></ChallengeMakeMain>}
              />
              <Route path='/recruitment/other' />
              <Route path='donate'>
                <Route index element={<Donate_CharityListPage />} />
                <Route path=':charitySlug' element={<Donate_CharityPage />} />
              </Route>
              <Route path='donate/donated'>
                <Route index element={<Donate_DonatedPage />} />
              </Route>
              <Route path='/review' element={<ReviewPage />} />
              <Route path='/shop' />
              <Route path='/mypage' element={<Mypage></Mypage>} />
              <Route
                path='/mypage/infochange'
                element={<InfoChange></InfoChange>}
              />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
