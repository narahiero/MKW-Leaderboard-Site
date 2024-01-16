import React from 'react';
import { Cup } from '../../types/enums';

interface CupButtonProps {
  onButtonClick: (cup: Cup) => void;
}

interface CupButtonsState {
  activeCup: Cup;
}

class CupButtons extends React.Component<CupButtonProps, CupButtonsState> {
  constructor(props: CupButtonProps) {
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
        <button
          className={`cool-button ${activeCup === Cup.MushroomCup ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Cup.MushroomCup)}
        >
          <img
            src={`/assets/cups/0.png`}
            alt={Cup[Cup.MushroomCup]}
            style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }}
          />
        </button>
        <button
          className={`cool-button ${activeCup === Cup.FlowerCup ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Cup.FlowerCup)}
        >
          <img
            src={`/assets/cups/1.png`}
            alt={Cup[Cup.FlowerCup]}
            style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }}
          />
        </button>
        <button
          className={`cool-button ${activeCup === Cup.StarCup ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Cup.StarCup)}
        >
          <img
            src={`/assets/cups/2.png`}
            alt={Cup[Cup.StarCup]}
            style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }}
          />
        </button>
        <button
          className={`cool-button ${activeCup === Cup.SpecialCup ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Cup.SpecialCup)}
        >
          <img
            src={`/assets/cups/3.png`}
            alt={Cup[Cup.SpecialCup]}
            style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }}
          />
        </button>
        <button
          className={`cool-button ${activeCup === Cup.ShellCup ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Cup.ShellCup)}
        >
          <img
            src={`/assets/cups/4.png`}
            alt={Cup[Cup.ShellCup]}
            style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }}
          />
        </button>
        <button
          className={`cool-button ${activeCup === Cup.BananaCup ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Cup.BananaCup)}
        >
          <img
            src={`/assets/cups/5.png`}
            alt={Cup[Cup.BananaCup]}
            style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }}
          />
        </button>
        <button
          className={`cool-button ${activeCup === Cup.LeafCup ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Cup.LeafCup)}
        >
          <img
            src={`/assets/cups/6.png`}
            alt={Cup[Cup.LeafCup]}
            style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }}
          />
        </button>
        <button
          className={`cool-button ${activeCup === Cup.LightningCup ? 'cool-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Cup.LightningCup)}
        >
          <img
            src={`/assets/cups/7.png`}
            alt={Cup[Cup.LightningCup]}
            style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }}
          />
        </button>
      </div>
    );
  }
}

export default CupButtons;
