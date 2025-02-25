import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavBar = () => {
  useGSAP(() => {
    gsap.from("ul > li   ", {
      opacity: 0,
      x: -100,
      duration: 0.5,
      stagger: 0.1,
    });
    gsap.from("h2", {
      opacity: 0,
      x: -100,
      duration: 0.5,
    });
  });
  return (
    <nav
      className="min-w-[20%] md:min-w-[10%] lg:min-w-[10%] flex flex-col justify-between bg-[#111111] text-white"
      style={{ padding: "1rem 0" }}
    >
      <AiOutlineMenu />
      <ul className=" h-[20%]">
        <li
          className="hover:bg-[#4e4e4e] rounded-lg"
          style={{ padding: "0 0.5rem" }}
        >
          <NavLink to="/"> Main</NavLink>
        </li>
        <li
          className="hover:bg-[#4e4e4e] rounded-lg"
          style={{ padding: "0 0.5rem" }}
        >
          <NavLink to="/settings"> Radio</NavLink>
        </li>
        <li
          className="hover:bg-[#4e4e4e] rounded-lg"
          style={{ padding: "0 0.5rem" }}
        >
          <NavLink to="/settings"> Podcasts</NavLink>
        </li>
        <li
          className="hover:bg-[#4e4e4e] rounded-lg"
          style={{ padding: "0 0.5rem" }}
        >
          <NavLink to="/settings"> Books</NavLink>
        </li>
      </ul>
      <div className=" h-[35%]">
        <h2 className="font-bold" style={{ marginBottom: "0.5rem" }}>
          My music
        </h2>
        <ul>
          <li
            className="hover:bg-[#4e4e4e] rounded-lg"
            style={{ padding: "0 0.5rem" }}
          >
            {" "}
            <NavLink to="/settings"> Tracks</NavLink>
          </li>
          <li
            className="hover:bg-[#4e4e4e] rounded-lg"
            style={{ padding: "0 0.5rem" }}
          >
            {" "}
            <NavLink to="/settings"> Album</NavLink>
          </li>
          <li
            className="hover:bg-[#4e4e4e] rounded-lg"
            style={{ padding: "0 0.5rem" }}
          >
            {" "}
            <NavLink to="/settings"> Artists</NavLink>
          </li>
          <li
            className="hover:bg-[#4e4e4e] rounded-lg"
            style={{ padding: "0 0.5rem" }}
          >
            {" "}
            <NavLink to="/settings"> Playlist</NavLink>
          </li>
        </ul>
      </div>
      <ul className="">
        <li
          className="hover:bg-[#4e4e4e] rounded-lg"
          style={{ padding: "0 0.5rem" }}
        >
          <NavLink to="/settings"> Settings</NavLink>
        </li>
        <li
          className="hover:bg-[#4e4e4e] rounded-lg"
          style={{ padding: "0 0.5rem" }}
        >
          {" "}
          <NavLink to="/settings"> Help</NavLink>
        </li>
        <li
          className="hover:bg-[#4e4e4e] rounded-lg"
          style={{ padding: "0 0.5rem" }}
        >
          {" "}
          <NavLink to="/settings"> Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
