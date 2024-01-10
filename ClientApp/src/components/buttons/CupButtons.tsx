import React from 'react';
import { Cup } from '../../types/enums';

interface CupButtonProps {
  onButtonClick: (cup: Cup) => void;
}

class CupButtons extends React.Component<CupButtonProps> {
  render() {
    const { onButtonClick } = this.props;

    return (
        <div className="button-container">
          <button className="cool-button" onClick={() => onButtonClick(Cup.MushroomCup)}>
            <img src={`/assets/cups/0.png`} alt={Cup[Cup.MushroomCup]} style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }} />
          </button>
          <button className="cool-button" onClick={() => onButtonClick(Cup.FlowerCup)}>
            <img src={`/assets/cups/1.png`} alt={Cup[Cup.FlowerCup]} style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }} />
          </button>
          <button className="cool-button" onClick={() => onButtonClick(Cup.StarCup)}>
            <img src={`/assets/cups/2.png`} alt={Cup[Cup.StarCup]} style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }} />
          </button>
          <button className="cool-button" onClick={() => onButtonClick(Cup.SpecialCup)}>
            <img src={`/assets/cups/3.png`} alt={Cup[Cup.SpecialCup]} style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }} />
          </button>
          <button className="cool-button" onClick={() => onButtonClick(Cup.ShellCup)}>
            <img src={`/assets/cups/4.png`} alt={Cup[Cup.ShellCup]} style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }} />
          </button>
          <button className="cool-button" onClick={() => onButtonClick(Cup.BananaCup)}>
            <img src={`/assets/cups/5.png`} alt={Cup[Cup.BananaCup]} style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }} />
          </button>
          <button className="cool-button" onClick={() => onButtonClick(Cup.LeafCup)}>
            <img src={`/assets/cups/6.png`} alt={Cup[Cup.LeafCup]} style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }} />
          </button>
          <button className="cool-button" onClick={() => onButtonClick(Cup.LightningCup)}>
            <img src={`/assets/cups/7.png`} alt={Cup[Cup.LightningCup]} style={{ maxWidth: '5vh', maxHeight: '5vh', width: 'auto', height: 'auto' }} />
          </button>
        </div>
      );
  }
}

export default CupButtons;