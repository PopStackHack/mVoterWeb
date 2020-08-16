import './Card.module.scss';

const Card = (props) => (
  <div {...props} className={`Card ${props.className ? props.className : ''}`}>
    {props.children}
  </div>
);

export default Card;
