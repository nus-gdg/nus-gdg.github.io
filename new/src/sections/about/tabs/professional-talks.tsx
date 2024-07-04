import { useMemo } from "react";
import Button from "../../../components/button/button";
import { PROFESSION_TALKS_LINK } from "../../../constants/professional-talks";
import useViewportDimensions from "../../../hooks/useViewportWidth";

const ProfessionalTalks = (): JSX.Element => {
  return (
    <div className="professional-talks">
      <div className="professional-talks-header">
        <div className="professional-talks-header-title">Professional Talks</div>
        <div className="professional-talks-header-description">
          We occasionally host professional talks on game development and game design. These talks were previously
          conducted by Prof Alex and other guest speakers.
        </div>
      </div>
      <div className="professional-talks-video">
        <TalkVideo />
      </div>
      <div className="professional-talks-footer">
        <Button onClick={() => window.open(PROFESSION_TALKS_LINK, "_blank")}>
          <a href={PROFESSION_TALKS_LINK} target="_blank" rel="noreferrer">
            View More on Youtube
          </a>
        </Button>
      </div>
    </div>
  );
};

const TalkVideo = (): JSX.Element => {
  const ratio = useMemo(() => 315 / 560, []);
  const { viewportType } = useViewportDimensions();
  const width = useMemo(() => (viewportType === "sm" ? 320 : 560), [viewportType]);
  const height = useMemo(() => width * ratio, [width, ratio]);

  return (
    <iframe
      width={width}
      height={height}
      src="https://www.youtube.com/embed/FkarFeYbS-w?si=1IYzI4COIGOMIMs9"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default ProfessionalTalks;
