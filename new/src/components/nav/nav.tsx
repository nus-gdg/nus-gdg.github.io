import nusgdgWhiteText from '../../assets/logos/nusgdg_text.svg';
import { GAMECRAFT_URL } from '../../constants/urls';
import Button from '../button/button';

const Nav = (): JSX.Element => {
  return (
    <nav className="nav">
      <img className="nav-logo" src={nusgdgWhiteText} alt="" />
      <div className="nav-buttons">
        <div className="nav-buttons-internal">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#portfolio">Portfolio</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
        <Button onClick={() => window.open(GAMECRAFT_URL, '_blank')}>
          <a className="nav-gamecraft" href={GAMECRAFT_URL} target="_blank" rel="noreferrer">GameCraft! 2023</a>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
