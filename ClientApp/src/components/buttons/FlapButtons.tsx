import React from 'react';

interface FlapButtonsProps {
  onButtonClick: (buttonType: boolean) => void;
}

interface FlapButtonsState {
  activeButton: boolean | null;
}

class FlapButtons extends React.Component<FlapButtonsProps, FlapButtonsState> {
  constructor(props: FlapButtonsProps) {
    super(props);
    this.state = {
      activeButton: false,
    };
  }

  handleButtonClick = (buttonType: boolean) => {
    this.setState({ activeButton: buttonType });
    this.props.onButtonClick(buttonType);
  };

  render() {
    const { activeButton } = this.state;

    return (
      <div className="button-container">
        <button
          className={`cool-button ${activeButton === false ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(false)}
        >
          3Lap
        </button>
        <button
          className={`cool-button ${activeButton === true ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(true)}
        >
          Flap
        </button>
      </div>
    );
  }
}

export default FlapButtons;
