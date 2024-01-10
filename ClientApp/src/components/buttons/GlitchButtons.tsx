import React from 'react';

interface GlitchButtonsProps {
  onButtonClick: (buttonType: boolean) => void;
}

class GlitchButtons extends React.Component<GlitchButtonsProps> {
  render() {
    const { onButtonClick } = this.props;

    return (
        <div className="button-container">
          <button className="cool-button" onClick={() => onButtonClick(false)}>
            Non-SC
          </button>
          <button className="cool-button" onClick={() => onButtonClick(true)}>
            Unrestricted
          </button>
        </div>
      );
  }
}

export default GlitchButtons;