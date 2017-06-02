import { Player } from 'video-react';

export default ({src}) => {
  return (
    <Player
      playsInline
      src={src}
    />
  )
}