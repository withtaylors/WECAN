import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ActiveLink,
  NavWrapper,
  NavItem,
  Submenu,
  SubmenuItem,
  activeClassName,
} from "./Styled/TopNav.style.js";

const navItems = [
  {
    label: "챌린저 모집",
    link: "/recruitment",
    subItems: [
      { label: "전체", link: "/recruitment/all" },
      { label: "미라클모닝", link: "/recruitment/miracle-morning" },
      { label: "운동", link: "/recruitment/exercise" },
      { label: "공부", link: "/recruitment/study" },
      { label: "기타", link: "/recruitment/other" },
    ],
  },
  {
    label: "기부",
    link: "/donate",
    subItems: [
      { label: "기부 단체 찾기", link: "/donation/find-donation" },
      { label: "기부했어요", link: "/donation/donated" },
    ],
  },
  {
    label: "후기",
    link: "/review",
  },
  {
    label: "굿즈샵",
    link: "/goodsshop",
  },
  {
    label: "마이페이지",
    link: "/mypage",
  },
];

const TopNav = () => {
  const location = useLocation();
  const [showSubmenu, setShowSubmenu] = useState(null);
  const navigate = useNavigate();

  const handleNavItemClick = (item) => {
    setShowSubmenu(item === showSubmenu ? null : item);
  };
  const handleNavSubItemClick = (subItem) => {
    alert("페이지 넘어갑니다!");
    navigate(subItem.link);
  };

  return (
    <NavWrapper>
      {navItems.map((item, index) => (
        <NavItem key={index} onClick={() => handleNavItemClick(item)}>
          <ActiveLink to={item.link}>{item.label}</ActiveLink>
          {item.subItems && item.subItems.length > 0 && (
            <Submenu show={item === showSubmenu}>
              {item.subItems.map((subItem, subIndex) => (
                <SubmenuItem key={subIndex}>
                  <ActiveLink
                    to={subItem.link}
                    className={
                      location.pathname === subItem.link ? activeClassName : ""
                    }
                  >
                    {subItem.label}
                  </ActiveLink>
                </SubmenuItem>
              ))}
            </Submenu>
          )}
        </NavItem>
      ))}
    </NavWrapper>
  );
};

export default TopNav;
