// utils
import { useRef, useState, useEffect } from "react";

// Styles
import "./Bento.scss";

// SVGs
import { ReactComponent as Play } from "../../assets/ico/play.svg";
import { ReactComponent as Pause } from "../../assets/ico/pause.svg";
import { ReactComponent as Spotify } from "../../assets/ico/spotify.svg";

// Sounds
import MusicSound from "../../assets/sounds/cigarettes.mp3";

const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume] = useState(0.1);

  const playSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <div className="card spotify">
      <audio ref={audioRef}>
        <source src={MusicSound} type="audio/mp3" />
        Votre navigateur ne prend pas en charge l'élément audio.
      </audio>
      <div className="content">
        <div className="ico">
          <Spotify />
        </div>
        <div className="img-content">
          <img src="/assets/img/music_icon.png" alt="Pochette de l'album Melophobia" />
          <div className="player" onClick={playSound}>
            {isPlaying ? <Pause /> : <Play />}
          </div>
        </div>
        <div className="text">
          <p>Cage The Elephant</p>
          <h3>Cigarette Daydream</h3>
        </div>
      </div>
    </div>
  );
};
export default Music;
