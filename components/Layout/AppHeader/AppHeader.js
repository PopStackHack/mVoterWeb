import './AppHeader.module.scss';

const AppHeader = (props) => {
  return (
    <div className={`Header ${props.className}`}>
      {props.children}
    </div>
  );
}

export default AppHeader;
