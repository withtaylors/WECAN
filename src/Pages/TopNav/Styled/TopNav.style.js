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

  &:hover {
    color: #dd518c;
  }

  &.${activeClassName} {
    ${activeStyle}
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 896px;
  z-index: 50;
  gap: 20px;
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
`;

export const Submenu = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  top: 250%;
  width: max-content;

  flex-direction: row;
`;

export const SubmenuItem = styled.div`
  padding: 5px;
  color: white;
  cursor: pointer;
  margin-right: 50px;
  font-size: 15px;
`;
