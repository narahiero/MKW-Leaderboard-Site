// Sidebar component
import React, { useState } from 'react';
import { LongTrack, Track } from '../../types/enums';
import '../App.css';

interface SidebarProps {
  onTrackSelect: (track: Track) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onTrackSelect }) => {
  const [selectedTrack, setSelectedTrack] = useState<Track>(Track.LC);

  const handleTrackSelect = (track: Track) => {
    setSelectedTrack(track);
    onTrackSelect(track); // Pass the selected track to the parent component if needed
  };

  const filteredTracks = Object.values(Track).filter(track => LongTrack[track as Track] !== undefined);

  return (
    <div className="sidebar">
      <h2>Tracks</h2>
      <ul>
        {filteredTracks.map((track) => (
          <li key={track} className={selectedTrack === track ? 'active' : ''}>
            <button onClick={() => handleTrackSelect(track as Track)}>{LongTrack[track as Track]}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
