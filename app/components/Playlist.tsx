import React from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
}

interface PlaylistProps {
  songs: Song[];
}

const Playlist: React.FC<PlaylistProps> = ({ songs }) => {
  console.log('Rendering Playlist');
  return (
    <div className="playlist">
      <h2>Up Next</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} by {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

// const Playlist: React.FC<PlaylistProps> = React.memo(({ songs }) => {
//   console.log('Rendering Playlist');
//   return (
//     <div className="playlist">
//       <h2>Up Next</h2>
//       <ul>
//         {songs.map((song) => (
//           <li key={song.id}>
//             {song.title} by {song.artist}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// });

export default Playlist;
