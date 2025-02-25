import React, { useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoIosPlay } from "react-icons/io";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Main = () => {
  const searchInputRef = useRef(null);
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    console.log(searchInputRef.current.value);
  };
  useEffect(() => {
    gsap.fromTo(
      "main > nav > hr",
      {
        opacity: 0.5,
        duration: 1,
        scale: 0.9,
      },
      {
        opacity: 1,
        duration: 1,
        scale: 1,
        yoyo: true,
        repeat: -1,
      }
    );
  });
  useGSAP(() => {
    gsap.from("main > nav", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });
    gsap.from("#content > div", {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      delay: 0.5,
    });
  });
  return (
    <main
      className=" min-w-[70%]   md:min-w-[75%]  h-full bg-[#1f1f1f] rounded-lg text-white flex flex-col "
      style={{ padding: "1rem 1rem" }}
    >
      <nav>
        <form
          onSubmit={searchSubmitHandler}
          className="text-white flex items-center"
        >
          <button type="submit" style={{ marginRight: "0.5rem" }}>
            <IoSearch className="text-[1.2rem]" />
          </button>
          <input
            ref={searchInputRef}
            type="text"
            className="text-[0.8rem] border-none outline-none w-full"
            placeholder="Search"
          />
        </form>
        <hr style={{ marginTop: "0.5rem" }} />
      </nav>
      <main
        id="main"
        style={{ marginTop: "1rem" }}
        className="overflow-y-scroll overflow-x-hidden "
      >
        <h2 className="text-2xl">Main</h2>
        {/* Main Link Content */}
        <div id="content" style={{ margin: "0.5rem" }}>
          {/* Top Card */}
          <div
            className="relative bg-[#3d603d] rounded-2xl h-[10rem] flex flex-col justify-between overflow-hidden"
            style={{ padding: "0.5rem" }}
          >
            <span>
              <h5>Billie Eilish</h5>
              <p className="text-[1.8rem]" style={{ marginLeft: "0.2rem" }}>
                What Was I Made For?
              </p>
            </span>
            <NavLink
              to="/listen-now"
              className="flex items-center bg-[#ffffff] text-[0.6rem] font-semibold text-black rounded-full w-fit"
              style={{ padding: "0.5rem 2.5rem", marginBottom: "0.5rem" }}
            >
              <span>
                <IoIosPlay className="text-[1rem]" />
              </span>
              Listen now
            </NavLink>
            <img
              className="absolute  top-0 right-0 w-fit h-[10rem] mix-blend-multiply"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH9aXO1hyHRKDBlat7QwXHA_Oj0ij4srTPFQ&s"
              alt="Artist Cover"
            />
          </div>

          {/* PlayList for you cards */}
          <div>
            {/* PlayList Header */}
            <span
              className="flex items-center justify-between w-full  "
              style={{ padding: "1rem 0.5rem" }}
            >
              <h4 className="font-semibold">PlayList for you</h4>
              <NavLink to="/view-all" className="text-[0.8rem]">
                View all
              </NavLink>
            </span>
            {/* PlayList Cards */}
            <div
              id="playlist-cards"
              className="flex gap-2 flex-nowrap overflow-x-scroll "
            >
              <div
                className=" object-cover  bg-[url('data:image/jpeg;base64,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')] min-w-[10rem] h-[10rem] flex flex-col justify-between rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <h4>Something new </h4>
                <p>28tracks</p>
              </div>
              <div
                className="bg-[url('data:image/jpeg;base64,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')] min-w-[10rem] h-[10rem] flex flex-col justify-between rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <h4>Something new </h4>
                <p>28tracks</p>
              </div>
              <div
                className=" bg-[url('https://i.pinimg.com/736x/16/41/d4/1641d44d98048fbb0befea634248ee54.jpg')] object-cover min-w-[10rem] h-[10rem] flex flex-col justify-between rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <h4>Something new </h4>
                <p>28tracks</p>
              </div>

              <div
                className="bg-[#264673] min-w-[10rem] h-[10rem] flex flex-col justify-between rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <h4>Something new </h4>
                <p>28tracks</p>
              </div>
            </div>
          </div>

          {/* You may also Like */}
          <div>
            {/* Also Like Header */}
            <span
              className="flex items-center justify-between w-full  "
              style={{ padding: "1rem 0.5rem" }}
            >
              <h4 className="font-semibold">You may also like</h4>
              <NavLink to="/also-like-view-all" className="text-[0.8rem]">
                View all
              </NavLink>
            </span>
            {/* Also Like Cards */}
            <div className="flex flex-wrap justify-between   overflow-hidden gap-2 ">
              <div
                className=" min-w-[40%] h-[4rem] gap-2 flex justify-between items-center rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <img
                  className=" object-cover h-full w-[30%] md:w-[20%] rounded-md"
                  src="https://i.pinimg.com/736x/16/41/d4/1641d44d98048fbb0befea634248ee54.jpg"
                  alt="Song Cover"
                />
                <h4 className="text-[1rem] font-bold self-start  w-[55%] h-full">
                  StarBoy
                  <span className="block  font-light text-[0.6rem]">
                    - The Weeknd
                  </span>{" "}
                </h4>
                <p className="text-[0.6rem]">3:13</p>
              </div>
              <div
                className=" min-w-[40%] h-[4rem] gap-2 flex justify-between items-center rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <img
                  className=" object-cover h-full w-[30%] md:w-[20%] rounded-md"
                  src="data:image/jpeg;base64,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"
                  alt="Song Cover"
                />
                <h4 className="text-[1rem] font-bold self-start  w-[55%] h-full">
                  StarBoy
                  <span className="block  font-light text-[0.6rem]">
                    - The Weeknd
                  </span>{" "}
                </h4>
                <p className="text-[0.6rem]">3:13</p>
              </div>
              <div
                className=" min-w-[40%] h-[4rem] gap-2 flex justify-between items-center rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <img
                  className=" object-cover h-full w-[30%] md:w-[20%] rounded-md"
                  src="data:image/jpeg;base64,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"
                  alt="Song Cover"
                />
                <h4 className="text-[1rem] font-bold self-start  w-[55%] h-full">
                  StarBoy
                  <span className="block  font-light text-[0.6rem]">
                    - The Weeknd
                  </span>{" "}
                </h4>
                <p className="text-[0.6rem]">3:13</p>
              </div>
              <div
                className=" min-w-[40%] h-[4rem] gap-2 flex justify-between items-center rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <img
                  className=" object-cover h-full w-[30%] md:w-[20%] rounded-md"
                  src="https://i.pinimg.com/736x/16/41/d4/1641d44d98048fbb0befea634248ee54.jpg"
                  alt="Song Cover"
                />
                <h4 className="text-[1rem] font-bold self-start  w-[55%] h-full">
                  StarBoy
                  <span className="block  font-light text-[0.6rem]">
                    - The Weeknd
                  </span>{" "}
                </h4>
                <p className="text-[0.6rem]">3:13</p>
              </div>
            </div>
          </div>

          {/* Liked Songs */}
          <div>
            {/* Liked Header */}
            <span
              className="flex items-center justify-between w-full  "
              style={{ padding: "1rem 0.5rem" }}
            >
              <h4 className="font-semibold">Liked Tracks</h4>
              <NavLink to="/also-like-view-all" className="text-[0.8rem]">
                View all
              </NavLink>
            </span>
            {/* Liked Cards */}
            <div className="flex flex-wrap justify-between   overflow-hidden gap-2 ">
              <div
                className=" min-w-[40%] h-[4rem] gap-2 flex justify-between items-center rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <img
                  className=" object-cover h-full w-[30%] md:w-[20%] rounded-md"
                  src="https://i.pinimg.com/736x/16/41/d4/1641d44d98048fbb0befea634248ee54.jpg"
                  alt="Song Cover"
                />
                <h4 className="text-[1rem] font-bold self-start  w-[55%] h-full">
                  StarBoy
                  <span className="block  font-light text-[0.6rem]">
                    - The Weeknd
                  </span>{" "}
                </h4>
                <p className="text-[0.6rem]">3:13</p>
              </div>
              <div
                className=" min-w-[40%] h-[4rem] gap-2 flex justify-between items-center rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <img
                  className=" object-cover h-full w-[30%] md:w-[20%] rounded-md"
                  src="https://i.pinimg.com/736x/16/41/d4/1641d44d98048fbb0befea634248ee54.jpg"
                  alt="Song Cover"
                />
                <h4 className="text-[1rem] font-bold self-start  w-[55%] h-full">
                  StarBoy
                  <span className="block  font-light text-[0.6rem]">
                    - The Weeknd
                  </span>{" "}
                </h4>
                <p className="text-[0.6rem]">3:13</p>
              </div>

              <div
                className=" min-w-[40%] h-[4rem] gap-2 flex justify-between items-center rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <img
                  className=" object-cover h-full w-[30%] md:w-[20%] rounded-md"
                  src="data:image/jpeg;base64,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"
                  alt="Song Cover"
                />
                <h4 className="text-[1rem] font-bold self-start  w-[55%] h-full">
                  StarBoy
                  <span className="block  font-light text-[0.6rem]">
                    - The Weeknd
                  </span>{" "}
                </h4>
                <p className="text-[0.6rem]">3:13</p>
              </div>
              <div
                className=" min-w-[40%] h-[4rem] gap-2 flex justify-between items-center rounded-xl"
                style={{ padding: "0.5rem" }}
              >
                <img
                  className=" object-cover h-full w-[30%] md:w-[20%] rounded-md"
                  src="data:image/jpeg;base64,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"
                  alt="Song Cover"
                />
                <h4 className="text-[1rem] font-bold self-start  w-[55%] h-full">
                  StarBoy
                  <span className="block  font-light text-[0.6rem]">
                    - The Weeknd
                  </span>{" "}
                </h4>
                <p className="text-[0.6rem]">3:13</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

export default Main;
