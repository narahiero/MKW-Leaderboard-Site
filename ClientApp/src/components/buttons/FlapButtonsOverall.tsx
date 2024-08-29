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
          className={`filter-button ${activeButton === FlapOverallButtonState.Overall ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(FlapOverallButtonState.Overall)}
        >
          Overall
        </button>
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
      </div>
    );
  }
}

export default FlapButtonsOverall;
