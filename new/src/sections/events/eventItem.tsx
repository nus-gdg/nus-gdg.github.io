import { useMemo } from "react";

interface Props {
  name: string;
  details: string[];
  description: string;
  link: string;
  icon: string;
}

const EventItem = ({ name, details, description, link, icon }: Props): JSX.Element => {
  const tagline = useMemo(() => details.join(" • "), [details]);
  return (
    <div className="event-card" id={name}>
      <div className="event-card-header">
        <span className="event-card-header-tagline">{tagline}</span>
        <span className="event-card-header-name">{name}</span>
      </div>
      <div className="event-card-body">
        <div className="event-card-body-details">
          <span className="event-card-body-description">{description}</span>
          <a href={link} className="event-card-body-button" style={{ display: "inline-block" }}>
            Browse games→
          </a>
        </div>
        <div className="event-card-body-icon">
          <img src={icon} alt="icon for event" />
        </div>
      </div>
    </div>
  );
};

export default EventItem;
