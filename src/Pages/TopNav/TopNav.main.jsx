import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

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
      { label: "후기", link: "donation/review" },
    ],
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

const activeClassName = "active";

const activeStyle = css`
  color: red;
`;
const ActiveLink = styled(Link).attrs({
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
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 896px;
  z-index: 50;
  gap: 20px;
  background-color: white;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: gray;
  margin-top: 75px;
`;

const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 40px;
  margin-right: 40px;
`;

const Submenu = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  top: 200%;
  width: 1000px;

  flex-direction: row;
`;

const SubmenuItem = styled.div`
  padding: 5px;
  color: white;
  background-color: white;
  cursor: pointer;
  margin-right: 50px;
`;

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
                    onClick={() => {
                      handleNavSubItemClick(subItem);
                    }}
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
