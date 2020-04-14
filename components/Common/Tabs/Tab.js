const Tab = ({ title, children, moveSlider, index }) => {
  function onTabClick() {
    moveSlider(index);
  }

  return (
    <div onClick={onTabClick}>
      {children}
    </div>
  );
};

export default Tab;
