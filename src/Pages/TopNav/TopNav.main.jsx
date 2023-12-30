import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const navItems = [
  {
    label: '챌린저 모집',
    link: '/recruitment',
    subItems: [
      { label: '전체', link: '/recruitment/all' },
      { label: '미라클모닝', link: '/recruitment/miracle-morning' },
      { label: '운동', link: '/recruitment/exercise' },
      { label: '공부', link: '/recruitment/study' },
      { label: '기타', link: '/recruitment/other' },
    ],
  },
  {
    label: '기부',
    link: '/donate',
    subItems: [
      { label: '기부 단체 찾기', link: '/donation/find-donation' },
      { label: '기부했어요', link: '/donation/donated' },
      { label: '후기', link: 'donation/review' },
    ],
  },
  {
    label: '굿즈샵',
    link: '/goodsshop',
  },
  {
    label: '마이페이지',
    link: '/mypage',
  },
];

const activeClassName = 'active';

const activeStyle = css`
  color: red;
`;
const ActiveLink = styled(Link).attrs({
  activeClassName,
})`
  text-decoration: none;
  color: black;
  font-weight: bold;
  width: 140px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #dd518c;
    border-bottom: 4px solid black;
  }

  &.${activeClassName} {
    ${activeStyle}
  }
`;
const ActiveLink2 = styled(Link).attrs({
  activeClassName,
})`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    color: #dd518c;
  }

  &.${activeClassName} {
    ${activeStyle}
  }
`;
const NavWrapperTotal = styled.div`
  margin-bottom: 20px;
  margin-top: 55px;
`;
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 896px;
  z-index: 50;
  gap: 20px;
  border-bottom: 2px solid gray;
`;
const Divider = styled.div`
  width: 100%;
  height: 10px;
  background-color: gray;
`;

const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 24px;
  height: 80px;
  display: flex;
  align-items: center;
`;

const SubmenuItem = styled.div`
  padding: 5px;
  color: white;
  cursor: pointer;
  margin-right: 50px;
  font-size: 17px;
`;
const Submenu = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 1000px;
  heigt: 100px;
  flex-direction: row;
`;
const TopNav = () => {
  const location = useLocation();
  const [showSubmenu, setShowSubmenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navigate = useNavigate();

  const handleNavItemClick = (item) => {
    setShowSubmenu(item === showSubmenu ? null : item);
    setActiveSubmenu(item === activeSubmenu ? null : item);
  };

  const handleSubmenuMouseEnter = (item) => {
    setActiveSubmenu(item);
  };

  const handleSubmenuMouseLeave = () => {
    // 마우스가 Submenu에서 떠나도 Submenu를 숨기지 않고 유지합니다.
    // 다만, SubmenuItem에서 마우스가 떠나면 Submenu를 숨기도록 합니다.
    setActiveSubmenu(null);
  };

  const handleNavItemMouseLeave = () => {
    setShowSubmenu(null);
  };

  const handleNavSubItemClick = (subItem) => {
    alert('페이지 넘어갑니다!');
    navigate(subItem.link);
  };

  return (
    <NavWrapperTotal>
      <NavWrapper>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            onMouseEnter={() => handleNavItemClick(item)}
            onMouseLeave={handleNavItemMouseLeave}
          >
            <ActiveLink to={item.link}>{item.label}</ActiveLink>
            {item.subItems && item.subItems.length > 0 && (
              <Submenu
                show={item === showSubmenu}
                onMouseEnter={() => handleSubmenuMouseEnter(item)}
                onMouseLeave={handleSubmenuMouseLeave}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <SubmenuItem key={subIndex}>
                    <ActiveLink2
                      to={subItem.link}
                      className={
                        location.pathname === subItem.link
                          ? activeClassName
                          : ''
                      }
                      onClick={() => {
                        handleNavSubItemClick(subItem);
                      }}
                    >
                      {subItem.label}
                    </ActiveLink2>
                  </SubmenuItem>
                ))}
              </Submenu>
            )}
          </NavItem>
        ))}
      </NavWrapper>
    </NavWrapperTotal>
  );
};

export default TopNav;
