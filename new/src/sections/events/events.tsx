import HeaderIcon from "../../assets/event-icons/events_filled.svg";
import { MAIN_EVENT, EVENTS } from "../../constants/events";
import MainEventItem from "./mainEventItem";
import EventItem from "./eventItem";

const Events = (): JSX.Element => {
  return (
    <div className="event" id="event">
      <div className="event-container">
        <div className="event-header">
          <div className="event-header-icon">
            <img src={HeaderIcon} alt="event-logo" />
          </div>
          <div className="event-header-text">
            <span className="event-header-text-tagline">Coming up next</span>
            <span className="event-header-text-heading">Upcoming Events</span>
          </div>
        </div>
        <div className="event-body">
          <div className="event-body-main">
            <MainEventItem {...MAIN_EVENT} />
          </div>
          <div className="event-body-list">
            {EVENTS.map((event, index) => (
              <EventItem key={event.name || index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
