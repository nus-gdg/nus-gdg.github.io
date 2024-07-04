import { COLLABORATIONS } from "../../../constants/collaborations";

const Collaborations = (): JSX.Element => {
  return (
    <div className="collaboration">
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
  );
};

export default Collaborations;
