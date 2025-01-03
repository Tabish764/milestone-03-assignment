import Image from "next/image";
import React from "react";
import herobg from "../../../public/bg.jpeg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="  px-9 flex mt-[50px] justify-between mx-auto flex-wrap-reverse lg:flex-nowrap  items-center md:items-start sm:justify-center lg:justify-start   ">
      <div className="  mx-auto mt-[100px]   flex   text-white   flex-col ">
        <div className="max-w-[60rem]">
          <h1 className="text-4xl  lg:text-4xl font-bold leading-[50px] ">
            Explore the Latest GPU Specifications <br /> and Reviews
          </h1>

          <p className="text-lg sm:text-xl md:text-xl max-w-3xl  text-white mt-4  ">
            Find detailed GPU specs, performance reviews, and comparisons to
            help you choose the best GPU for your needs. Whether you&apos;re gaming,
            designing, or working on high-performance tasks, we have the latest
            information to guide your decision.
          </p>
        </div>

        <div>
          <Link href={"/blog"}>
            <button className="bg-green-500 hover:bg-green-600 hover:shadow-md  rounded-md text-white px-4 py-3 mt-4">
              Read Our Blogs
            </button>
          </Link>
        </div>
      </div>

      <div>
        <Image
          alt=""
          className="rounded-full border-2 border-green-500 shadow-md shadow-green-600 max-w-[300px] lg:max-w-[500px] h-[300px]   lg:h-[500px]"
          src={herobg}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
