import { DISCORD_INVITE_LINK, EMAIL_LINK, INSTAGRAM_LINK, ITCH_IO_LINK } from "../../constants/contact";
import discordLogo from "../../assets/logos/discord_logo.svg";
import emailLogo from "../../assets/logos/email_logo.svg";
import instagramLogo from "../../assets/logos/instagram_logo.svg";
import itchIoLogo from "../../assets/logos/itch_io_logo.svg";
import Button from "../../components/button/button";

const Contact = (): JSX.Element => {
  return (
    <div id="contact" className="contact">
      <div className="discord">
        <div className="discord-logo">
          <img src={discordLogo} alt="discord-logo"></img>
        </div>
        <div className="discord-excited">
          <span>Excited for more content?</span>
        </div>
        <div className="discord-join">
          <span>Join our Discord Server</span>
        </div>
        <div className="discord-button-div">
          <Button className="button button-discord" onClick={visitLinkFunction(DISCORD_INVITE_LINK)}>
            <a className="discord-button-text" href={DISCORD_INVITE_LINK} target="_blank">
              Join Discord &rarr;
            </a>
          </Button>
        </div>
      </div>
      <div className="others">
        <div className="others-description">
          <span>You can also connect with us by Email or Instagram,</span>
          <span>and check out more of our games on itch.io!</span>
        </div>
        <div className="others-button-list">
          <a className="others-button" href={EMAIL_LINK} target="_blank">
            <img className="others-button-logo" src={emailLogo} alt="email-logo"></img>
          </a>
          <span className="others-button-padding"></span>
          <a className="others-button" href={INSTAGRAM_LINK} target="_blank">
            <img className="others-button-logo" src={instagramLogo} alt="instagram-logo"></img>
          </a>
          <span className="others-button-padding"></span>
          <a className="others-button" href={ITCH_IO_LINK} target="_blank">
            <img className="others-button-logo" src={itchIoLogo} alt="itch-io-logo"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

const visitLinkFunction = (link: string) => () => window.open(link, "_blank");

export default Contact;
