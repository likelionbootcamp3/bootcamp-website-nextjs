import "./PlayButton.css";
import { PlayIcon } from "@heroicons/react/24/solid";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const PlayButton = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <div className="play-btn-box">
      <button className="play-button" {...props}>
        <PlayIcon />
      </button>
      <div className="play-btn-line1" id="line1">
        <div className="play-btn-line2" id="line2" />
      </div>
    </div>
  );
};

export default PlayButton;
