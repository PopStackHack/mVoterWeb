import './Button.module.scss';

const Button = (props) => {
  return (
    <button
      {...props}
      className={`Button ${props.className ?? ''}`}>
      {props.children}
    </button>
  );
}

export default Button;
