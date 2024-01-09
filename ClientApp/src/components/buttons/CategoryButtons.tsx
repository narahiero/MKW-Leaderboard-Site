import React from 'react';

interface CategoryButtonsProps {
  onButtonClick: (buttonType: boolean) => void;
}

class CategoryButtons extends React.Component<CategoryButtonsProps> {
  render() {
    const { onButtonClick } = this.props;

    return (
        <div className="button-container">
          <button className="cool-button" onClick={() => onButtonClick(true)}>
            Non-SC
          </button>
          <button className="cool-button" onClick={() => onButtonClick(false)}>
            Unrestricted
          </button>
        </div>
      );
  }
}

export default CategoryButtons;