import React from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
const ArtistInfo = () => {
  return (
    <div className="absolute flex gap-3 bg-[#222222] h-[80%] top-[10%] right-0 z-99 w-full text-white">
      <NavLink to="/">
        <IoMdClose
          className="absolute top-0 h-fit w-fit  rounded-full bg-[#fcfcfc] text-black"
          style={{ padding: "0.2rem", margin: "0.8rem" }}
        />
      </NavLink>
      <div className="w-[60%] flex flex-col h-full overflow-hidden">
        <div
          className="flex justify-between h-[50%] "
          style={{ padding: "1rem 1.4rem" }}
        >
          <img
            alt="Artist Cover"
            className="w-[40%]  rounded-lg object-contain"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkDvi5FhVk7GlrX27O1G82SHfoUymSzhMEuw&s"
          />
          <section className="min-w-[60%] sm:min-w-[45%] lg:min-w-[50%] h-[100%] flex flex-col justify-between   ">
            <div
              className="flex flex-col gap-3 "
              style={{ marginBottom: "2rem" }}
            >
              <h4>STUDIO ALBUM</h4>
              <h2 className="text-3xl">MAGIC MAN</h2>
              <p>Britney Spears | 2022</p>
            </div>
            <div className="flex gap-4 text-sm ">
              <button
                className="border rounded-full bg-[#fcfcfc] text-black"
                style={{ padding: "0.5rem 1.5rem" }}
              >
                Listen
              </button>
              <button
                className="border rounded-full  "
                style={{ padding: "0.5rem 1.5rem" }}
              >
                Download
              </button>
            </div>
          </section>
        </div>

        <section
          id="ArtistSongs"
          className="grow flex flex-col gap-4 w-full overflow-y-scroll "
        >
          <div
            className="flex hover:bg-[#4e4e4e]  gap-6 "
            style={{ padding: "0.5rem 1rem" }}
          >
            <h4>1</h4>
            <h2 className="grow">Criminal</h2>
            <p>2:39</p>
          </div>
          <div
            className="flex hover:bg-[#4e4e4e] gap-6 "
            style={{ padding: "0.5rem 1rem" }}
          >
            <h4>2</h4>
            <h2 className="grow">Baby One more time</h2>
            <p>2:39</p>
          </div>
          <div
            className="flex hover:bg-[#4e4e4e] gap-6 "
            style={{ padding: "0.5rem 1rem" }}
          >
            <h4>3</h4>
            <h2 className="grow">Oops I did it</h2>
            <p>2:39</p>
          </div>
        </section>
      </div>
      <div className="w-[35%] ">
        <div>
          <h3 className="font-bold text-2xl" style={{ marginBottom: "1rem" }}>
            Biography
          </h3>
          <p>
            Britney Jean Spears is an American singer. Often referred to as the
            "Princess of Pop", Spears has sold over 150 million records
            worldwide, making her one of the world's best-selling music artists.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl" style={{ margin: "1rem" }}>
            Hit Songs
          </h3>
          <section>
            <div
              className="flex hover:bg-[#4e4e4e]  gap-6 "
              style={{ padding: "0.5rem 1rem" }}
            >
              <h4>1</h4>
              <h2 className="grow">Criminal</h2>
              <p>2:39</p>
            </div>
            <div
              className="flex hover:bg-[#4e4e4e] gap-6 "
              style={{ padding: "0.5rem 1rem" }}
            >
              <h4>2</h4>
              <h2 className="grow">Baby One more time</h2>
              <p>2:39</p>
            </div>
            <div
              className="flex hover:bg-[#4e4e4e] gap-6 "
              style={{ padding: "0.5rem 1rem" }}
            >
              <h4>3</h4>
              <h2 className="grow">Oops I did it</h2>
              <p>2:39</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
