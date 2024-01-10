import React from 'react';

interface CategoryButtonsProps {
  onButtonClick: (buttonType: boolean) => void;
}

class FlapButtons extends React.Component<CategoryButtonsProps> {
  render() {
    const { onButtonClick } = this.props;

    return (
        <div className="button-container">
          <button className="cool-button" onClick={() => onButtonClick(true)}>
            3Lap
          </button>
          <button className="cool-button" onClick={() => onButtonClick(false)}>
            Flap
          </button>
        </div>
      );
  }
}

export default FlapButtons;