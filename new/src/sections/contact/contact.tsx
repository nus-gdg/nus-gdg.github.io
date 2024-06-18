import { DISCORD_INVITE_LINK, EMAIL_LINK, INSTAGRAM_LINK, ITCH_IO_LINK } from "../../constants/contact";
import discordLogo from "../../assets/logos/discord_logo.svg";
import emailLogo from "../../assets/logos/email_logo.svg";
import instagramLogo from "../../assets/logos/instagram_logo.svg";
import itchIoLogo from "../../assets/logos/itch_io_logo.svg";
import Button from "../../components/button/button";

const Contact = (): JSX.Element => {
  return (
    <div className="contact">
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
          <Button onClick={visitLinkFunction(DISCORD_INVITE_LINK)}>
            <span className="discord-button-text">Join Discord &rarr;</span>
          </Button>
        </div>
      </div>
      <div className="others">
        <div className="others-description">
          <span>You can also connect with us by Email or Instagram,</span>
          <span>and check out more of our games on itch.io!</span>
        </div>
        <div className="others-button-list">
          <input
            type="image"
            className="others-button"
            src={emailLogo}
            alt="email-logo"
            onClick={visitLinkFunction(EMAIL_LINK)}
          ></input>
          <span className="others-button-padding"></span>
          <input
            type="image"
            className="others-button"
            src={instagramLogo}
            alt="instagram-logo"
            onClick={visitLinkFunction(INSTAGRAM_LINK)}
          ></input>
          <span className="others-button-padding"></span>
          <input
            type="image"
            className="others-button"
            src={itchIoLogo}
            alt="itch-io-logo"
            onClick={visitLinkFunction(ITCH_IO_LINK)}
          ></input>
        </div>
      </div>
    </div>
  );
};

const visitLinkFunction = (link: string) => () => window.open(link, "_blank");

export default Contact;
