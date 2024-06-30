import useCountdown from "../../hooks/useCountdown";
import HourGlass from "../../assets/event-icons/hourglass.svg";
import { useMemo } from "react";

interface Props {
  name: string;
  details: string[];
  link: string;
  mainIcon: string;
  sideIcon: string;
  date: Date;
}

const MainEventItem = ({ name, details, link, mainIcon, sideIcon, date }: Props): JSX.Element => {
  const targetDate = useMemo(() => date.toISOString(), [date]);
  const { days, hours, minutes } = useCountdown(targetDate);
  const tagline = useMemo(() => details.join(" • "), [details]);
  return (
    <div className="event-main-card">
      <div className="event-main-card-header">
        <span className="event-main-card-header-tagline">{tagline}</span>
        <span className="event-main-card-header-name">{name}</span>
        <div className="event-main-card-header-countdown">
          <div className="event-main-card-header-countdown-icon">
            <img src={HourGlass} alt="hourglass icon" />
          </div>
          <span className="event-main-card-header-countdown-text">
            <b>{days}</b> DAYS<b> {hours} </b> HOURS <b>{minutes}</b> MINUTES
          </span>
        </div>
        <a href={link} className="event-main-card-header-button">
          Official Website→
        </a>
      </div>
      <div className="event-main-card-body">
        <div className="event-main-card-body-main-icon">
          <img src={mainIcon} alt="main icon for main event" />
        </div>
        <div className="event-main-card-body-side-icon">
          <img src={sideIcon} alt="side icon for main event" />
        </div>
      </div>
    </div>
  );
};

export default MainEventItem;
