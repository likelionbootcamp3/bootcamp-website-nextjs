import style from "./PlayButton.module.css";
import { PlayIcon } from "@heroicons/react/24/solid";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const PlayButton = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <div className={style.playBtnBox}>
      <button className={style.playBtn} {...props}>
        <PlayIcon />
      </button>
      <div className={style.playBtnLine1}>
        <div className={style.playBtnLine2} />
      </div>
    </div>
  );
};

export default PlayButton;
