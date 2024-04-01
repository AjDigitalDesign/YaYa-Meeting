import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const currentTime = new Date().toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <section className="flex size-full flex-col text-white">
      <div className="h-[300px] w-full rounded-[20px]  bg-hero bg-cover mb-5">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-6xl">
              {currentTime}
            </h1>
            <p className="text-lg font-medium text-sky-1">{currentDate}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
