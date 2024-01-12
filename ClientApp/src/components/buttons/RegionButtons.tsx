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
                World
            </button>
            <button className="cool-button" onClick={() => onButtonClick(America)}>
                America
            </button>
            <button className="cool-button" onClick={() => onButtonClick(LatinAmerica)}>
                Latin America
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Europe)}>
                Europe
            </button>
            <button className="cool-button" onClick={() => onButtonClick(USA)}>
                USA
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Canada)}>
                Canada
            </button>
            <button className="cool-button" onClick={() => onButtonClick(France)}>
                France
            </button>
            <button className="cool-button" onClick={() => onButtonClick(UKIreland)}>
                UK & Ireland
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Spain)}>
                Spain
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Portugal)}>
                Portugal
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Italy)}>
                Italy
            </button>
            <button className="cool-button" onClick={() => onButtonClick(GermanyAustria)}>
                Germany & Austria
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Benelux)}>
                Benelux
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Nordic)}>
                Nordic
            </button>
            <button className="cool-button" onClick={() => onButtonClick(Japan)}>
                Japan
            </button>
        </div>
      );
  }
}

export default RegionButtons;