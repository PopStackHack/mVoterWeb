import './Button.module.scss';

const Button = props => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button {...props} className={`Button ${props.className ?? ''}`}>
      {props.children}
    </button>
  );
};

export default Button;
