import React from 'react';

const Tab = React.forwardRef((props, ref) => {
  const { title, value, index, active, onClick } = props;
  return (
    <div
      ref={ref}
      onClick={() => onClick(value, index)}
      className={` ${active ? 'tab-active' : ''}`}
    >
      <div className="cursor-pointer">{title}</div>
    </div>
  );
});

export default Tab;
