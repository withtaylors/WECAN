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
  font-weight: bold;
  font-size:19px;

  &:hover {
    color: #dd518c;
   

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
  margin-top: 40px;
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
  height: 70px;
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
  height: 70px;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const SubmenuItem = styled.div`
  padding: 5px;
  color: white;
  cursor: pointer;
  margin-right: 50px;
  font-size: 15px;
`;

////
// const activeClassName = "active";

// const activeStyle = css`
//   color: red;
// `;
// const ActiveLink = styled(Link).attrs({
//   activeClassName,
// })`
//   text-decoration: none;
//   color: black;
//   font-weight: bold;
//   width: 140px;
//   height: 85px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     color: #dd518c;
//     border-bottom: 4px solid black;
//   }

//   &.${activeClassName} {
//     ${activeStyle}
//   }
// `;
// const ActiveLink2 = styled(Link).attrs({
//   activeClassName,
// })`
//   text-decoration: none;
//   color: black;
//   font-weight: bold;

//   &:hover {
//     color: #dd518c;
//   }

//   &.${activeClassName} {
//     ${activeStyle}
//   }
// `;
// const NavWrapperTotal = styled.div`
//   margin-bottom: 20px;
//   margin-top: 55px;
// `;
// const NavWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   height: 65px;
//   width: 896px;
//   z-index: 50;
//   gap: 20px;
//   border-bottom: 2px solid gray;
// `;
// const Divider = styled.div`
//   width: 100%;
//   height: 10px;
//   background-color: gray;
// `;

// const NavItem = styled.div`
//   position: relative;
//   cursor: pointer;
//   margin-bottom: 10px;
//   margin-left: 40px;
//   margin-right: 40px;
//   font-size: 24px;
//   height: 80px;
//   display: flex;
//   align-items: center;
// `;

// const SubmenuItem = styled.div`
//   padding: 5px;
//   color: white;
//   cursor: pointer;
//   margin-right: 50px;
//   font-size: 17px;
// `;
// const Submenu = styled.div`
//   display: ${(props) => (props.show ? "flex" : "none")};
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 1000px;
//   heigt: 100px;
//   flex-direction: row;
// `;
