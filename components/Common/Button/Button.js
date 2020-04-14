import './Button.scss';

const Button = (props) => {
  return (
    <button className={`Button ${props.className}`}>
      {props.children}
    </button>
  );
}

export default Button;
