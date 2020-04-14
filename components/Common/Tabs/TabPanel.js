import React, { PureComponent } from 'react';
import TabSlider from './TabSlider';

import './TabPanel.scss';

class TabPanel extends PureComponent {
  state = {
    computedSliderWidth: 0,
    sliderPosition: 0,
    activeTabIndex: 0,
  }

  componentDidMount() {
    const totalTabs = this.props.children.filter(({ type: { name } }) => name === 'Tab').length;
    const computedSliderWidth = this.refs.tabPanel.offsetWidth / totalTabs;

    this.setState({
      computedSliderWidth,
    });
  }

  moveSlider = (sliderIndex) => {
    this.setState({
      sliderPosition: this.state.computedSliderWidth * sliderIndex,
    });
  }

  render() {
    const tabs = this.props.children.filter(({ type: { name } }) => name === 'Tab');
    return (
      <div {...this.props} className="TabPanel">
        <div className="TabPanel__Tabs" ref="tabPanel">
          {
            React.Children
              .map(
                tabs,
                (child, index) => React.cloneElement(child, { index: index, moveSlider: this.moveSlider })
              )
          }
        </div>
        <TabSlider
          width={this.state.computedSliderWidth}
          left={this.state.sliderPosition}
        />
      </div>
    );
  }
}

export default TabPanel;
