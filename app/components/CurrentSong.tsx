import React from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
}

interface CurrentSongProps {
  song: Song;
}

const CurrentSong: React.FC<CurrentSongProps> = ({ song }) => {
  console.log('Rendering CurrentSong');
  return (
    <div className="current-song">
      <h1>Now Playing</h1>
      <h2>
        {song.title} by {song.artist}
      </h2>
      <input type="range" min="0" max="100" />
    </div>
  );
};

export default CurrentSong;
