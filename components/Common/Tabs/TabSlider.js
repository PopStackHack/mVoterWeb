import './TabSlider.scss';

const TabSlider = ({ left, width = 100 }) => {
  return <div className="slider" style={{ width, transform: `translateX(${left}px)` }}></div>;
}

export default TabSlider;
