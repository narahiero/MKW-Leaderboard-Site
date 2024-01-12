import React from 'react';
import { America, Europe, LatinAmerica, USA, Canada, France, UKIreland, Spain, Portugal, Italy, GermanyAustria, Benelux, Nordic, Japan, World } from '../../types/regionMap';
import { Country } from '../../types/enums';

interface RegionButtonProps {
  onButtonClick: (region: Country[]) => void;
}

class RegionButtons extends React.Component<RegionButtonProps> {
  render() {
    const { onButtonClick } = this.props;

    return (
        <div className="button-container">
            <button className="cool-button" onClick={() => onButtonClick(World)}>
                <span className="nobr">World</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(America)}>
                <span className="nobr">America</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(LatinAmerica)}>
                <span className="nobr">Latin America</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Europe)}>
                <span className="nobr">Europe</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(USA)}>
                <span className="nobr">USA</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Canada)}>
                <span className="nobr">Canada</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(France)}>
                <span className="nobr">France</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(UKIreland)}>
                <span className="nobr">UK & Ireland</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Spain)}>
                <span className="nobr">Spain</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Portugal)}>
                <span className="nobr">Portugal</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Italy)}>
                <span className="nobr">Italy</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(GermanyAustria)}>
                <span className="nobr">Germany & Austria</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Benelux)}>
                <span className="nobr">Benelux</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Nordic)}>
                <span className="nobr">Nordic</span>
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Japan)}>
                <span className="nobr">Japan</span>
            </button>
        </div>
      );
  }
}

export default RegionButtons;