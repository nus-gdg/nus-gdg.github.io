import { TIMELINE} from "../../constants/timeline"
import './timelineRightSection.scss';

interface Props {
    weekIndex: number;
}


const TimelineRightSection = ({weekIndex}: Props): JSX.Element => {
    const this_week = weekIndex+1
    const currentWeekItem = TIMELINE.weeks[weekIndex]
    return(
        <div className = "tl-right">
            <span className = "tl-right-title">
                <h1>This week</h1>
                <p>Week {this_week}</p>
            </span>
            {currentWeekItem.mainActivity && typeof currentWeekItem.mainActivity === "object" ? (
            <div className = "tl-right-mainactivity">
                <div className = "tl-right-mainactivity-heading">
                    <h3>Regular session:</h3>
                    <span>{currentWeekItem.mainActivity.name}</span>
                </div>
                <div className = "tl-right-mainactivity-content">
                    {currentWeekItem.poster && (
                        <img className="tl-right-poster" src={currentWeekItem.poster} alt="Event poster"  />
                    )}
                    <div className = "tl-right-mainactivity-info">
                        {currentWeekItem.mainActivity.updatedTime ? (
                        <p>
                            <strong>Time:</strong> {currentWeekItem.mainActivity.updatedTime.dayOfWeek} at{" "}
                            {currentWeekItem.mainActivity.updatedTime.time}
                        </p>
                        ) : (
                        TIMELINE.regularSession.time && (
                            <p>
                            <strong>Time:</strong> {TIMELINE.regularSession.time.dayOfWeek} at{" "}
                            {TIMELINE.regularSession.time.time}
                            </p>
                        )
                        )}
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
            <h3 className="font-semibold">Special Activity:</h3>
            <p>{currentWeekItem.specialActivity.name}</p>
            <p>
                <strong>Time:</strong> {currentWeekItem.specialActivity.time.dayOfWeek} at{" "}
                {currentWeekItem.specialActivity.time.time}
            </p>
            <p>
                <strong>Venue:</strong> {currentWeekItem.specialActivity.venue}
            </p>
            </div>
        )}
        </div>
        
    );
}

export default TimelineRightSection;