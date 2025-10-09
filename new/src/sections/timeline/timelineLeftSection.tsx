import { useMemo, useState } from "react";

import { TIMELINE } from "../../constants/timeline";
import TimelinePastEventIcon from "../../assets/icons/timeline-past-event.png";
import TimelineBackgroundLineShape from "../../assets/icons/timeline-background-line.svg";

const TIMELINE_BASE_CIRCLE_X_GAP = 150;
const TIMELINE_EVEN_NUMBER_ROW_X_DISPLACEMENT = -20;
const TIMELINE_BASE_CIRCLE_Y_OFFSET = 10;
const TIMELINE_BASE_CIRCLE_Y_GAP = 107;

interface TimelineBaseCircleProps {
  currentWeekNumber: number;
  circleIndex: number;
}

interface TimelineLeftSectionProps {
  weekIndex: number;
}

const TimelineBaseCircle = ({ currentWeekNumber, circleIndex }: TimelineBaseCircleProps): JSX.Element => {
  const [hovered, setHovered] = useState(false);

  const circleWeekNumber = circleIndex + 1;
  const isPast = currentWeekNumber > circleWeekNumber;
  const isCurrent = currentWeekNumber === circleWeekNumber;

  const dx = useMemo(() => {
    return circleIndex % 8 < 4
      ? (circleIndex % 4) * TIMELINE_BASE_CIRCLE_X_GAP
      : (3 - (circleIndex % 4)) * TIMELINE_BASE_CIRCLE_X_GAP + TIMELINE_EVEN_NUMBER_ROW_X_DISPLACEMENT;
  }, [circleIndex]);

  const dy = useMemo(() => {
    return TIMELINE_BASE_CIRCLE_Y_OFFSET + Math.floor(circleIndex / 4) * TIMELINE_BASE_CIRCLE_Y_GAP;
  }, [circleIndex]);

  const circleTimelineIndex = circleIndex < 6 ? circleIndex : circleIndex + 1; // the circle's timeline item index, skipping recess week
  const mainActivity = TIMELINE.weeks[circleTimelineIndex].mainActivity;
  const mainActivityName = typeof mainActivity === "string" ? mainActivity : mainActivity?.name;
  const specialActivityName = TIMELINE.weeks[circleTimelineIndex].specialActivity?.name;

  const pastUnhoveredCircle = useMemo(() => {
    return <div className="timeline-base-circle-unhovered-text">Week {`${circleWeekNumber}`}</div>;
  }, [circleWeekNumber]);

  const pastHoveredCircle = useMemo(() => {
    return (
      <img src={TimelinePastEventIcon} alt="timeline-past-event-icon" className="timeline-base-circle-past-icon" />
    );
  }, []);

  const nonPastUnhoveredCircle = useMemo(() => {
    return <div className="timeline-base-circle-unhovered-text">Week {`${circleWeekNumber}`}</div>;
  }, [circleWeekNumber]);

  const nonPastHoveredCircle = useMemo(() => {
    return (
      <div className="timeline-base-circle-hovered-text">
        {mainActivityName && <li>{mainActivityName}</li>}
        {specialActivityName && <li>{specialActivityName}</li>}
      </div>
    );
  }, [mainActivityName, specialActivityName]);

  return (
    <div
      className={`timeline-base-circle-container`}
      style={{ position: "absolute", left: `${dx}px`, top: `${dy}px`, borderRadius: "50%" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isPast && (
        <div className={"timeline-base-circle timeline-base-circle-past"}>
          {!hovered && pastUnhoveredCircle}
          {hovered && pastHoveredCircle}
        </div>
      )}

      {!isPast && (
        <div className={`timeline-base-circle timeline-base-circle-${isCurrent ? "current" : "future"}`}>
          {!hovered && nonPastUnhoveredCircle}
          {hovered && nonPastHoveredCircle}
        </div>
      )}
    </div>
  );
};

const TimelineLeftSection = ({ weekIndex }: TimelineLeftSectionProps): JSX.Element => {
  const currentWeekNumber = weekIndex < 7 ? weekIndex + 1 : weekIndex;
  return (
    <div className="timeline-left-section">
      <div className="timeline-left-section-content">
        <img
          src={TimelineBackgroundLineShape}
          alt="timeline-background-line"
          className="timeline-left-section-background-line"
        />
        <div className="timeline-left-section-circles">
          {TIMELINE.weeks.map((_, index) => {
            if (index === 6) {
              // skip recess week
              return null;
            }
            const circleIndex = index < 6 ? index : index - 1;
            return (
              <TimelineBaseCircle key={circleIndex} currentWeekNumber={currentWeekNumber} circleIndex={circleIndex} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TimelineLeftSection;
