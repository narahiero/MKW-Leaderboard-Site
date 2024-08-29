import React from 'react';

interface GlitchButtonsProps {
  onButtonClick: (buttonType: boolean) => void;
}

interface GlitchButtonsState {
  activeButton: boolean | null;
}

class GlitchButtons extends React.Component<GlitchButtonsProps, GlitchButtonsState> {
  constructor(props: GlitchButtonsProps) {
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
          Non-SC
        </button>
        <button
          className={`filter-button ${activeButton === true ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(true)}
        >
          Unrestricted
        </button>
      </div>
    );
  }
}

export default GlitchButtons;
