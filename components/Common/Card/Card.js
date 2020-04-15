import './Card.scss';

const Card = (props) => (
  <div className={`Card ${props.className ? props.className : ''}`}>
    {props.children}
  </div>
);

export default Card;
