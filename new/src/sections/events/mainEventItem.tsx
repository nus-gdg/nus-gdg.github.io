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
  return <div className="main-event-card"></div>;
};

export default MainEventItem;
