import { Button, ShoeCard } from "../components";
import { IoArrowForwardCircle } from "react-icons/io5";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";

import { useState } from "react";

const Hero = () => {
  const [mainImg, setMainImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col xl:flex-row justify-center gap-10 max-container "
    >
      <div className="relative w-full xl:w-2/5 flex  flex-col justify-center items-start max-xl:sm:px-16 max-xl:px-8 pt-28 ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 ">Nike</span>Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button
          label="Shop Now"
          icon={<IoArrowForwardCircle className="ml-2 w-5 h-5" />}
          className=" flex justify-center items-center gap-2 px-7 py-4 bg-coral-red leading-none border text-white font-montserrat rounded-full text-lg"
        />
        <div className="flex justify-center items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={mainImg}
          alt="shoe collection"
          className=" w-[610px] h-[502px] object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeMainImg={(shoe) => setMainImg(shoe)}
                mainImg={mainImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
