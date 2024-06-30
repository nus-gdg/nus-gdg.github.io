import HeaderIcon from "../../assets/icons/event-icon.svg";
import { MAIN_EVENT, EVENTS } from "../../constants/events";
import MainEventItem from "./mainEventItem";
import EventItem from "./eventItem";

const Events = (): JSX.Element => {
  return (
    <div className="events" id="events">
      <div className="container">
        <div className="header-events">
          <div className="icon-events">
            <img src={HeaderIcon} alt="events-logo" />
          </div>
          <div className="header-text">
            <span className="tagline-events">Coming up next</span>
            <span className="heading-events">Upcoming Events</span>
          </div>
        </div>
        <div className="body-events">
          <div className="main-event">
            <MainEventItem {...MAIN_EVENT} />
          </div>
          <div className="event-list">
            {EVENTS.map((event, index) => (
              <EventItem {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
