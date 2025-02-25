import React from "react";
import { CiPause1 } from "react-icons/ci";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { CiShuffle } from "react-icons/ci";
import { IoIosRepeat } from "react-icons/io";
import { BiSolidPlaylist } from "react-icons/bi";
// Heart Like
// NotLiked
import { IoIosHeartEmpty } from "react-icons/io";
// Liked
import { IoIosHeart } from "react-icons/io";

// Volume icons
// High
import { IoIosVolumeHigh } from "react-icons/io";
// Low
import { IoIosVolumeLow } from "react-icons/io";
// Medium
import { IoVolumeMediumSharp } from "react-icons/io5";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Player = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from("#player  ", {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
    tl.from("#song-info > *  ", {
      opacity: 0,
      y: 50,
      duration: 0.2,
    });
    tl.from("#song-info ", {
      opacity: 0,
      y: 50,
      duration: 0.2,
    });
    tl.from("#media-controls", {
      opacity: 0,
      y: 50,
      duration: 0.2,
    });
    tl.from("#media-controls > * > *", {
      opacity: 0,
      y: 50,
      duration: 0.2,
    });
    tl.from("#volume-controls > *  ", {
      opacity: 0,
      y: 50,
      duration: 0.2,
      stagger: 0.2,
    });
  });
  return (
    <div
      id="player"
      className="absolute z-90 flex flex-col gap-2 bg-[rgba( 133, 133, 133, 0.3 )] bottom-0 w-full text-white border "
      style={{
        boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 7px )",

        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      {/* Progress Bar */}
      <div
        id="progressbar "
        className="bg-[blue]"
        style={{ padding: "0.2rem" }}
      ></div>

      <div id="song-controls" className="flex gap-4 justify-between">
        {/* Song Info */}
        <div id="song-info" className="flex gap-2 text-[0.8rem]">
          <img
            className="w-[3rem] h-full rounded-lg"
            src="data:image/jpeg;base64,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"
            alt="Current Song Cover"
          />
          <span>
            <h4 className="font-bold">Cruel</h4>
            <p className="text-[0.6rem]">Jackson Wang</p>
          </span>
        </div>
        {/* Media Controls */}
        <div id="media-controls" className="flex gap-2 items-center text-white">
          <IoIosRepeat />
          <MdSkipPrevious />
          <span
            className="inline-block bg-[#ffffff] rounded-full text-black"
            style={{ padding: "0.5rem" }}
          >
            <CiPause1 />
          </span>
          <MdSkipNext />

          <CiShuffle />
        </div>
        {/* Volume Controls  */}
        <div id="volume-controls" className="flex gap-2 items-center">
          <BiSolidPlaylist />
          <IoIosHeart className="bg-none" />
          <IoIosVolumeHigh />
        </div>
      </div>
    </div>
  );
};

export default Player;
