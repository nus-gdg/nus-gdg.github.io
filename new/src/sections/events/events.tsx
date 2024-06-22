import HeaderIcon from "../../assets/icons/event-icon.svg";

const Events = (): JSX.Element => {
  return (
    <div className="events" id="events">
      <div className="container">
        <div className="header-events">
          <div className="icon-events">
            <img src={HeaderIcon} alt="events-logo" />
          </div>
          <div className="header-text">
            <span className="tagline-events"> Coming up next</span>
            <span className="heading-events">Upcoming Events</span>
          </div>
        </div>
        <div className="body-events">
          <div className="main-event"></div>
          <div className="other-events"></div>
        </div>
      </div>
    </div>
  );
};

export default Events;
