import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ActiveLink,
  ActiveLink2,
  NavWrapperTotal,
  NavWrapper,
  NavItem,
  Submenu,
  SubmenuItem,
  activeClassName,
} from './Styled/TopNav.style.js';

const navItems = [
  {
    label: '챌린저 모집',
    link: '/recruitment/all',
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
      { label: '기부 단체 찾기', link: '/donate' },
      { label: '기부했어요', link: '/donate/donated' },
    ],
  },
  {
    label: '후기',
    link: '/review',
  },
  {
    label: '굿즈샵',
    link: '/shop',
  },
  {
    label: '마이페이지',
    link: '/mypage',
  },
];

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
    // <NavWrapper>
    //   {navItems.map((item, index) => (
    //     <NavItem key={index} onClick={() => handleNavItemClick(item)}>
    //       <ActiveLink to={item.link}>{item.label}</ActiveLink>
    //       {item.subItems && item.subItems.length > 0 && (
    //         <Submenu show={item === showSubmenu}>
    //           {item.subItems.map((subItem, subIndex) => (
    //             <SubmenuItem key={subIndex}>
    //               <ActiveLink
    //                 to={subItem.link}
    //                 className={
    //                   location.pathname === subItem.link ? activeClassName : ""
    //                 }
    //               >
    //                 {subItem.label}
    //               </ActiveLink>
    //             </SubmenuItem>
    //           ))}
    //         </Submenu>
    //       )}
    //     </NavItem>
    //   ))}
    // </NavWrapper>
  );
};

export default TopNav;
