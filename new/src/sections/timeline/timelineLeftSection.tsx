import { useState } from "react";

import { TIMELINE } from "../../constants/timeline";
import TimelinePastEventIcon from "../../assets/icons/timeline-past-event.png";
import TimelineBackgroundLineShape from "../../assets/icons/timeline-background-line.svg";
import "./timelineLeftSection.scss";

const TIMELINE_BASE_CIRCLE_X_GAP = 150;
const TIMELINE_BASE_CIRCLE_Y_GAP = 116;
const TIMELINE_EVEN_NUMBER_ROW_DISPLACEMENT = -20;

interface TimelineBaseCircleProps {
  thisWeekIndex: number;
  circleIndex: number;
}

interface TimelineLeftSectionProps {
  weekIndex: number;
}

const TimelineBaseCircle = ({ thisWeekIndex, circleIndex }: TimelineBaseCircleProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  const isPast = thisWeekIndex > circleIndex;
  const isCurrent = thisWeekIndex === circleIndex;
  let dx =
    circleIndex % 8 < 4
      ? (circleIndex % 4) * TIMELINE_BASE_CIRCLE_X_GAP
      : (3 - (circleIndex % 4)) * TIMELINE_BASE_CIRCLE_X_GAP + TIMELINE_EVEN_NUMBER_ROW_DISPLACEMENT;
  let dy = Math.floor(circleIndex / 4) * TIMELINE_BASE_CIRCLE_Y_GAP;

  if (circleIndex < 4 || circleIndex > 11) {
    dy += 8; // slight adjustment due to line having unequal gap
  }

  const mainActivity = TIMELINE.weeks[circleIndex].mainActivity;
  const mainActivityName = typeof mainActivity === "string" ? mainActivity : mainActivity?.name;
  const specialActivityName = TIMELINE.weeks[circleIndex].specialActivity?.name;

  return (
    <div
      className={`timeline-base-circle-container`}
      style={{ position: "absolute", left: `${dx}px`, top: `${dy}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <div
          className={`timeline-base-circle-unhovered timeline-base-circle-unhovered-${isPast ? "past" : isCurrent ? "current" : "future"}`}
        >
          <div className="timeline-base-circle-unhovered-text">Week {`${circleIndex + 1}`}</div>
        </div>
      )}
      {isHovered && isPast && (
        <div className="timeline-base-circle-hovered timeline-base-circle-hovered-past">
          <img
            src={TimelinePastEventIcon}
            alt="timeline-past-event-icon"
            className="timeline-base-circle-hovered-past-icon"
          />
        </div>
      )}
      {isHovered && !isPast && (
        <div
          className={`timeline-base-circle-hovered timeline-base-circle-hovered-${isCurrent ? "current" : "future"}`}
        >
          <div className="timeline-base-circle-hovered-text">
            {mainActivityName && <li>{mainActivityName}</li>}
            {specialActivityName && <li>{specialActivityName}</li>}
          </div>
        </div>
      )}
    </div>
  );
};

const TimelineLeftSection = ({ weekIndex }: TimelineLeftSectionProps): JSX.Element => {
  return (
    <div className="timeline-left-section">
      <div className="timeline-left-section-content">
        <img
          src={TimelineBackgroundLineShape}
          alt="timeline-background-line"
          className="timeline-left-section-background-line"
        />
        <div className="timeline-left-section-circles">
          {TIMELINE.weeks.map((_, index) => (
            <TimelineBaseCircle key={index} thisWeekIndex={weekIndex} circleIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TimelineLeftSection;
