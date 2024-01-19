
"use client";

import { Carousel } from "flowbite-react";

const Slider = ({ items }) => {
  const imageUrlPrefix = "https://www.rockauto.com/";

  return (
    <Carousel className="rounded-0 m-0">
      {items?.map((item) => (
        <div className="relative overflow-hidden rounded-3xl">
          <img src={`${imageUrlPrefix}${item}`} className="" />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
