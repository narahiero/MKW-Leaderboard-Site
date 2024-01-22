import React, { useEffect, useState } from 'react';
import '../App.css';
import { getTop10 } from '../../client';
import { Navbar } from '../common';
import { Top10Table } from '../tables';
import { Cup, Country, LeaderBoardTimeEntry, TimeFilter } from '../../types';
import { RegionButtons, CupButtons, GlitchButtons, FlapButtons } from '../buttons';

const Top10sView = () => {
  const [glitchState, setGlitchState] = useState<boolean>(false);
  const [flapState, setFlapState] = useState<boolean>(false);
  const [cupState, setCupState] = useState<Cup>(Cup.MushroomCup);
  const [regionState, setRegionState] = useState<Country[]>([]);
  const [top10Data1, setTop10Data1] = useState<LeaderBoardTimeEntry[]>([]);
  const [top10Data2, setTop10Data2] = useState<LeaderBoardTimeEntry[]>([]);
  const [top10Data3, setTop10Data3] = useState<LeaderBoardTimeEntry[]>([]);
  const [top10Data4, setTop10Data4] = useState<LeaderBoardTimeEntry[]>([]);

  const handleGlitchClick = (buttonType: boolean) => {
    setGlitchState(buttonType);
  };
  const handleFlapClick = (buttonType: boolean) => {
    setFlapState(buttonType);
  };
  const handleCupClick = (cup: Cup) => {
    setCupState(cup);
  };
  const handleRegionClick = (region: Country[]) => {
    setRegionState(region);
  };

  useEffect(() => {
    const fetchData = async () => {
      const baseFilter: TimeFilter = {
        track: cupState * 4,
        glitch: glitchState,
        flap: flapState,
        countries: regionState,
        page: { pageNumber: 1, entriesPerPage: 10}
      };
      const data1 = await getTop10(baseFilter);
      const data2 = await getTop10({ ...baseFilter, track: baseFilter.track + 1 });
      const data3 = await getTop10({ ...baseFilter, track: baseFilter.track + 2 });
      const data4 = await getTop10({ ...baseFilter, track: baseFilter.track + 3 });
      setTop10Data1(data1);
      setTop10Data2(data2);
      setTop10Data3(data3);
      setTop10Data4(data4);
    };
    fetchData();
  }, [cupState, flapState, glitchState, regionState]);

  return (
    <div>
        <Navbar/>
        <div>
        <div>
            <RegionButtons onButtonClick={handleRegionClick} />
        </div>
        <div>
            <CupButtons onButtonClick={handleCupClick} />
        </div>
        <div>
            <GlitchButtons onButtonClick={handleGlitchClick} />
        </div>
        <div>
            <FlapButtons onButtonClick={handleFlapClick} />
        </div>
        <div className="table-container">
            <Top10Table top10s={top10Data1} />
            <Top10Table top10s={top10Data2} />
            <Top10Table top10s={top10Data3} />
            <Top10Table top10s={top10Data4} />
        </div>
        </div>
    </div>
  );
};

export default Top10sView;
