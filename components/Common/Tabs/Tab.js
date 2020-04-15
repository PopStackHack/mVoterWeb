import React from 'react';

const Tab = React.forwardRef((props, ref) => {
  const { title, children, moveSlider, index, active } = props;

  function onTabClick() {
    moveSlider(index);
  }

  return (

    <div onClick={onTabClick} ref={ref} className={active ? `tab-active ${props.style}` : `${props.style}`}>
      <div className="TabTitle">{title}</div>
    </div>
  );
});

export default Tab;
