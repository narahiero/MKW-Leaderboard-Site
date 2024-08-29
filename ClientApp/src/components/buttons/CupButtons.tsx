import React from 'react';
import { Cup } from '../../types';


interface CupButtonProps {
  cup: Cup;
  activeCup: Cup;
  onClick: (cup: Cup) => void;
}

const CupButton: React.FC<CupButtonProps> = ({ cup, activeCup, onClick }) => {
  return (
    <button
      className={`filter-button img-filter-button ${cup === activeCup ? 'filter-button-active' : ''}`}
      onClick={() => onClick(cup)}
    >
      <img src={`/assets/cups/${cup}.png`} alt={Cup[cup]} />
    </button>
  );
};

interface CupButtonsProps {
  onButtonClick: (cup: Cup) => void;
}

interface CupButtonsState {
  activeCup: Cup;
}

class CupButtons extends React.Component<CupButtonsProps, CupButtonsState> {
  constructor(props: CupButtonsProps) {
    super(props);
    this.state = {
      activeCup: Cup.MushroomCup,
    };
  }

  handleButtonClick = (cup: Cup) => {
    this.setState({ activeCup: cup });
    this.props.onButtonClick(cup);
  };

  render() {
    const { activeCup } = this.state;

    return (
      <div className="button-container">
        <CupButton cup={Cup.MushroomCup} activeCup={activeCup} onClick={this.handleButtonClick} />
        <CupButton cup={Cup.FlowerCup} activeCup={activeCup} onClick={this.handleButtonClick} />
        <CupButton cup={Cup.StarCup} activeCup={activeCup} onClick={this.handleButtonClick} />
        <CupButton cup={Cup.SpecialCup} activeCup={activeCup} onClick={this.handleButtonClick} />
        <CupButton cup={Cup.ShellCup} activeCup={activeCup} onClick={this.handleButtonClick} />
        <CupButton cup={Cup.BananaCup} activeCup={activeCup} onClick={this.handleButtonClick} />
        <CupButton cup={Cup.LeafCup} activeCup={activeCup} onClick={this.handleButtonClick} />
        <CupButton cup={Cup.LightningCup} activeCup={activeCup} onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default CupButtons;
