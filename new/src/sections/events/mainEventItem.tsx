import useCountdown from "../../hooks/useCountdown";

interface Props {
  name: string;
  details: string[];
  link: string;
  mainIcon: string;
  sideIcon: string;
  date: Date;
}

const MainEventItem = ({ name, details, link, mainIcon, sideIcon, date }: Props): JSX.Element => {
  const targetDate = date.toISOString();
  const { days, hours, minutes } = useCountdown(targetDate);
  const tagline = details.join("•");
  return (
    <div className="main-event-card">
      <div className="main-event-card-header">
        <span className="main-event-tagline">{tagline}</span>
        <span className="main-event-name">{name}</span>
        <span className="main-event-countdown">
          <b>{days}</b> DAYS<b> {hours} </b> HOURS <b>{minutes}</b> MINUTES
        </span>
      </div>
      <div className="main-event-card-body">
        <a href={link}>
          <button className="main-event-link">Official Website→</button>
        </a>
      </div>
    </div>
  );
};

export default MainEventItem;
