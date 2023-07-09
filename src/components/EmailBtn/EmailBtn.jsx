// Utils
import React, { useState, useRef } from "react";

// Styles
import "./EmailBtn.scss";

// SVGs
import { ReactComponent as Copy } from "../../assets/ico/copy.svg";

// Sounds
import CopySound from "../../assets/sounds/copy.mp3";

const EmailBtn = () => {
  const [buttonText, setButtonText] = useState("Email");
  const [isCopied, setIsCopied] = useState(false);
  const email = "fratileo@gmail.com";
  const audioRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setButtonText("Copié");
    setIsCopied(true);
    audioRef.current.play();

    setTimeout(() => {
      setButtonText("Email");
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div
      className={isCopied ? "btn btn-secondary copied email-btn" : "btn btn-secondary email-btn"}
      onClick={handleCopy}
    >
      <audio ref={audioRef}>
        <source src={CopySound} type="audio/mp3" />
        Votre navigateur ne prend pas en charge l'élément audio.
      </audio>
      <Copy />
      {buttonText}
    </div>
  );
};
export default EmailBtn;
