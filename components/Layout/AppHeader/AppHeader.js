import './AppHeader.module.scss';

const AppHeader = (props) => {
  return (
    <div className={`AppHeader ${props.className}`}>
      {props.children}
    </div>
  );
}

export default AppHeader;
