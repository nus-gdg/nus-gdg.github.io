import { TIMELINE } from "../../constants/timeline_2526s1";

interface Props {
  weekIndex: number;
}

const TimelineRightSection = ({ weekIndex }: Props): JSX.Element => {
  if (weekIndex < 0 || weekIndex >= TIMELINE.weeks.length) {
    return (
      <div className="tl-right">
        <span className="tl-right-title">
          <h1>This week</h1>
          <strong>(No ongoing week)</strong>
        </span>
        <p>There is no school at the moment. Please check back later during the semester for exciting stuff!</p>
      </div>
    );
  }
  const currentWeekItem = TIMELINE.weeks[weekIndex];
  const currentWeekNumber = weekIndex + 1; 
  return (
    <div className="tl-right">
      <span className="tl-right-title">
        <h1>This week</h1>
        <strong>(Week {currentWeekNumber})</strong>
      </span>
      {currentWeekItem.mainActivity && typeof currentWeekItem.mainActivity === "object" ? (
        <div className="tl-right-mainactivity">
          <div className="tl-right-heading">
            <h3>Regular session:</h3>
            <span>{currentWeekItem.mainActivity.name}</span>
            {currentWeekItem.mainActivity.updatedTime ? (
              <strong className="tl-right-time">
                {currentWeekItem.mainActivity.updatedTime.dayOfWeek} at {currentWeekItem.mainActivity.updatedTime.time}
              </strong>
            ) : (
              TIMELINE.regularSession.time && (
                <strong className="tl-right-time">
                  {" "}
                  {TIMELINE.regularSession.time.dayOfWeek}: {TIMELINE.regularSession.time.time}
                </strong>
              )
            )}
          </div>
          <div className="tl-right-mainactivity-content">
            {currentWeekItem.poster && (
              <img className="tl-right-poster" src={currentWeekItem.poster} alt="Event poster" />
            )}
            <div className="tl-right-mainactivity-info">
              {currentWeekItem.mainActivity.updatedVenue ? (
                <p>
                  <strong>Venue (Godot):</strong> {currentWeekItem.mainActivity.updatedVenue.godot} <br />
                  <strong>Venue (Unity):</strong> {currentWeekItem.mainActivity.updatedVenue.unity}
                </p>
              ) : (
                TIMELINE.regularSession.venue && (
                  <p>
                    <strong>Venue (Godot):</strong> {TIMELINE.regularSession.venue.godot} <br />
                    <strong>Venue (Unity):</strong> {TIMELINE.regularSession.venue.unity}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        // If mainActivity is just a string (like "Midterm Exams")
        typeof currentWeekItem.mainActivity === "string" && (
          <div>
            <h3 className="font-semibold">Main Activity:</h3>
            <p>{currentWeekItem.mainActivity}</p>
          </div>
        )
      )}

      {currentWeekItem.specialActivity && (
        <div>
          <div className="tl-right-heading">
            <h3 className="font-semibold">Special Activity:</h3>
            <span>{currentWeekItem.specialActivity.name}</span>
            <strong className="tl-right-time">
              {currentWeekItem.specialActivity.time.dayOfWeek}: {currentWeekItem.specialActivity.time.time}
            </strong>
          </div>
          <p>
            <strong>Venue:</strong> {currentWeekItem.specialActivity.venue}
          </p>
        </div>
      )}
    </div>
  );
};

export default TimelineRightSection;
