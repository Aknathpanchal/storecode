import React from "react";

const Home = () => {
  return (
    <section id="home" className="justify-evenly bg-slate-300 ">
      <div className="w-[70%] min-h-[50vh] bg-white rounded-3xl px-[10%] py-[10%] m-auto flex flex-col gap-[20%] items-center sm:w-full">
        <h1
          className="text-8xl text-center text-black font-bold sm:text-7xl "
          style={{
            display: "block",
            fontFamily: "poppins-bold",
            color: "#333333",
            lineHeight: "1.2",
          }}
        >
          Shop with Storecode
        </h1>
        <br/>
        <br />
        <div
          className="flex items-center w-full border-b-8 !border-gray-500 py-2"
          style={{ borderBottom: "1px solid gray" }}
        >
          <input
            className="text-3xl appearance-none bg-transparent border-none !w-full  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter Product Code"
            aria-label="code"
          />
        </div>
        <br/>
        <br />
        <button
          className="w-full uppercase p-10 rounded-full text-3xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(85,85,98,1) 45%, rgba(24,24,24,1) 100%)",
          }}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Home;
