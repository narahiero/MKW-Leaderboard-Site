import React from 'react';
import { FlapOverallButtonState } from '../../types';

interface FlapButtonsOverallProps {
  onButtonClick: (buttonType: FlapOverallButtonState) => void;
}

interface FlapButtonsOverallState {
  activeButton: FlapOverallButtonState | null;
}

class FlapButtonsOverall extends React.Component<FlapButtonsOverallProps, FlapButtonsOverallState> {
  constructor(props: FlapButtonsOverallProps) {
    super(props);
    this.state = {
      activeButton: FlapOverallButtonState.Overall,
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
        className={`cool-button ${activeButton === FlapOverallButtonState.Overall ? 'cool-button-active' : ''}`}
        onClick={() => this.handleButtonClick(FlapOverallButtonState.Overall)}
      >
        Overall
      </button>
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
      </div>
    );
  }
}

export default FlapButtonsOverall;
