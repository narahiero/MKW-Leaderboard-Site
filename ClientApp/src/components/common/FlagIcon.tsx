import React from 'react';
import { Country } from '../../types';

interface FlagProps {
  country: Country;
}

const FlagIcon: React.FC<FlagProps> = ({ country }) => {
  return <img src={`/assets/flags/${Country[country]}.png`} alt={Country[country]} className="flag-icon" />
};

export default FlagIcon;
