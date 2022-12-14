import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import "./Nav.css";
import Triangle from "../Triangle";
import NavComponents from "../Nav Components/NavComponents";
import MoreNav from "../MoreNav/MoreNav";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const events = window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
      if (screenSize >= 1200) {
        setIsClicked(true);
      }

      if (screenSize < 1200) {
        setShowMore(true);
      }
    });

    return () => window, removeEventListener("resize", events);
  }, [screenSize]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <header>
      <nav className="nav">
        <Logo className="logo" isClicked={isClicked} screenSize={screenSize} />
        <div
          className="menu-container"
          onClick={handleClick}
          style={isClicked ? { color: "#fff" } : { color: "#000" }}
        >
          <h3 className="menu">Menu</h3>
          <Triangle
            className={`triangle ${isClicked && "rotate"}`}
            isClicked={isClicked}
          />
        </div>
      </nav>
      <NavComponents
        isClicked={isClicked}
        screenSize={screenSize}
        showMore={showMore}
        handleMore={handleMore}
      />
      {screenSize >= 1200 && showMore && <MoreNav />}
    </header>
  );
};

export default Nav;
