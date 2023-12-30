import React, { useState } from "react";
import "./Styled/NavigationBar.module.css"; // Make sure to create a CSS file with this name

const NavigationBar = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <button onClick={() => setIsSubMenuVisible(!isSubMenuVisible)}>
          메인 메뉴
        </button>
        {/* other navbar items */}
      </div>
      {isSubMenuVisible && (
        <div className="sub-navbar">{/* sub-navbar items */}</div>
      )}
    </div>
  );
};

export default NavigationBar;
