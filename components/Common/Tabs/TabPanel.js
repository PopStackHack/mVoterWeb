import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import TabSlider from './TabSlider';

import './TabPanel.module.scss';

const offsettingWidth = 20;
const offsettingPosition = offsettingWidth / 2;

class TabPanel extends PureComponent {
  state = {
    computedSliderWidth: 0,
    sliderPosition: 0,
    activeTabIndex: 0,
  }

  componentDidMount() {
    this.setState({
      computedSliderWidth: Math.floor(this.refs[`tab0`].getBoundingClientRect().width - offsettingWidth),
      sliderPosition: this.refs[`tab0`].getBoundingClientRect().x + offsettingPosition,
    });
  }

  moveSlider = (sliderIndex) => {
    this.setState({
      activeTabIndex: sliderIndex,
      computedSliderWidth: Math.floor(this.refs[`tab${sliderIndex}`].getBoundingClientRect().width - offsettingWidth),
      sliderPosition: this.refs[`tab${sliderIndex}`].getBoundingClientRect().x + offsettingPosition,
    });
  }

  onClickTab = (value, index) => {
    this.moveSlider(index);
    this.props.onClickTab(value, index);
  }

  render() {
    const tabs = this.props.children;
    return (
      <>
        <div className="TabPanel">
          <div className="TabPanel__Tabs" ref="tabPanel">
            {
              React.Children
                .map(
                  tabs,
                  (child, index) => React
                    .cloneElement(child, {
                      index,
                      ref: `tab${index}`,
                      onClick: this.onClickTab,
                      active: index === this.state.activeTabIndex,
                      activeClass: this.props.activeClass || 'tab-active',
                    })
                )
            }
          </div>
          <TabSlider
            width={this.state.computedSliderWidth}
            left={this.state.sliderPosition}
          />
        </div>
        {/* This is rather a dirty hack */}
        <div className="TabPanel__TabContent">
            {
              React.Children
                .map(
                tabs,
                (child, index) => (
                  <div style={{ display: index === this.state.activeTabIndex ? 'block' : 'none' }}>{child.props.children}</div>
                ))
            }
        </div>
      </>
    );
  }
}

TabPanel.propTypes = {
  activeClass: propTypes.string,
}

export default TabPanel;
