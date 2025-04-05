import timelineIcon from "../../assets/icons/timeline.png";
import TimelineRightSection from "./timelineRightSection";

const Timeline = (): JSX.Element => {
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
        <div>Timeline here!</div>
      </div>
      <div className="timeline-right">
        <TimelineRightSection
          weekIndex={7}
        />
      </div>
    </div>
  );
};

export default Timeline;
