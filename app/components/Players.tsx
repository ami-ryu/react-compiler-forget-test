import { useCallback, useMemo, useState } from 'react';
import CurrentSong from './CurrentSong';
import Playlist from './Playlist';

interface Song {
  id: number;
  title: string;
  artist: string;
}

function Players() {
  const [currentSong, setCurrentSong] = useState({
    id: 1,
    title: 'Song 1',
    artist: 'Artist 1',
  });
  const [playlist, setPlaylist] = useState<Song[]>(randomPlaylist);
  const memoizedPlaylist = useMemo(() => playlist, [playlist]);

  return (
    <div className="app">
      <CurrentSong
        song={currentSong}
        // changeProgress={memoizedChangeProgress}
      />
      <button
        onClick={() => setCurrentSong(playlist[Math.floor(Math.random() * 10)])}
      >
        랜덤 곡 재생
      </button>

      <Playlist
        songs={playlist}
        // songs={memoizedPlaylist}
      />
    </div>
  );
}

const randomPlaylist = [
  { id: 2, title: 'NCT Wish', artist: 'NCT Sakuya, Riku' },
  { id: 3, title: 'Smoothie', artist: 'NCT Dream' },
  { id: 4, title: '무한적아', artist: 'NCT 127' },
  { id: 4, title: 'ISTJ', artist: 'NCT Dream' },
  { id: 4, title: 'Candy', artist: 'NCT Dream' },
  { id: 4, title: 'Sail way', artist: 'NCT Wish' },
  { id: 4, title: '청춘의 포말', artist: 'NCT Doyoung' },
  { id: 4, title: 'Perfume', artist: 'NCT 도재정' },
  { id: 4, title: '2 Baddies', artist: 'NCT 127' },
  { id: 4, title: '사쿠란보', artist: 'NCT Sakuya' },
  { id: 4, title: 'Sticker', artist: 'NCT 127' },
  { id: 4, title: 'Colors', artist: 'NCT 127' },
  { id: 4, title: 'Unknown', artist: 'NCT Dream' },
];

export default Players;
