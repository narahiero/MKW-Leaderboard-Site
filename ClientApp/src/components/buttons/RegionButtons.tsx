import React from 'react';
import { Country, World, America, LatinAmerica, Europe, USA, Canada, France, UKIreland, Spain, Portugal, Italy, GermanyAustria, Benelux, Nordic, Japan } from '../../types';

interface RegionButtonProps {
  onButtonClick: (region: Country[]) => void;
}

interface RegionButtonsState {
  activeRegion: Country[];
}

class RegionButtons extends React.Component<RegionButtonProps, RegionButtonsState> {
  constructor(props: RegionButtonProps) {
    super(props);
    this.state = {
      activeRegion: World,
    };
  }

  handleButtonClick = (region: Country[]) => {
    this.setState({ activeRegion: region });
    this.props.onButtonClick(region);
  };

  render() {
    const { activeRegion } = this.state;

    return (
      <div className="button-container">
        <button
          className={`filter-button ${activeRegion === World ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(World)}
        >
          <span className="nobr">World</span>
        </button>
        <button
          className={`filter-button ${activeRegion === America ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(America)}
        >
          <span className="nobr">America</span>
        </button>
        <button
          className={`filter-button ${activeRegion === LatinAmerica ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(LatinAmerica)}
        >
          <span className="nobr">Latin America</span>
        </button>
        <button
          className={`filter-button ${activeRegion === Europe ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Europe)}
        >
          <span className="nobr">Europe</span>
        </button>
        <button
          className={`filter-button ${activeRegion === USA ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(USA)}
        >
          <span className="nobr">USA</span>
        </button>
        <button
          className={`filter-button ${activeRegion === Canada ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Canada)}
        >
          <span className="nobr">Canada</span>
        </button>
        <button
          className={`filter-button ${activeRegion === France ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(France)}
        >
          <span className="nobr">France</span>
        </button>
        <button
          className={`filter-button ${activeRegion === UKIreland ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(UKIreland)}
        >
          <span className="nobr">UK & Ireland</span>
        </button>
        <button
          className={`filter-button ${activeRegion === Spain ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Spain)}
        >
          <span className="nobr">Spain</span>
        </button>
        <button
          className={`filter-button ${activeRegion === Portugal ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Portugal)}
        >
          <span className="nobr">Portugal</span>
        </button>
        <button
          className={`filter-button ${activeRegion === Italy ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Italy)}
        >
          <span className="nobr">Italy</span>
        </button>
        <button
          className={`filter-button ${activeRegion === GermanyAustria ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(GermanyAustria)}
        >
          <span className="nobr">Germany & Austria</span>
        </button>
        <button
          className={`filter-button ${activeRegion === Benelux ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Benelux)}
        >
          <span className="nobr">Benelux</span>
        </button>
        <button
          className={`filter-button ${activeRegion === Nordic ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Nordic)}
        >
          <span className="nobr">Nordic</span>
        </button>
        <button
          className={`filter-button ${activeRegion === Japan ? 'filter-button-active' : ''}`}
          onClick={() => this.handleButtonClick(Japan)}
        >
          <span className="nobr">Japan</span>
        </button>
      </div>
    );
  }
}

export default RegionButtons;