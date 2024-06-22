interface Props {
  name: string;
  details: string[];
  description: string;
  link: string;
  icon: string;
}

const EventItem = ({ name, details, description, link, icon }: Props): JSX.Element => {
  return <div className="event-card"></div>;
};

export default EventItem;
