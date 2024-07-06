import { COLLABORATIONS } from "../../../constants/collaborations";

const Collaborations = (): JSX.Element => {
  return (
    <div className="collaboration">
      <div className="collaboration-header">
        <div className="collaboration-header-title">Collaborations</div>
        <div className="collaboration-header-description">
          We host collaborations within the NUS GDG to get students involved in making games. Members may choose to join
          either or both of the following pathways depending on skill level.
        </div>
      </div>
      <div className="collaboration-list">
        {COLLABORATIONS.map((collaboration) => (
          <div key={collaboration.title} className="collaboration-item">
            <div className="collaboration-item-header">
              <img className="collaboration-item-header-img" src={collaboration.image} alt="" />
              <div className="collaboration-item-header-text">{collaboration.level}</div>
            </div>
            <div className="collaboration-item-body">
              <div className="collaboration-item-body-title">{collaboration.title}</div>
              <div className="collaboration-item-body-description">{collaboration.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborations;
