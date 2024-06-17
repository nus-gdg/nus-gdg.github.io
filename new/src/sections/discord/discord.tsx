import { DISCORD_INVITE_LINK } from "../../constants/urls";
import discordLogo from "../../assets/logos/discord_logo.svg";
import Button from "../../components/button/button";

const DiscordSection = (): JSX.Element => {
  return (
    <div>
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
        <div className="discord-button">
          <Button
            onClick={() => window.open(DISCORD_INVITE_LINK, "_blank")}
            styleOverrides={{ backgroundColor: "#5865F2" }}
          >
            <span className="discord-button-text">Join Discord &rarr;</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscordSection;
