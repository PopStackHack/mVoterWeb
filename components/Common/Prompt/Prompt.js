import './Prompt.scss';

const Prompt = props => {
  const { children, onClose } = props;

  return (
    <div className="Prompt d-flex justify-content-between">
      <div className="Prompt__children">{children}</div>
      <div className="Prompt__buttons">
        <button type="button">
          <i className="material-icons" onClick={onClose}>
            cancel
          </i>
        </button>
      </div>
    </div>
  );
};

export default Prompt;
