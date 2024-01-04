import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const activeClassName = "active";

export const activeStyle = css`
  color: red;
`;

export const ActiveLink = styled(Link).attrs({
  activeClassName,
})`
  text-decoration: none;
  color: black;
  border-bottom: 4px solid transparent;
  padding-bottom: 27px;

  &:hover {
    color: #dd518c;
    border-bottom-color: black;
  }

  &.${activeClassName} {
    ${activeStyle}
  }
`;

export const ActiveLink2 = styled(Link).attrs({
  activeClassName,
})`
  text-decoration: none;
  color: black;
  font-weight: medium;

  &:hover {
    color: #dd518c;
  }

  &.${activeClassName} {
    ${activeStyle}
  }
`;
export const NavWrapperTotal = styled.div`
  margin-bottom: 20px;
  margin-top: 60px;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 896px;
  z-index: 50;
  gap: 10px;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: gray;
  margin-top: 25px;
`;

export const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 17px;
  font-weight: bold;
  height: 50px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Submenu = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  width: max-content;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SubmenuItem = styled.div`
  padding: 5px;
  color: white;
  cursor: pointer;
  margin-right: 50px;
  font-size: 16px;
`;
