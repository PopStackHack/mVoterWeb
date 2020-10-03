import React, { PureComponent } from 'react';
import TabSlider from './TabSlider';

import './TabPanel.module.scss';

class TabPanel extends PureComponent {
  state = {
    computedSliderWidth: 0,
    sliderPosition: 0,
    activeTabIndex: 0
  };

  componentDidMount() {
    this.setSliderPosition();
  }

  setSliderPosition = (sliderIndex = 0) => {
    const tabX = this.refs[`tab${sliderIndex}`].getBoundingClientRect().x;
    const tabPanelX = this.refs.TabPanel.getBoundingClientRect().x;

    this.setState({
      activeTabIndex: sliderIndex,
      computedSliderWidth: Math.floor(
        this.refs[`tab${sliderIndex}`].getBoundingClientRect().width
      ),
      sliderPosition: tabX - tabPanelX
    });
  };

  moveSlider = sliderIndex => {
    this.setSliderPosition(sliderIndex);
  };

  onClickTab = (value, index) => {
    this.moveSlider(index);
    this.props.onClickTab(value, index);
  };

  render() {
    const tabs = this.props.children;
    return (
      <>
        <div className="TabPanel" ref="TabPanel">
          <div className="TabPanel__Tabs">
            {React.Children.map(tabs, (child, index) =>
              React.cloneElement(child, {
                index,
                ref: `tab${index}`,
                onClick: this.onClickTab,
                active: index === this.state.activeTabIndex
              })
            )}
          </div>
          <TabSlider
            width={this.state.computedSliderWidth}
            left={this.state.sliderPosition}
          />
        </div>
        {/* This is rather a dirty hack */}
        <div className="TabPanel__TabContent">
          {React.Children.map(tabs, (child, index) => (
            <div
              style={{
                display: index === this.state.activeTabIndex ? 'block' : 'none'
              }}
            >
              {child.props.children}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default TabPanel;
