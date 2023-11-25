import logo from './logo.svg';
import './App.css';
import { BrowserRoter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
//Screen componets
import Home from './Pages/Home/Home.main';
import TopNav from './Pages/TopNav/Top.main';
import Recruit from './Pages/Recruit/Recruit.total.main';
import Login from './Pages/Login/Login.main';
import Join from './Pages/Join/Join.main';
function App() {
  const MainScreen = styled.div`
    position: relative;
    top: 100px;
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
  `;
  return (
    <div className='App'>
      <TopNav></TopNav>

      <MainScreen>
        <Routes>
          <Route path='/login' element={<Login></Login>} />
          <Route path='/join' element={<Join></Join>} />
          <Route path='/' element={<Home />} />
          <Route path='/recruitment' />
          <Route path='/recruitment/all' element={<Recruit></Recruit>} />
          <Route path='/recruitment/miracle-morning' />
          <Route path='/recruitment/exercise' />
          <Route path='/recruitment/study' />
          <Route path='/recruitment/other' />
          <Route path='/donation' />
          <Route path='/donation/find-donation' />
          <Route path='/donation/donated' />
          <Route path='/donation/review' />
          <Route path='/goodshop' />
          <Route path='/mypage' />
        </Routes>
      </MainScreen>
    </div>
  );
}

export default App;
