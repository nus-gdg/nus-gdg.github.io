import nusgdgWhiteText from "../../assets/logos/nusgdg_text.svg";
import { GAMECRAFT_URL, GAMECRAFT_YEAR } from "../../constants/gamecraft";
import hamburgerMenuIcon from "../../assets/icons/hamburger-menu.svg";
import Button from "../button/button";
import useViewportDimensions from "../../hooks/useViewportWidth";
import { useCallback, useEffect, useState } from "react";

const Nav = (): JSX.Element => {
  const { viewportType } = useViewportDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = useCallback(() => {
    document.body.style.overflow = "hidden";
    setIsMenuOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    document.body.style.overflow = "";
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    if (viewportType === "lg") {
      handleCloseMenu();
    }
  }, [viewportType, handleCloseMenu]);

  return (
    <nav className="nav">
      <img className="nav-logo" src={nusgdgWhiteText} alt="" />
      <div className="nav-buttons">
        <img className="nav-hamburger" src={hamburgerMenuIcon} alt="" onClick={handleOpenMenu} />
        <div className="nav-buttons-internal">
          <a className="nav-link" href="#home">
            Home
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#portfolio">
            Portfolio
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
        <div className="nav-gamecraft-container">
          <Button onClick={() => window.open(GAMECRAFT_URL, "_blank")}>
            <a className="nav-gamecraft" href={GAMECRAFT_URL} target="_blank" rel="noreferrer">
              GameCraft! {GAMECRAFT_YEAR}
            </a>
          </Button>
        </div>
        <div
          className={"nav-buttons-dropdown-backdrop" + (isMenuOpen ? " nav-buttons-dropdown-backdrop-apply" : "")}
          onClick={handleCloseMenu}
        >
          <div className={"nav-buttons-dropdown" + (isMenuOpen ? " nav-buttons-dropdown-apply" : "")}>
            <a href="#home" className="nav-buttons-dropdown-link">
              Home
            </a>
            <a href="#about" className="nav-buttons-dropdown-link">
              About
            </a>
            <a href="#portfolio" className="nav-buttons-dropdown-link">
              Porfolio
            </a>
            <a href="#contact" className="nav-buttons-dropdown-link">
              Contact
            </a>
            <a href={GAMECRAFT_URL} target="_blank" rel="noreferrer" className="nav-buttons-dropdown-link">
              GameCraft! {GAMECRAFT_YEAR}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
