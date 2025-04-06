import timelineIcon from "../../assets/icons/timeline.png";
import TimelineLeftSection from "./timelineLeftSection";

// TODO: replace with actual implementation in the other PR
const thisWeekIndexPlaceholder = () => 12 - 1;

const Timeline = (): JSX.Element => {
  const thisWeekIndex = thisWeekIndexPlaceholder();

  return (
    <div className="timeline">
      <div className="timeline-left">
        <div className="timeline-header">
          <div className="timeline-header-icon">
            <img src={timelineIcon} alt="" />
          </div>
          <div className="timeline-header-text">
            <div className="timeline-header-text-top">
              <div className="timeline-header-text-1">Keep up with us</div>
              <div className="timeline-header-text-2">Timeline of events</div>
            </div>
            <div className="timeline-header-text-3">
              Hover over the icon for each week to check out what exciting activities we have in store this semester.
            </div>
          </div>
        </div>
        <div>
          <TimelineLeftSection weekIndex={thisWeekIndex} />
        </div>
      </div>
      <div className="timeline-right">Right side here!</div>
    </div>
  );
};

export default Timeline;
