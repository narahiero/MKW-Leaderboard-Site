import React from 'react';
import { FlapOverallButtonState } from '../../types';

interface FlapButtonsOverallTotalTimeProps {
  onButtonClick: (buttonType: FlapOverallButtonState) => void;
}

interface FlapButtonsOverallTotalTimeState {
  activeButton: FlapOverallButtonState | null;
}

class FlapButtonsOverallTotalTime extends React.Component<FlapButtonsOverallTotalTimeProps, FlapButtonsOverallTotalTimeState> {
  constructor(props: FlapButtonsOverallTotalTimeProps) {
    super(props);
    this.state = {
      activeButton: FlapOverallButtonState.ThreeLapOnly,
    };
  }

  handleButtonClick = (buttonType: FlapOverallButtonState) => {
    this.setState({ activeButton: buttonType });
    this.props.onButtonClick(buttonType);
  };

  render() {
    const { activeButton } = this.state;

    return (
      <div className="button-container">
        <button
          className={`filter-button ${activeButton === FlapOverallButtonState.ThreeLapOnly ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(FlapOverallButtonState.ThreeLapOnly)}
        >
          3Lap only
        </button>
        <button
          className={`filter-button ${activeButton === FlapOverallButtonState.FlapOnly ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(FlapOverallButtonState.FlapOnly)}
        >
          Flap only
        </button>
        <button
          className={`filter-button ${activeButton === FlapOverallButtonState.Overall ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(FlapOverallButtonState.Overall)}
        >
          Overall
        </button>
      </div>
    );
  }
}

export default FlapButtonsOverallTotalTime;
