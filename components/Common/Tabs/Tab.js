import React from 'react';

const Tab = React.forwardRef((props, ref) => {
  const {
    children,
    title,
    value,
    index,
    active,
    onClick,
  } = props;

  return (
    <div
      ref={ref}
      onClick={() => onClick(value, index)}
      className={active ? `tab-active ${props.style}` : `${props.style}`}>
      <div className="TabTitle">{title}</div>
    </div>
  );
});

export default Tab;
