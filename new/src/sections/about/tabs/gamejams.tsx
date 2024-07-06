import { GAMEJAMS } from "../../../constants/gamejams";

const GameJams = (): JSX.Element => {
  return (
    <div className="gamejams">
      <div className="gamejams-text">
        <div className="gamejams-text-caption">Showcase Your Skills</div>
        <div className="gamejams-text-title">Yearly Game Jams</div>
        <div className="gamejams-text-description">Game Jams are a way to get students involved in making games.</div>
      </div>
      <div className="gamejams-cards">
        {GAMEJAMS.map((gamejam) => (
          <div className="gamejams-card" key={gamejam.title}>
            <div className="gamejams-card-image">
              <img src={gamejam.image} alt="" />
            </div>
            <div className="gamejams-card-text">
              <div className="gamejams-card-text-title">{gamejam.title}</div>
              <div className="gamejams-card-text-period">{gamejam.period}</div>
              <div className="gamejams-card-text-description">{gamejam.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameJams;
