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
          className={`filter-button ${activeButton === false ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(false)}
        >
          3Lap
        </button>
        <button
          className={`filter-button ${activeButton === true ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(true)}
        >
          Flap
        </button>
      </div>
    );
  }
}

export default FlapButtons;
