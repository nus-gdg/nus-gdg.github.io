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
    <div className="main-event-card">
      <div className="main-event-header">
        <span className="main-event-tagline">{tagline}</span>
        <span className="main-event-name">{name}</span>
        <div className="main-event-countdown">
          <img src={HourGlass} />
          <span className="main-event-countdown-text">
            <b>{days}</b> DAYS<b> {hours} </b> HOURS <b>{minutes}</b> MINUTES
          </span>
        </div>
        <a href={link} className="main-event-button">
          Official Website→
        </a>
      </div>
      <div className="main-event-body">
        <div className="main-event-main-icon">
          <img src={mainIcon} />
        </div>
        <div className="main-event-side-icon">
          <img src={sideIcon} />
        </div>
      </div>
    </div>
  );
};

export default MainEventItem;
