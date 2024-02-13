import React from "react";
import Marquee from "react-fast-marquee";
import { styles } from "../styles";

import { acc, bcolbd, ub, pa, iitsec, modelacademy, blsc, gov } from "../assets";

const Awards = () => {
  const awards = [
    {
      id: 1,
      name: "Blockchain Olympiad Bangladesh -2023 Finalist",
      institute: "BCOLBD",
      image: bcolbd,
    },
    {
      id: 2,
      name: "Blockchain Specialization",
      institute: "University at Buffalo",
      image: ub,
    },
    {
      id: 3,
      name: "Independence Cup -2022 - Rising star in Programming Contest",
      institute: "IITSEC",
      image: iitsec,
    },
    {
      id: 4,
      name: "5th DRMC Prothom Alo Narional Art and Music Festival -2019-First RunnerUp in Fantasy Character Art",
      institute: "ProthomAlo",
      image: pa,
    },
    {
      id: 5,
      name: "Independence Cup -2022 - Winner in Extempore Speech",
      institute: "IITSEC",
      image: iitsec,
    },
    {
      id: 6,
      name: "Bangladesh Government Scholarship on Higher Secondary School Certification 2020 - General",
      institute: "Bangladesh Government",
      image: gov,
    },
    {
      id: 7,
      name: "Talent Hunt -2018 - Champion in Caricature Art",
      institute: "Adamjee Cantonment College",
      image: acc,
    },
    {
      id: 8,
      name: "Bangladesh Government Scholarship on Secondary School Certification 2018 - Talentpool",
      institute: "Bangladesh Government",
      image: gov,
    },
    {
      id: 9,
      name: "Talent Hunt - 2018 -Second Runner Up in Green Writing",
      institute: "Adamjee Cantonment College",
      image: acc,
    },
    {
      id: 10,
      name: "Exceptional Student Award - 2017",
      institute: "Mirpur Model Academy",
      image: modelacademy,
    },
    // Add more awards as needed
  ];

  // Split awards into two rows
  const middleIndex = Math.ceil(awards.length / 2);
  const firstRow = awards.slice(0, middleIndex);
  const secondRow = awards.slice(middleIndex);

  return (
    <div>
      <div className="w-full flex justify-center my-16">
        <h1 className={`${styles.sectionHeadText}`}>
          Awards Showcase
        </h1>
      </div>
      <div className="mb-10">
        <div className="flex flex-wrap justify-center">
          <Marquee direction="left" className="py-5" speed={200}>
            {firstRow.map((award) => (
              <div key={award.id} className="card w-72 h-72 bg-base-100 shadow-xl mr-16 mb-10 flex flex-col justify-center items-center"> {/* Added margin */}
                <figure className="px-10 pt-10">
                  <img src={award.image} alt={award.name} className="rounded-xl h-40 w-40 object-cover" /> {/* Adjusted the size and added object-cover to maintain aspect ratio */}
                </figure>
                <div className="w-full flex justify-center mb-5">
                  <h2 className="text-xl font-semibold text-center">{award.name}</h2> {/* Centered text */}
                </div>
                <div className="w-full flex justify-center mb-10">
                  <p className="text-sm text-center">{award.institute}</p> {/* Centered text */}
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee direction="right" className="py-5" speed={200}> {/* Changed direction to right */}
            {secondRow.map((award) => (
              <div key={award.id} className="card w-72 h-72 bg-base-100 shadow-xl mr-16 mb-10 flex flex-col justify-center items-center"> {/* Added margin */}
                <figure className="px-10 pt-10">
                  <img src={award.image} alt={award.name} className="rounded-xl h-40 w-40 object-cover" /> {/* Adjusted the size and added object-cover to maintain aspect ratio */}
                </figure>
                <div className="w-full flex justify-center mb-5">
                  <h2 className="text-xl font-semibold text-center">{award.name}</h2> {/* Centered text */}
                </div>
                <div className="w-full flex justify-center mb-10">
                  <p className="text-sm text-center">{award.institute}</p> {/* Centered text */}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Awards;
