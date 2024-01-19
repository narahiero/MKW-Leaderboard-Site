import React from 'react';
import { FlapOverallButtonState } from '../../types/enums';

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
          className={`cool-button ${activeButton === FlapOverallButtonState.ThreeLapOnly ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(FlapOverallButtonState.ThreeLapOnly)}
        >
          3Lap only
        </button>
        <button
          className={`cool-button ${activeButton === FlapOverallButtonState.FlapOnly ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(FlapOverallButtonState.FlapOnly)}
        >
          Flap only
        </button>
        <button
          className={`cool-button ${activeButton === FlapOverallButtonState.Overall ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(FlapOverallButtonState.Overall)}
        >
          Overall
        </button>
      </div>
    );
  }
}

export default FlapButtonsOverallTotalTime;
