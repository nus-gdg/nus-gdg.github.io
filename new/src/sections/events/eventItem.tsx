interface Props {
  name: string;
  details: string[];
  description: string;
  link: string;
  icon: string;
}

const EventItem = ({ name, details, description, link, icon }: Props): JSX.Element => {
  const tagline = details.join(" • ");
  return (
    <div className="event-card" id={name}>
      <div className="event-card-header">
        <span className="event-card-tagline">{tagline}</span>
        <span className="event-name">{name}</span>
      </div>
      <div className="event-card-body">
        <div className="event-card-details">
          <span className="event-card-description">{description}</span>
          <a href={link}>
            <button className="event-card-button">Browse games→</button>
          </a>
        </div>
        <div className="event-card-icon">
          <img src={icon} />
        </div>
      </div>
    </div>
  );
};

export default EventItem;
