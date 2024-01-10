import React from 'react';

interface FlapButtonsProps {
  onButtonClick: (buttonType: boolean) => void;
}

class FlapButtons extends React.Component<FlapButtonsProps> {
  render() {
    const { onButtonClick } = this.props;

    return (
        <div className="button-container">
          <button className="cool-button" onClick={() => onButtonClick(false)}>
            3Lap
          </button>
          <button className="cool-button" onClick={() => onButtonClick(true)}>
            Flap
          </button>
        </div>
      );
  }
}

export default FlapButtons;