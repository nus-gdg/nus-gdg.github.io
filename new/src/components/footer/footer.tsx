import nusgdgWhiteText from "../../assets/logos/nusgdg_text.svg";
import horizontalDivider from "../../assets/icons/horizontal-divider.svg";
import { GAMECRAFT_URL, GAMECRAFT_YEAR } from "../../constants/gamecraft";
import Button from "../button/button";
import useViewportDimensions from "../../hooks/useViewportWidth";

const Footer = (): JSX.Element => {
  const { viewportType } = useViewportDimensions();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-gdg-container">
          <img className="footer-logo" src={nusgdgWhiteText} alt="nus-gdg" />
          <div className="footer-description">
            <p>
              The NUS Games Development Group is a Student Interest Group at the National University at Singapore,
              dedicated to getting students involved in making games.
            </p>
            <p>We invite any students interested in game development to join us!</p>
          </div>
        </div>
        <div className="footer-buttons">
          <div className="footer-links">
            <a className="footer-link-header" href="#home">
              Home
            </a>
            <a className="footer-link-header" href="#about">
              About
            </a>
            <a className="footer-link-header" href="#portfolio">
              Portfolio
            </a>
            <a className="footer-link-header" href="#contact">
              Contact
            </a>
          </div>
          <div className="footer-gamecraft-container">
            <Button onClick={() => window.open(GAMECRAFT_URL, "_blank")}>
              <a className="footer-gamecraft" href={GAMECRAFT_URL} target="_blank" rel="noreferrer">
                GameCraft! {GAMECRAFT_YEAR}
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="footer-divider-container">
        <img className="footer-divider" src={horizontalDivider} alt=""></img>
      </div>
      <div className="footer-copyright">
        <span className="footer-copyright-gdg">Copyright © 2023 NUSGDG</span>
      </div>
    </footer>
  );
};

export default Footer;
