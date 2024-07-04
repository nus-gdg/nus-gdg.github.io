import { useMemo, useState } from "react";
import aboutActivityIcon from "../../assets/icons/about-activity.svg";
import workshopIcon from "../../assets/icons/activity-workshops.svg";
import workshopIconFocused from "../../assets/icons/activity-workshops-focused.svg";
import collaborationIcon from "../../assets/icons/activity-collaboration.svg";
import collaborationIconFocused from "../../assets/icons/activity-collaboration-focused.svg";
import gameJamsIcon from "../../assets/icons/activity-game-jams.svg";
import gameJamsIconFocused from "../../assets/icons/activity-game-jams-focused.svg";
import talksIcon from "../../assets/icons/activity-talks.svg";
import talksIconFocused from "../../assets/icons/activity-talks-focused.svg";
import useViewportDimensions from "../../hooks/useViewportWidth";
import Workshops from "./tabs/workshops";
import Collaborations from "./tabs/collaborations";
import ProfessionalTalks from "./tabs/professional-talks";

const About = (): JSX.Element => {
  const [currTab, setCurrTab] = useState<number>(0);

  return (
    <div id="about" className="about">
      <div className="about-header">
        <div className="about-header-img">
          <img src={aboutActivityIcon} alt="" />
        </div>
        <div className="about-header-text">
          <div className="about-header-text-upper">What do we do?</div>
          <div className="about-header-text-lower">Our activities</div>
        </div>
      </div>
      <div className="about-body">
        <div className="about-nav">
          <NavButton
            text="Game Development Workshops & Tutorials"
            icon={workshopIcon}
            focusIcon={workshopIconFocused}
            isFocused={currTab === 0}
            onClick={() => setCurrTab(0)}
          />
          <NavButton
            text="Collaborations"
            icon={collaborationIcon}
            focusIcon={collaborationIconFocused}
            isFocused={currTab === 1}
            onClick={() => setCurrTab(1)}
          />
          <NavButton
            text="Game Jams"
            icon={gameJamsIcon}
            focusIcon={gameJamsIconFocused}
            isFocused={currTab === 2}
            onClick={() => setCurrTab(2)}
          />
          <NavButton
            text="Professional Talks"
            icon={talksIcon}
            focusIcon={talksIconFocused}
            isFocused={currTab === 3}
            onClick={() => setCurrTab(3)}
          />
        </div>
        <div className="about-sections">
          {currTab === 0 && <Workshops />}
          {currTab === 1 && <Collaborations />}
          {currTab === 2 && <div>Game Jams</div>} {/* Add Game Jams component */}
          {currTab === 3 && <ProfessionalTalks />}
        </div>
      </div>
    </div>
  );
};

const NavButton = ({
  text,
  icon,
  focusIcon,
  isFocused,
  onClick,
}: {
  text: string;
  icon: string;
  focusIcon: string;
  isFocused: boolean;
  onClick: () => void;
}): JSX.Element => {
  const { viewportType } = useViewportDimensions();
  const triangleWidth = useMemo(() => (viewportType === "lg" ? 40 : 20), [viewportType]);
  const triangleHeight = useMemo(() => (viewportType === "lg" ? 140 : 100), [viewportType]);

  return (
    <div className="about-nav-button" onClick={onClick}>
      <div className={"about-nav-button-main" + (isFocused ? " about-nav-button-main-focused" : "")}>
        <div className="about-nav-button-icon">
          <img src={isFocused ? focusIcon : icon} alt="" />
        </div>
        <div className="about-nav-button-text">{text}</div>
      </div>
      <div className={"about-nav-button-after" + (isFocused ? " about-nav-button-after-focused" : "")}>
        <svg width={`${triangleWidth}px`} height={`${triangleHeight}px`}>
          <polygon points={`0,0 0,${triangleHeight} ${triangleWidth},${triangleHeight}`} />
          <line x1="0" y1="0" x2="100%" y2="100%" />
          <line x1="0" y1="100%" x2="100%" y2="100%" />
        </svg>
      </div>
    </div>
  );
};

export default About;
